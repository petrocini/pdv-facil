import { prisma } from '../database/prisma';
import { ProductAddonGroupService } from './ProductAddonGroupService';

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
  },

  async clone(id: string) {
    // 1. Fetch source product with its addon links
    const source = await prisma.products.findUnique({
      where: { id },
      include: {
        product_addon_groups: {
          orderBy: { sort_order: 'asc' }
        }
      }
    });

    if (!source) throw new Error('Produto não encontrado.');

    // 2. Determine the base name (strip trailing counter if already a clone)
    const counterPattern = /^(.*)\s\((\d+)\)$/;
    const match = source.name.match(counterPattern);
    const baseName = match ? match[1] : source.name;

    // 3. Find all existing products whose names share this base
    const siblings = await prisma.products.findMany({
      where: { name: { startsWith: baseName } },
      select: { name: true }
    });

    // Extract existing counters to determine the next one
    // The original always counts as (1)
    let maxCounter = 1;
    for (const s of siblings) {
      const m = s.name.match(counterPattern);
      if (m && m[1] === baseName) {
        const n = parseInt(m[2], 10);
        if (n > maxCounter) maxCounter = n;
      }
    }
    const newName = `${baseName} (${maxCounter + 1})`;

    // 4. Create the cloned product
    const cloned = await prisma.products.create({
      data: {
        name: newName,
        description: source.description,
        base_price: source.base_price,
        category_id: source.category_id,
        image_path: source.image_path
      }
    });

    // 5. Replicate addon group links
    if (source.product_addon_groups.length > 0) {
      const links = source.product_addon_groups.map(l => ({
        addon_group_id: l.addon_group_id,
        min_selections: l.min_selections,
        max_selections: l.max_selections,
        sort_order: l.sort_order
      }));
      await ProductAddonGroupService.saveLinks(cloned.id, links);
    }

    return cloned;
  }
};

