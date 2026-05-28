import { prisma } from '../database/prisma';
import logger from '../lib/logger';

export const ExtraordinaryMovementService = {
  async getByEventId(eventId: string) {
    if (!eventId) throw new Error('Event ID is required');
    return prisma.extraordinary_movements.findMany({
      where: { event_id: eventId },
      orderBy: { created_at: 'desc' }
    });
  },

  async create(data: { event_id: string; type: 'entrada' | 'saida'; amount: number; description: string; payment_method?: string }) {
    if (!data.event_id) throw new Error('Event ID is required');
    if (!data.type || !['entrada', 'saida'].includes(data.type)) {
      throw new Error('Type must be either "entrada" or "saida"');
    }
    if (Number(data.amount) <= 0) throw new Error('Amount must be greater than zero');
    if (!data.description) throw new Error('Description is required');

    const movement = await prisma.extraordinary_movements.create({
      data: {
        event_id: data.event_id,
        type: data.type,
        amount: data.amount,
        description: data.description,
        payment_method: data.payment_method || null
      }
    });

    logger.info(`Extraordinary movement created: [${data.type.toUpperCase()}] R$ ${data.amount} for event ${data.event_id}`);
    return movement;
  },

  async delete(id: string) {
    if (!id) throw new Error('Movement ID is required');

    const movement = await prisma.extraordinary_movements.delete({
      where: { id }
    });

    logger.info(`Extraordinary movement deleted: ID ${id}`);
    return movement;
  }
};
