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
  async getMetrics(filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        status: {
          not: 'Cancelado'
        },
        ...(filters?.paymentMethod ? { payment_method: filters.paymentMethod } : {}),
        ...(filters?.eventId ? { event_id: filters.eventId } : {}),
        ...(filters?.city ? { event: { city: filters.city } } : {})
      },
      select: {
        total_amount: true,
      }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        ...(filters?.paymentMethod ? { payment_method: filters.paymentMethod } : {}),
        ...(filters?.eventId ? { event_id: filters.eventId } : {}),
        ...(filters?.city ? { event: { city: filters.city } } : {})
      },
      select: {
        amount: true,
        type: true
      }
    });

    const totalOrders = orders.length;
    let totalRevenue = 0;
    
    for (const order of orders) {
      totalRevenue += Number(order.total_amount);
    }

    for (const m of movements) {
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        totalRevenue += amt;
      } else {
        totalRevenue -= amt;
      }
    }

    const averageTicket = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    return {
      totalRevenue,
      totalOrders,
      averageTicket
    };
  },

  async getTopItems(filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
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
          },
          ...(filters?.paymentMethod ? { payment_method: filters.paymentMethod } : {}),
          ...(filters?.eventId ? { event_id: filters.eventId } : {}),
          ...(filters?.city ? { event: { city: filters.city } } : {})
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

  async getChartData(filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        status: {
          not: 'Cancelado'
        },
        ...(filters?.paymentMethod ? { payment_method: filters.paymentMethod } : {}),
        ...(filters?.eventId ? { event_id: filters.eventId } : {}),
        ...(filters?.city ? { event: { city: filters.city } } : {})
      },
      select: {
        created_at: true,
        total_amount: true,
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        ...(filters?.paymentMethod ? { payment_method: filters.paymentMethod } : {}),
        ...(filters?.eventId ? { event_id: filters.eventId } : {}),
        ...(filters?.city ? { event: { city: filters.city } } : {})
      },
      select: {
        created_at: true,
        amount: true,
        type: true
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

    for (const m of movements) {
      const date = new Date(m.created_at);
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
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        groupedData[key] += amt;
      } else {
        groupedData[key] -= amt;
      }
    }

    return Object.keys(groupedData).map(key => ({
      name: key,
      total: Number(groupedData[key].toFixed(2)) // Format money to 2 decimals
    }));
  },

  async getSalesByPaymentMethod(filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        status: {
          not: 'Cancelado'
        },
        payment_method: {
          not: null
        },
        ...(filters?.eventId ? { event_id: filters.eventId } : {}),
        ...(filters?.city ? { event: { city: filters.city } } : {})
      },
      select: {
        payment_method: true,
        total_amount: true,
      }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
        payment_method: {
          not: null
        },
        ...(filters?.eventId ? { event_id: filters.eventId } : {}),
        ...(filters?.city ? { event: { city: filters.city } } : {})
      },
      select: {
        payment_method: true,
        amount: true,
        type: true
      }
    });

    const groupedData: Record<string, { total: number; count: number }> = {};

    for (const order of orders) {
      const method = order.payment_method || 'Outro';
      if (!groupedData[method]) {
        groupedData[method] = { total: 0, count: 0 };
      }
      groupedData[method].total += Number(order.total_amount);
      groupedData[method].count += 1;
    }

    for (const m of movements) {
      const method = m.payment_method || 'Outro';
      if (!groupedData[method]) {
        groupedData[method] = { total: 0, count: 0 };
      }
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        groupedData[method].total += amt;
      } else {
        groupedData[method].total -= amt;
      }
    }

    return Object.keys(groupedData).map(key => ({
      method: key,
      total: Number(groupedData[key].total.toFixed(2)),
      count: groupedData[key].count
    })).sort((a, b) => b.total - a.total);
  },

  // --- NOVOS MÉTODOS POR EVENTO / CIDADE ---

  async getEventMetrics(eventId: string) {
    const event = await prisma.events.findUnique({ where: { id: eventId } });
    if (!event) throw new Error('Evento não encontrado');

    const orders = await prisma.orders.findMany({
      where: { event_id: eventId, status: { not: 'Cancelado' } },
      select: { total_amount: true }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: { event_id: eventId },
      select: { amount: true, type: true }
    });

    const totalOrders = orders.length;
    const salesRevenue = orders.reduce((acc, order) => acc + Number(order.total_amount), 0);
    
    let extraordinaryInflow = 0;
    let extraordinaryOutflow = 0;
    for (const m of movements) {
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        extraordinaryInflow += amt;
      } else {
        extraordinaryOutflow += amt;
      }
    }

    const totalRevenue = salesRevenue + extraordinaryInflow - extraordinaryOutflow;
    const averageTicket = totalOrders > 0 ? salesRevenue / totalOrders : 0;

    return {
      eventName: event.name,
      city: event.city,
      salesRevenue,
      extraordinaryInflow,
      extraordinaryOutflow,
      totalRevenue,
      totalOrders,
      averageTicket
    };
  },

  async getCityComparison(filters?: { startDate?: string; endDate?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: { gte: start, lte: end },
        status: { not: 'Cancelado' },
        event_id: { not: null }
      },
      select: { total_amount: true, event: { select: { city: true } } }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: {
        created_at: { gte: start, lte: end }
      },
      select: { amount: true, type: true, event: { select: { city: true } } }
    });

    const cityStats: Record<string, { totalRevenue: number; totalOrders: number }> = {};

    for (const order of orders) {
      if (!order.event) continue;
      const city = order.event.city;
      if (!cityStats[city]) cityStats[city] = { totalRevenue: 0, totalOrders: 0 };
      
      cityStats[city].totalRevenue += Number(order.total_amount);
      cityStats[city].totalOrders += 1;
    }

    for (const m of movements) {
      if (!m.event) continue;
      const city = m.event.city;
      if (!cityStats[city]) cityStats[city] = { totalRevenue: 0, totalOrders: 0 };
      
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        cityStats[city].totalRevenue += amt;
      } else {
        cityStats[city].totalRevenue -= amt;
      }
    }

    return Object.keys(cityStats).map(city => ({
      city,
      totalRevenue: Number(cityStats[city].totalRevenue.toFixed(2)),
      totalOrders: cityStats[city].totalOrders,
      averageTicket: cityStats[city].totalOrders > 0 ? Number((cityStats[city].totalRevenue / cityStats[city].totalOrders).toFixed(2)) : 0
    })).sort((a, b) => b.totalRevenue - a.totalRevenue);
  },

  async getEventComparison(filters?: { startDate?: string; endDate?: string }) {
    const hasDateFilter = !!(filters?.startDate || filters?.endDate);
    const { start, end } = getDateRange(filters);

    const events = await prisma.events.findMany({
      where: {
        is_active: true,
        ...(hasDateFilter ? {
          start_date: { lte: end },
          end_date: { gte: start }
        } : {})
      },
      include: {
        orders: {
          where: { status: { not: 'Cancelado' } },
          select: { total_amount: true }
        },
        extraordinary_movements: {
          select: { amount: true, type: true }
        }
      }
    });

    return events.map(event => {
      const totalOrders = event.orders.length;
      let totalRevenue = event.orders.reduce((acc, order) => acc + Number(order.total_amount), 0);
      
      for (const m of event.extraordinary_movements) {
        const amt = Number(m.amount);
        if (m.type === 'entrada') {
          totalRevenue += amt;
        } else {
          totalRevenue -= amt;
        }
      }

      return {
        id: event.id,
        eventName: event.name,
        city: event.city,
        totalRevenue: Number(totalRevenue.toFixed(2)),
        totalOrders,
        startDate: event.start_date,
        endDate: event.end_date
      };
    }).sort((a, b) => b.totalRevenue - a.totalRevenue);
  },

  async getEventTopItems(eventId: string) {
    const topItems = await prisma.order_items.groupBy({
      by: ['product_id'],
      where: {
        order: {
          event_id: eventId,
          status: { not: 'Cancelado' }
        }
      },
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: 'desc' } },
      take: 5
    });

    return Promise.all(
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
  },

  async getCityRevenueOverTime(filters?: { startDate?: string; endDate?: string }) {
    const { start, end } = getDateRange(filters);

    const orders = await prisma.orders.findMany({
      where: {
        created_at: { gte: start, lte: end },
        status: { not: 'Cancelado' },
        event_id: { not: null }
      },
      select: { created_at: true, total_amount: true, event: { select: { city: true } } },
      orderBy: { created_at: 'asc' }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: {
        created_at: { gte: start, lte: end }
      },
      select: { created_at: true, amount: true, type: true, event: { select: { city: true } } }
    });

    const diffInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    const groupBy = diffInHours <= 72 ? 'hour' : 'day';

    // dateKey -> { city1: val, city2: val }
    const groupedData: Record<string, Record<string, number>> = {};
    const allCities = new Set<string>();

    for (const order of orders) {
      if (!order.event) continue;
      
      const city = order.event.city;
      allCities.add(city);
      
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

      if (!groupedData[key]) groupedData[key] = {};
      if (!groupedData[key][city]) groupedData[key][city] = 0;
      
      groupedData[key][city] += Number(order.total_amount);
    }

    for (const m of movements) {
      if (!m.event) continue;
      
      const city = m.event.city;
      allCities.add(city);
      
      const date = new Date(m.created_at);
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

      if (!groupedData[key]) groupedData[key] = {};
      if (!groupedData[key][city]) groupedData[key][city] = 0;
      
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        groupedData[key][city] += amt;
      } else {
        groupedData[key][city] -= amt;
      }
    }

    return Object.keys(groupedData).map(key => {
      const dataPoint: any = { date: key };
      allCities.forEach(city => {
        dataPoint[city] = Number((groupedData[key][city] || 0).toFixed(2));
      });
      return dataPoint;
    });
  },

  async getEventPaymentMethods(eventId: string) {
    const orders = await prisma.orders.findMany({
      where: {
        event_id: eventId,
        status: { not: 'Cancelado' },
        payment_method: { not: null }
      },
      select: { payment_method: true, total_amount: true }
    });

    const movements = await prisma.extraordinary_movements.findMany({
      where: {
        event_id: eventId,
        payment_method: { not: null }
      },
      select: { payment_method: true, amount: true, type: true }
    });

    const groupedData: Record<string, { total: number; count: number }> = {};

    for (const order of orders) {
      const method = order.payment_method || 'Outro';
      if (!groupedData[method]) {
        groupedData[method] = { total: 0, count: 0 };
      }
      groupedData[method].total += Number(order.total_amount);
      groupedData[method].count += 1;
    }

    for (const m of movements) {
      const method = m.payment_method || 'Outro';
      if (!groupedData[method]) {
        groupedData[method] = { total: 0, count: 0 };
      }
      const amt = Number(m.amount);
      if (m.type === 'entrada') {
        groupedData[method].total += amt;
      } else {
        groupedData[method].total -= amt;
      }
    }

    return Object.keys(groupedData).map(key => ({
      method: key,
      total: Number(groupedData[key].total.toFixed(2)),
      count: groupedData[key].count
    })).sort((a, b) => b.total - a.total);
  },

  async getCityRanking(filters?: { startDate?: string; endDate?: string }) {
    const hasDateFilter = !!(filters?.startDate || filters?.endDate);
    const { start, end } = getDateRange(filters);

    const events = await prisma.events.findMany({
      where: {
        is_active: true,
        ...(hasDateFilter ? {
          start_date: { lte: end },
          end_date: { gte: start }
        } : {})
      },
      include: {
        orders: {
          where: { status: { not: 'Cancelado' } },
          select: { total_amount: true }
        },
        extraordinary_movements: {
          select: { amount: true, type: true }
        }
      }
    });

    const cityStats: Record<string, { totalRevenue: number; totalOrders: number; eventCount: number; events: Set<string> }> = {};

    for (const event of events) {
      const city = event.city;
      if (!cityStats[city]) cityStats[city] = { totalRevenue: 0, totalOrders: 0, eventCount: 0, events: new Set() };
      
      cityStats[city].events.add(event.id);
      
      for (const order of event.orders) {
        cityStats[city].totalRevenue += Number(order.total_amount);
        cityStats[city].totalOrders += 1;
      }

      for (const m of event.extraordinary_movements) {
        const amt = Number(m.amount);
        if (m.type === 'entrada') {
          cityStats[city].totalRevenue += amt;
        } else {
          cityStats[city].totalRevenue -= amt;
        }
      }
    }

    return Object.keys(cityStats).map(city => ({
      city,
      totalRevenue: Number(cityStats[city].totalRevenue.toFixed(2)),
      totalOrders: cityStats[city].totalOrders,
      eventCount: cityStats[city].events.size,
      averageTicket: cityStats[city].totalOrders > 0 
        ? Number((cityStats[city].totalRevenue / cityStats[city].totalOrders).toFixed(2)) 
        : 0
    })).sort((a, b) => b.totalRevenue - a.totalRevenue);
  }
};
