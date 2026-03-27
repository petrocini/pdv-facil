import { prisma } from '../database/prisma';

export const AddonGroupService = {
  async getAll() {
    return prisma.addon_groups.findMany({ 
      orderBy: { name: 'asc' },
      include: { addons: true }
    });
  },
  
  async getById(id: string) {
    return prisma.addon_groups.findUnique({ 
      where: { id },
      include: { addons: true }
    });
  },

  async create(data: { name: string; description?: string }) {
    return prisma.addon_groups.create({ data });
  },

  async update(id: string, data: { name?: string; description?: string }) {
    return prisma.addon_groups.update({ where: { id }, data });
  },

  async delete(id: string) {
    return prisma.addon_groups.delete({ where: { id } });
  }
};
