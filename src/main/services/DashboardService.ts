import { prisma } from '../database/prisma';

function getDateRange(filters?: { startDate?: string; endDate?: string }) {
  let start = new Date();
  start.setHours(0, 0, 0, 0);
  let end = new Date();
  end.setHours(23, 59, 59, 999);

  if (filters?.startDate) {
    start = new Date(filters.startDate);
  }
  if (filters?.endDate) {
    end = new Date(filters.endDate);
  }
  return { start, end };
}

export const DashboardService = {
  async getMetrics(filters?: { startDate?: string; endDate?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        status: {
          not: 'Cancelado'
        }
      },
      select: {
        total_amount: true,
      }
    });

    const totalOrders = orders.length;
    let totalRevenue = 0;
    
    for (const order of orders) {
      totalRevenue += Number(order.total_amount);
    }

    const averageTicket = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    return {
      totalRevenue,
      totalOrders,
      averageTicket
    };
  },

  async getTopItems(filters?: { startDate?: string; endDate?: string }) {
    const { start, end } = getDateRange(filters);

    const topItems = await prisma.order_items.groupBy({
      by: ['product_id'],
      where: {
        order: {
          created_at: {
            gte: start,
            lte: end,
          },
          status: {
            not: 'Cancelado'
          }
        }
      },
      _sum: {
        quantity: true
      },
      orderBy: {
        _sum: {
          quantity: 'desc'
        }
      },
      take: 5
    });

    const enrichedTopItems = await Promise.all(
      topItems.map(async (item) => {
        const product = await prisma.products.findUnique({
          where: { id: item.product_id },
          select: { name: true }
        });
        return {
          productName: product?.name || 'Produto Desconhecido',
          quantity: item._sum?.quantity || 0
        };
      })
    );

    return enrichedTopItems;
  },

  async getChartData(filters?: { startDate?: string; endDate?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        status: {
          not: 'Cancelado'
        }
      },
      select: {
        created_at: true,
        total_amount: true,
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    const diffInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    // Agrupa por hora se a faixa de tempo for curta (ex: 3 dias = 72h), caso contrário, por dia.
    const groupBy = diffInHours <= 72 ? 'hour' : 'day';

    const groupedData: Record<string, number> = {};

    for (const order of orders) {
      const date = new Date(order.created_at);
      let key = '';

      if (groupBy === 'hour') {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const hour = String(date.getHours()).padStart(2, '0');
        key = `${day}/${month} ${hour}:00`;
      } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        key = `${day}/${month}`;
      }

      if (!groupedData[key]) {
        groupedData[key] = 0;
      }
      groupedData[key] += Number(order.total_amount);
    }

    return Object.keys(groupedData).map(key => ({
      name: key,
      total: Number(groupedData[key].toFixed(2)) // Format money to 2 decimals
    }));
  }
};
