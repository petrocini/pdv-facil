import { DashboardService } from '../services/DashboardService';
import logger from '../lib/logger';

export const DashboardController = {
  async getMetrics() {
    try {
      const data = await DashboardService.getMetrics();
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard metrics:', error);
      return { success: false, error: error.message };
    }
  },

  async getTopItems() {
    try {
      const data = await DashboardService.getTopItems();
      return { success: true, data };
    } catch (error: any) {
      logger.error('Error fetching dashboard top items:', error);
      return { success: false, error: error.message };
    }
  }
};
