import { DashboardService } from '../services/DashboardService';
import logger from '../lib/logger';

export const DashboardController = {
  async getMetrics(event: any, filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    try {
      const data = await DashboardService.getMetrics(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard metrics:', error);
      return { success: false, error: error.message };
    }
  },

  async getTopItems(event: any, filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    try {
      const data = await DashboardService.getTopItems(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard top items:', error);
      return { success: false, error: error.message };
    }
  },

  async getChartData(event: any, filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    try {
      const data = await DashboardService.getChartData(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard chart data:', error);
      return { success: false, error: error.message };
    }
  },

  async getSalesByPaymentMethod(event: any, filters?: { startDate?: string; endDate?: string; paymentMethod?: string; eventId?: string; city?: string }) {
    try {
      const data = await DashboardService.getSalesByPaymentMethod(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard sales by payment method:', error);
      return { success: false, error: error.message };
    }
  },

  async getEventMetrics(event: any, eventId: string) {
    try {
      const data = await DashboardService.getEventMetrics(eventId);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching event metrics:', error);
      return { success: false, error: error.message };
    }
  },

  async getCityComparison(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getCityComparison(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching city comparison:', error);
      return { success: false, error: error.message };
    }
  },

  async getEventComparison(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getEventComparison(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching event comparison:', error);
      return { success: false, error: error.message };
    }
  },

  async getEventTopItems(event: any, eventId: string) {
    try {
      const data = await DashboardService.getEventTopItems(eventId);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching event top items:', error);
      return { success: false, error: error.message };
    }
  },

  async getCityRevenueOverTime(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getCityRevenueOverTime(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching city revenue over time:', error);
      return { success: false, error: error.message };
    }
  },

  async getEventPaymentMethods(event: any, eventId: string) {
    try {
      const data = await DashboardService.getEventPaymentMethods(eventId);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching event payment methods:', error);
      return { success: false, error: error.message };
    }
  },

  async getCityRanking(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getCityRanking(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching city ranking:', error);
      return { success: false, error: error.message };
    }
  }
};
