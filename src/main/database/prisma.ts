import { app } from 'electron';
import type { PrismaClient as PrismaClientType } from '../../../prisma/client';
import path from 'path';
import fs from 'fs';
import logger from '../lib/logger';

const prismaPath = path.join(__dirname, '../../../../prisma/client');
const { PrismaClient } = require(prismaPath);

const dbPath = path.join(app.getPath('userData'), 'pdv_database.sqlite');

export const prisma = new PrismaClient({
  datasourceUrl: `file:${dbPath}`
}) as PrismaClientType;

export async function initializeDatabase() {
  if (!fs.existsSync(dbPath) || fs.statSync(dbPath).size < 20480) {
    const templatePath = path.join(__dirname, '../../../../prisma/dev.db');
    if (fs.existsSync(templatePath)) {
      try {
        fs.copyFileSync(templatePath, dbPath);
        logger.info('Banco de dados copiado do template para o userData.');
      } catch (e) {
        logger.error('Erro ao copiar banco template:', e);
      }
    } else {
      logger.error('Template do banco de dados não encontrado.');
    }
  }

  await prisma.$connect();
  await prisma.$queryRawUnsafe(`PRAGMA journal_mode = WAL;`);

  try {
    await prisma.$queryRawUnsafe(`ALTER TABLE settings ADD COLUMN printer_name TEXT;`);
  } catch (e) {
    // A coluna já existe
  }

  try {
    await prisma.$queryRawUnsafe(`ALTER TABLE orders ADD COLUMN amount_paid DECIMAL;`);
  } catch (e) {}

  try {
    await prisma.$queryRawUnsafe(`ALTER TABLE orders ADD COLUMN change_amount DECIMAL;`);
  } catch (e) {}

  try {
    await prisma.$queryRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "events" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "city" TEXT NOT NULL,
        "state" TEXT DEFAULT 'SP',
        "notes" TEXT,
        "start_date" DATETIME NOT NULL,
        "end_date" DATETIME NOT NULL,
        "is_active" BOOLEAN NOT NULL DEFAULT 1,
        "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (e) {
    logger.error('Erro ao criar tabela events:', e);
  }

  try {
    await prisma.$queryRawUnsafe(`ALTER TABLE orders ADD COLUMN event_id TEXT REFERENCES events("id");`);
  } catch (e) {}
}
