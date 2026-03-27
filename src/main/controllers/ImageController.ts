import { app } from 'electron';
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';
import crypto from 'crypto';
import { prisma } from '../database/prisma';
import logger from '../lib/logger';

export class ImageController {
  static async upload(event: Electron.IpcMainInvokeEvent, sourcePath: string) {
    try {
      if (!sourcePath) return { success: false, error: 'Caminho da imagem não fornecido' };

      const settings = await prisma.settings.findFirst();
      let imagesDir;

      if (settings?.images_directory) {
        imagesDir = settings.images_directory;
      } else {
        const userDataPath = app.getPath('userData');
        imagesDir = path.join(userDataPath, 'images');
      }

      await fs.mkdir(imagesDir, { recursive: true });

      const filename = `${crypto.randomUUID()}.webp`;
      const destinationPath = path.join(imagesDir, filename);

      await sharp(sourcePath)
        .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destinationPath);

      return { success: true, data: filename };
    } catch (error: any) {
      logger.error('Erro ao processar imagem:', error);
      return { success: false, error: error.message };
    }
  }
}
