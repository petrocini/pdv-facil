import { ProductService } from '../services/ProductService';

export const ProductController = {
  async getAll() {
    try {
      const products = await ProductService.getAll();
      return { success: true, data: JSON.parse(JSON.stringify(products)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async getMenu() {
    try {
      const products = await ProductService.getMenu();
      return { success: true, data: JSON.parse(JSON.stringify(products)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },
  
  async getById(_event: any, id: string) {
    try {
      const product = await ProductService.getById(id);
      return { success: true, data: JSON.parse(JSON.stringify(product)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async create(_event: any, data: { category_id: string; name: string; description?: string; base_price: number | string; image_path?: string }) {
    try {
      const product = await ProductService.create(data);
      return { success: true, data: JSON.parse(JSON.stringify(product)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async update(_event: any, id: string, data: { category_id?: string; name?: string; description?: string; base_price?: number | string; image_path?: string }) {
    try {
      const product = await ProductService.update(id, data);
      return { success: true, data: JSON.parse(JSON.stringify(product)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async delete(_event: any, id: string) {
    try {
      await ProductService.delete(id);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
