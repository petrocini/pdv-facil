import { prisma } from '../database/prisma';
import logger from '../lib/logger';

export class SettingsController {
  static async get() {
    try {
      let settings = await prisma.settings.findFirst();
      
      if (!settings) {
        settings = await prisma.settings.create({
          data: {}
        });
      }
      
      return { success: true, data: settings };
    } catch (error: any) {
      logger.error('Erro ao buscar configurações:', error);
      return { success: false, error: 'Erro ao buscar configurações' };
    }
  }

  static async upsert(event: Electron.IpcMainInvokeEvent, data: any) {
    try {
      const existingSettings = await prisma.settings.findFirst();

      let updatedSettings;
      if (existingSettings) {
        updatedSettings = await prisma.settings.update({
          where: { id: existingSettings.id },
          data: {
            company_name: data.company_name,
            company_document: data.company_document,
            logo_path: data.logo_path,
            images_directory: data.images_directory
          }
        });
      } else {
        updatedSettings = await prisma.settings.create({
          data: {
            company_name: data.company_name,
            company_document: data.company_document,
            logo_path: data.logo_path,
            images_directory: data.images_directory
          }
        });
      }

      return { success: true, data: updatedSettings };
    } catch (error: any) {
      logger.error('Erro ao salvar configurações:', error);
      return { success: false, error: 'Erro ao salvar configurações' };
    }
  }
}
