import { prisma } from '../database/prisma';

export const CategoryService = {
  async getAll() {
    return prisma.categories.findMany({ orderBy: { name: 'asc' } });
  },
  
  async getById(id: string) {
    return prisma.categories.findUnique({ where: { id } });
  },

  async create(data: { name: string; description?: string; image_path?: string }) {
    return prisma.categories.create({ data });
  },

  async update(id: string, data: { name?: string; description?: string; image_path?: string }) {
    return prisma.categories.update({ where: { id }, data });
  },

  async delete(id: string) {
    return prisma.categories.delete({ where: { id } });
  }
};
