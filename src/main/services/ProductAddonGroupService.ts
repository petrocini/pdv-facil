import { prisma } from '../database/prisma';

export const ProductAddonGroupService = {
  async getByProductId(productId: string) {
    return prisma.product_addon_groups.findMany({
      where: { product_id: productId },
      orderBy: { sort_order: 'asc' },
      include: {
        addon_group: {
          include: {
            addons: true
          }
        }
      }
    });
  },

  async saveLinks(productId: string, links: { addon_group_id: string, min_selections: number, max_selections: number, sort_order: number }[]) {
    await prisma.$transaction(async (tx) => {
      await tx.product_addon_groups.deleteMany({
        where: { product_id: productId }
      });

      if (links && links.length > 0) {
        const createData = links.map(link => ({
          product_id: productId,
          addon_group_id: link.addon_group_id,
          min_selections: link.min_selections || 0,
          max_selections: link.max_selections || 1,
          sort_order: link.sort_order || 0
        }));
        
        await tx.product_addon_groups.createMany({
          data: createData
        });
      }
    });
  }
};
