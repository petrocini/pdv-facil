import { ExtraordinaryMovementService } from '../services/ExtraordinaryMovementService';
import logger from '../lib/logger';

export const ExtraordinaryMovementController = {
  async getByEventId(_event: any, eventId: string) {
    try {
      const data = await ExtraordinaryMovementService.getByEventId(eventId);
      return { success: true, data: JSON.parse(JSON.stringify(data)) };
    } catch (error: any) {
      logger.error('Error fetching extraordinary movements by event ID:', error);
      return { success: false, error: error.message };
    }
  },

  async create(_event: any, data: any) {
    try {
      const result = await ExtraordinaryMovementService.create(data);
      return { success: true, data: JSON.parse(JSON.stringify(result)) };
    } catch (error: any) {
      logger.error('Error creating extraordinary movement:', error);
      return { success: false, error: error.message };
    }
  },

  async delete(_event: any, id: string) {
    try {
      const result = await ExtraordinaryMovementService.delete(id);
      return { success: true, data: JSON.parse(JSON.stringify(result)) };
    } catch (error: any) {
      logger.error('Error deleting extraordinary movement:', error);
      return { success: false, error: error.message };
    }
  }
};
