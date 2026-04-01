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
}
