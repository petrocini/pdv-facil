import { AddonGroupService } from '../services/AddonGroupService';

export const AddonGroupController = {
  async getAll() {
    try {
      const groups = await AddonGroupService.getAll();
      return { success: true, data: JSON.parse(JSON.stringify(groups)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },
  
  async getById(_event: any, id: string) {
    try {
      const group = await AddonGroupService.getById(id);
      return { success: true, data: JSON.parse(JSON.stringify(group)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async create(_event: any, data: { name: string; description?: string }) {
    try {
      const group = await AddonGroupService.create(data);
      return { success: true, data: JSON.parse(JSON.stringify(group)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async update(_event: any, id: string, data: { name?: string; description?: string }) {
    try {
      const group = await AddonGroupService.update(id, data);
      return { success: true, data: JSON.parse(JSON.stringify(group)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async delete(_event: any, id: string) {
    try {
      await AddonGroupService.delete(id);
      return { success: true };
    } catch (error: any) {
      if (error.code === 'P2003') {
        return { success: false, error: 'Não é possível excluir este grupo pois existem produtos ou adicionais vinculados a ele.' };
      }
      return { success: false, error: error.message };
    }
  }
};
