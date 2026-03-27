import { ProductAddonGroupService } from '../services/ProductAddonGroupService';

export const ProductAddonGroupController = {
  async getByProductId(_event: any, productId: string) {
    try {
      const links = await ProductAddonGroupService.getByProductId(productId);
      return { success: true, data: JSON.parse(JSON.stringify(links)) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async saveLinks(_event: any, productId: string, links: { addon_group_id: string, min_selections: number, max_selections: number, sort_order: number }[]) {
    try {
      await ProductAddonGroupService.saveLinks(productId, links);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
