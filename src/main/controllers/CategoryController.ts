import { CategoryService } from '../services/CategoryService';

export const CategoryController = {
  async getAll() {
    try {
      const categories = await CategoryService.getAll();
      return { success: true, data: JSON.parse(JSON.stringify(categories)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },
  
  async getById(_event: any, id: string) {
    try {
      const category = await CategoryService.getById(id);
      return { success: true, data: JSON.parse(JSON.stringify(category)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async create(_event: any, data: { name: string; description?: string; image_path?: string }) {
    try {
      const category = await CategoryService.create(data);
      return { success: true, data: JSON.parse(JSON.stringify(category)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async update(_event: any, id: string, data: { name?: string; description?: string; image_path?: string }) {
    try {
      const category = await CategoryService.update(id, data);
      return { success: true, data: JSON.parse(JSON.stringify(category)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async delete(_event: any, id: string) {
    try {
      await CategoryService.delete(id);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
