import { prisma } from '../database/prisma';

export const AddonService = {
  async getAll(addonGroupId: string) {
    return prisma.addons.findMany({ 
      where: { addon_group_id: addonGroupId },
      orderBy: { name: 'asc' } 
    });
  },

  async create(data: { addon_group_id: string; name: string; price: number; image_path?: string }) {
    return prisma.addons.create({ data });
  },

  async update(id: string, data: { name?: string; price?: number; image_path?: string }) {
    return prisma.addons.update({ where: { id }, data });
  },

  async delete(id: string) {
    return prisma.addons.delete({ where: { id } });
  }
};
