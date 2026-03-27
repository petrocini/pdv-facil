import { prisma } from '../database/prisma';

export const ProductService = {
  async getAll() {
    return prisma.products.findMany({ 
      include: { category: true },
      orderBy: { name: 'asc' }
    });
  },

  async getMenu() {
    return prisma.products.findMany({ 
      include: { 
        category: true,
        product_addon_groups: {
          include: {
            addon_group: {
              include: {
                addons: true
              }
            }
          },
          orderBy: {
            sort_order: 'asc'
          }
        }
      },
      orderBy: { name: 'asc' }
    });
  },
  
  async getById(id: string) {
    return prisma.products.findUnique({ 
      where: { id },
      include: { category: true }
    });
  },

  async create(data: { category_id: string; name: string; description?: string; base_price: number | string; image_path?: string }) {
    return prisma.products.create({ 
      data: {
        ...data,
        base_price: Number(data.base_price)
      }
    });
  },

  async update(id: string, data: { category_id?: string; name?: string; description?: string; base_price?: number | string; image_path?: string }) {
    const updateData: any = { ...data };
    if (updateData.base_price !== undefined) {
      updateData.base_price = Number(updateData.base_price);
    }
    
    return prisma.products.update({ 
      where: { id }, 
      data: updateData 
    });
  },

  async delete(id: string) {
    return prisma.products.delete({ where: { id } });
  }
};
