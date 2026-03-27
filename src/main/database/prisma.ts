import { app } from 'electron';
import type { PrismaClient as PrismaClientType } from '../../../prisma/client';
import path from 'path';
import fs from 'fs';
import logger from '../lib/logger';

// O tsc compila para dist/src/main/database/prisma.js (4 níveis de profundeza)
const prismaPath = path.join(__dirname, '../../../../prisma/client');
const { PrismaClient } = require(prismaPath);

const dbPath = path.join(app.getPath('userData'), 'pdv_database.sqlite');

export const prisma = new PrismaClient({
  datasourceUrl: `file:${dbPath}`
}) as PrismaClientType;

export async function initializeDatabase() {
  // Copia o banco template (com as tabelas já criadas) para o userData se for o primeiro uso ou se estiver vazio
  if (!fs.existsSync(dbPath) || fs.statSync(dbPath).size < 20480) {
    const templatePath = path.join(__dirname, '../../../../prisma/dev.db');
    if (fs.existsSync(templatePath)) {
      try {
        fs.copyFileSync(templatePath, dbPath);
        logger.info('Banco de dados copiado do template (dev.db) para o userData.');
      } catch (e) {
        logger.error('Erro ao copiar banco template:', e);
      }
    } else {
      logger.error('Template do banco de dados (dev.db) não encontrado em:', templatePath);
    }
  }

  await prisma.$connect();
  // Ativa o modo WAL (Write-Ahead Logging) para resiliência e concorrência
  await prisma.$queryRawUnsafe(`PRAGMA journal_mode = WAL;`);
}
