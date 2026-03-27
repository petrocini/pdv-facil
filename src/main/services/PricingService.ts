import logger from '../lib/logger';

/**
 * PricingService — Single source of truth for financial calculations.
 * All prices are fetched from the database to ensure the backend is the
 * authoritative source, regardless of what the frontend sends.
 */
export const PricingService = {
  /**
   * Calculates the authoritative order total by looking up real prices
   * from the database inside the given transaction context.
   *
   * @param tx  Prisma transaction client
   * @param items  Cart items from the frontend payload
   * @returns Object with the recalculated totalAmount and enriched items
   */
  async calculateOrderTotal(
    tx: any,
    items: Array<{
      productId: string;
      quantity: number;
      addons: Array<{ addonId: string; quantity: number }>;
    }>
  ) {
    let totalAmount = 0;

    const enrichedItems = await Promise.all(
      items.map(async (item) => {
        const product = await tx.products.findUnique({
          where: { id: item.productId },
          select: { base_price: true }
        });

        if (!product) {
          throw new Error(`Product not found: ${item.productId}`);
        }

        const unitPrice = Number(product.base_price);

        const enrichedAddons = await Promise.all(
          item.addons.map(async (addon) => {
            const dbAddon = await tx.addons.findUnique({
              where: { id: addon.addonId },
              select: { price: true }
            });

            if (!dbAddon) {
              throw new Error(`Addon not found: ${addon.addonId}`);
            }

            const chargedPrice = Number(dbAddon.price);

            return {
              addon_id: addon.addonId,
              quantity: addon.quantity,
              charged_price: chargedPrice
            };
          })
        );

        const addonsTotal = enrichedAddons.reduce(
          (sum, a) => sum + a.charged_price * a.quantity,
          0
        );

        const itemTotal = (unitPrice + addonsTotal) * item.quantity;
        totalAmount += itemTotal;

        return {
          product_id: item.productId,
          quantity: item.quantity,
          unit_price: unitPrice,
          addons: enrichedAddons
        };
      })
    );

    logger.info(`PricingService: Order total recalculated = ${totalAmount.toFixed(2)}`);

    return { totalAmount, enrichedItems };
  }
};
