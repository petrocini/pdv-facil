import { DashboardService } from '../services/DashboardService';
import logger from '../lib/logger';

export const DashboardController = {
  async getMetrics(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getMetrics(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard metrics:', error);
      return { success: false, error: error.message };
    }
  },

  async getTopItems(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getTopItems(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard top items:', error);
      return { success: false, error: error.message };
    }
  },

  async getChartData(event: any, filters?: { startDate?: string; endDate?: string }) {
    try {
      const data = await DashboardService.getChartData(filters);
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard chart data:', error);
      return { success: false, error: error.message };
    }
  }
};
