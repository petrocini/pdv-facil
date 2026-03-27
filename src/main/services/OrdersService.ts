import { prisma } from '../database/prisma';
import { PricingService } from './PricingService';
import logger from '../lib/logger';

export const OrdersService = {
  async create(cartPayload: any) {
    return prisma.$transaction(async (tx) => {
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);

      const todayEnd = new Date();
      todayEnd.setHours(23, 59, 59, 999);

      const lastOrder = await tx.orders.findFirst({
        where: {
          created_at: {
            gte: todayStart,
            lte: todayEnd,
          }
        },
        orderBy: {
          ticket_number: 'desc'
        }
      });

      const auto_ticket_number = lastOrder ? lastOrder.ticket_number + 1 : 1;
      const ticket_number = cartPayload.ticketNumber ? Number(cartPayload.ticketNumber) : auto_ticket_number;
      const payment_method = cartPayload.paymentMethod || null;

      // Recalculate total from DB prices — never trust frontend values
      const { totalAmount, enrichedItems } = await PricingService.calculateOrderTotal(tx, cartPayload.items);

      const order = await tx.orders.create({
        data: {
          ticket_number,
          total_amount: totalAmount,
          status: 'Pago', 
          payment_method,
          order_items: {
            create: enrichedItems.map((item) => ({
              product_id: item.product_id,
              quantity: item.quantity,
              unit_price: item.unit_price,
              order_item_addons: {
                create: item.addons.map((addon) => ({
                  addon_id: addon.addon_id,
                  quantity: addon.quantity,
                  charged_price: addon.charged_price
                }))
              }
            }))
          }
        },
        include: {
          order_items: {
            include: {
              order_item_addons: true
            }
          }
        }
      });

      logger.info(`Order created: ticket=${ticket_number}, total=${totalAmount.toFixed(2)}, items=${enrichedItems.length}`);

      return order;
    });
  },

  async getNextTicketNumber() {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const lastOrder = await prisma.orders.findFirst({
      where: {
        created_at: {
          gte: todayStart,
          lte: todayEnd,
        }
      },
      orderBy: {
        ticket_number: 'desc'
      }
    });

    return lastOrder ? lastOrder.ticket_number + 1 : 1;
  },

  async getAll(filters?: { dateFrom?: string; dateTo?: string; ticket_number?: string; status?: string }) {
    const where: any = {};

    if (filters?.dateFrom || filters?.dateTo) {
      where.created_at = {};
      if (filters.dateFrom) {
        // Parse as local date to avoid UTC offset shifting to the wrong day
        const [y, m, d] = filters.dateFrom.split('-').map(Number);
        const from = new Date(y, m - 1, d, 0, 0, 0, 0);
        where.created_at.gte = from;
      }
      if (filters.dateTo) {
        const [y, m, d] = filters.dateTo.split('-').map(Number);
        const to = new Date(y, m - 1, d, 23, 59, 59, 999);
        where.created_at.lte = to;
      }
    }

    if (filters?.ticket_number) {
      where.ticket_number = Number(filters.ticket_number);
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    return prisma.orders.findMany({
      where,
      orderBy: {
        created_at: 'desc'
      }
    });
  },

  async getById(id: string) {
    if (!id) throw new Error('Order ID is required');

    const order = await prisma.orders.findUnique({
      where: { id },
      include: {
        order_items: {
          include: {
            product: true,
            order_item_addons: {
              include: {
                addon: true
              }
            }
          }
        }
      }
    });

    if (!order) throw new Error('Order not found');

    return order;
  },

  async cancel(id: string, justification: string) {
    if (!id) throw new Error('Order ID is required');
    if (!justification || justification.trim() === '') throw new Error('Justification is required to cancel an order');

    return prisma.orders.update({
      where: { id },
      data: {
        status: 'Cancelado',
        cancel_reason: justification
      }
    });
  }
};
