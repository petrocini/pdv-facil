import { AddonService } from '../services/AddonService';

export const AddonController = {
  async getAll(_event: any, addonGroupId: string) {
    try {
      const addons = await AddonService.getAll(addonGroupId);
      return { success: true, data: JSON.parse(JSON.stringify(addons)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async create(_event: any, data: { addon_group_id: string; name: string; price: number; image_path?: string }) {
    try {
      const addon = await AddonService.create(data);
      return { success: true, data: JSON.parse(JSON.stringify(addon)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async update(_event: any, id: string, data: { name?: string; price?: number; image_path?: string }) {
    try {
      const addon = await AddonService.update(id, data);
      return { success: true, data: JSON.parse(JSON.stringify(addon)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async delete(_event: any, id: string) {
    try {
      await AddonService.delete(id);
      return { success: true };
    } catch (error: any) {
      if (error.code === 'P2003') {
        return { success: false, error: 'Não é possível excluir este adicional pois ele já está vinculado a um pedido.' };
      }
      return { success: false, error: error.message };
    }
  }
};
