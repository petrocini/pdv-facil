import { prisma } from '../database/prisma';

export const DashboardService = {
  async getMetrics() {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: {
          gte: todayStart,
          lte: todayEnd,
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

  async getTopItems() {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const topItems = await prisma.order_items.groupBy({
      by: ['product_id'],
      where: {
        order: {
          created_at: {
            gte: todayStart,
            lte: todayEnd,
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
          quantity: item._sum.quantity || 0
        };
      })
    );

    return enrichedTopItems;
  }
};
