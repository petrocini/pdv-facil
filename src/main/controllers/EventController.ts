import { EventService } from '../services/EventService';
import logger from '../lib/logger';

export const EventController = {
  async getAll() {
    try {
      const data = await EventService.getAll();
      return { success: true, data: JSON.parse(JSON.stringify(data)) };
    } catch (error: any) {
      logger.error('Error fetching events:', error);
      return { success: false, error: error.message };
    }
  },

  async getById(_event: any, id: string) {
    try {
      const data = await EventService.getById(id);
      return { success: true, data: JSON.parse(JSON.stringify(data)) };
    } catch (error: any) {
      logger.error('Error fetching event by ID:', error);
      return { success: false, error: error.message };
    }
  },

  async create(_event: any, data: any) {
    try {
      const result = await EventService.create(data);
      return { success: true, data: JSON.parse(JSON.stringify(result)) };
    } catch (error: any) {
      logger.error('Error creating event:', error);
      return { success: false, error: error.message };
    }
  },

  async update(_event: any, id: string, data: any) {
    try {
      const result = await EventService.update(id, data);
      return { success: true, data: JSON.parse(JSON.stringify(result)) };
    } catch (error: any) {
      logger.error('Error updating event:', error);
      return { success: false, error: error.message };
    }
  },

  async delete(_event: any, id: string) {
    try {
      const data = await EventService.delete(id);
      return { success: true, data: JSON.parse(JSON.stringify(data)) };
    } catch (error: any) {
      logger.error('Error deleting event:', error);
      return { success: false, error: error.message };
    }
  },

  async getActive() {
    try {
      const data = await EventService.getActive();
      return { success: true, data: data ? JSON.parse(JSON.stringify(data)) : null };
    } catch (error: any) {
      logger.error('Error fetching active event:', error);
      return { success: false, error: error.message };
    }
  },

  async endActive() {
    try {
      const data = await EventService.endActiveEvent();
      return { success: true, data: JSON.parse(JSON.stringify(data)) };
    } catch (error: any) {
      logger.error('Error ending active event:', error);
      return { success: false, error: error.message };
    }
  }
};
