import { autoUpdater } from 'electron-updater';
import { BrowserWindow, ipcMain, app } from 'electron';
import logger from '../lib/logger';

export class UpdaterService {
  private window: BrowserWindow | null = null;

  constructor() {
    autoUpdater.logger = logger;
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;
    
    ipcMain.handle('updater:quitAndInstall', () => {
      autoUpdater.quitAndInstall();
    });
  }

  public init(mainWindow: BrowserWindow) {
    this.window = mainWindow;

    autoUpdater.on('update-available', (info) => {
      logger.info('Atualização disponível: ', info.version);
    });

    autoUpdater.on('update-downloaded', (info) => {
      logger.info('Atualização baixada: ', info.version);
      if (this.window) {
        this.window.webContents.send('updater:downloaded', info);
      }
    });

    autoUpdater.on('error', (err) => {
      logger.error('Erro no Auto Updater: ', err);
    });

    if (app.isPackaged) {
      try {
        autoUpdater.checkForUpdatesAndNotify();
      } catch (error) {
        logger.error('Erro check update', error);
      }
    }
  }
}
