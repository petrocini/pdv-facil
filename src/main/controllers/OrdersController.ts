import { OrdersService } from '../services/OrdersService';
import logger from '../lib/logger';

export const OrdersController = {
  async create(_event: any, cartPayload: any) {
    try {
      const result = await OrdersService.create(cartPayload);
      return { success: true, data: JSON.parse(JSON.stringify(result)) };
    } catch (error: any) {
      logger.error('Error creating order:', error);
      return { success: false, error: error.message };
    }
  },

  async getNextTicketNumber(_event: any) {
    try {
      const nextTicket = await OrdersService.getNextTicketNumber();
      return { success: true, data: nextTicket };
    } catch (error: any) {
      logger.error('Error fetching next ticket number:', error);
      return { success: false, error: error.message };
    }
  },

  async getAll(_event: any, filters?: { dateFrom?: string; dateTo?: string; ticket_number?: string; status?: string }) {
    try {
      const orders = await OrdersService.getAll(filters);
      return { success: true, data: JSON.parse(JSON.stringify(orders)) };
    } catch (error: any) {
      logger.error('Error fetching orders:', error);
      return { success: false, error: error.message };
    }
  },

  async getById(_event: any, id: string) {
    try {
      const order = await OrdersService.getById(id);
      return { success: true, data: JSON.parse(JSON.stringify(order)) };
    } catch (error: any) {
      logger.error('Error fetching order by ID:', error);
      return { success: false, error: error.message };
    }
  },

  async cancel(_event: any, id: string, justification: string) {
    try {
      const order = await OrdersService.cancel(id, justification);
      return { success: true, data: JSON.parse(JSON.stringify(order)) };
    } catch (error: any) {
      logger.error('Error cancelling order:', error);
      return { success: false, error: error.message };
    }
  }
};
