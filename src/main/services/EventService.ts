import { prisma } from '../database/prisma';
import logger from '../lib/logger';

export const EventService = {
  async getAll() {
    return prisma.events.findMany({
      where: { is_active: true },
      orderBy: { start_date: 'desc' }
    });
  },

  async getById(id: string) {
    if (!id) throw new Error('Event ID is required');

    const event = await prisma.events.findUnique({
      where: { id }
    });

    if (!event) throw new Error('Event not found');
    return event;
  },

  async create(data: { name: string; city: string; state?: string; notes?: string; start_date: string; end_date: string }) {
    const startDate = new Date(data.start_date);
    const endDate = new Date(data.end_date);

    if (endDate <= startDate) {
      throw new Error('A data de fim deve ser posterior à data de início.');
    }

    // Check for overlapping events
    await this.checkOverlap(startDate, endDate);

    const event = await prisma.events.create({
      data: {
        name: data.name,
        city: data.city,
        state: data.state || 'SP',
        notes: data.notes || null,
        start_date: startDate,
        end_date: endDate
      }
    });

    // Retroactively link orders within the event's date range
    const linkedCount = await this.linkOrdersToEvent(event.id, startDate, endDate);

    logger.info(`Event created: "${event.name}" (${event.city}), ${startDate.toISOString()} → ${endDate.toISOString()}, ${linkedCount} orders linked`);

    return { event, linkedCount };
  },

  async update(id: string, data: { name?: string; city?: string; state?: string; notes?: string; start_date?: string; end_date?: string }) {
    if (!id) throw new Error('Event ID is required');

    const existing = await prisma.events.findUnique({ where: { id } });
    if (!existing) throw new Error('Event not found');

    const startDate = data.start_date ? new Date(data.start_date) : existing.start_date;
    const endDate = data.end_date ? new Date(data.end_date) : existing.end_date;

    if (endDate <= startDate) {
      throw new Error('A data de fim deve ser posterior à data de início.');
    }

    // Check for overlapping events (exclude self)
    await this.checkOverlap(startDate, endDate, id);

    // Unlink orders that were previously linked to this event
    await prisma.orders.updateMany({
      where: { event_id: id },
      data: { event_id: null }
    });

    const event = await prisma.events.update({
      where: { id },
      data: {
        name: data.name ?? existing.name,
        city: data.city ?? existing.city,
        state: data.state ?? existing.state,
        notes: data.notes !== undefined ? (data.notes || null) : existing.notes,
        start_date: startDate,
        end_date: endDate
      }
    });

    // Re-link orders based on updated date range
    const linkedCount = await this.linkOrdersToEvent(event.id, startDate, endDate);

    logger.info(`Event updated: "${event.name}" (${event.city}), ${linkedCount} orders re-linked`);

    return { event, linkedCount };
  },

  async delete(id: string) {
    if (!id) throw new Error('Event ID is required');

    // Unlink all orders from this event
    await prisma.orders.updateMany({
      where: { event_id: id },
      data: { event_id: null }
    });

    // Soft-delete
    const event = await prisma.events.update({
      where: { id },
      data: { is_active: false }
    });

    logger.info(`Event soft-deleted: "${event.name}" (${event.city})`);

    return event;
  },

  async getActive() {
    const now = new Date();

    return prisma.events.findFirst({
      where: {
        is_active: true,
        start_date: { lte: now },
        end_date: { gte: now }
      }
    });
  },

  async endActiveEvent() {
    const active = await this.getActive();
    if (!active) throw new Error('Nenhum evento ativo no momento.');

    // Subtrair 1 segundo de agora para garantir que end_date < now nas próximas chamadas
    const now = new Date();
    now.setSeconds(now.getSeconds() - 1);

    const event = await prisma.events.update({
      where: { id: active.id },
      data: { end_date: now }
    });

    logger.info(`Evento encerrado antecipadamente: "${event.name}" (${event.city})`);
    return event;
  },

  async checkOverlap(startDate: Date, endDate: Date, excludeId?: string) {
    const overlapping = await prisma.events.findFirst({
      where: {
        is_active: true,
        ...(excludeId ? { id: { not: excludeId } } : {}),
        // Two ranges overlap if: start1 < end2 AND start2 < end1
        start_date: { lt: endDate },
        end_date: { gt: startDate }
      }
    });

    if (overlapping) {
      throw new Error(
        `Este período conflita com o evento "${overlapping.name}" (${overlapping.city}), que vai de ${overlapping.start_date.toLocaleDateString('pt-BR')} até ${overlapping.end_date.toLocaleDateString('pt-BR')}.`
      );
    }
  },

  async linkOrdersToEvent(eventId: string, startDate: Date, endDate: Date): Promise<number> {
    // Only link orders that don't already belong to another event
    const result = await prisma.orders.updateMany({
      where: {
        created_at: {
          gte: startDate,
          lte: endDate
        },
        event_id: null
      },
      data: { event_id: eventId }
    });

    return result.count;
  }
};
