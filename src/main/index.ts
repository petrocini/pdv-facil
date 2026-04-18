import { app, BrowserWindow, ipcMain, protocol, net, screen, dialog } from 'electron';
import path from 'path';
import { pathToFileURL } from 'url';
import { initializeDatabase, prisma } from './database/prisma';
import logger from './lib/logger';
import { UpdaterService } from './services/UpdaterService';

let mainWindow: BrowserWindow | null = null;
const updaterService = new UpdaterService();

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../../build/icons/icon.ico'),
    frame: process.platform === 'darwin',
    ...(process.platform === 'darwin' ? { titleBarStyle: 'hidden' as const } : {}),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      devTools: !app.isPackaged
    }
  });

  mainWindow.maximize();

  if (app.isPackaged) {
    mainWindow.setMenu(null);
  }

  // Previne que links com target="_blank" abram popups ou vazem da aplicação
  mainWindow.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });

  const isDev = process.env.NODE_ENV !== 'production';

  if (!app.isPackaged && process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else if (!app.isPackaged && isDev) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../../renderer/index.html'));
  }

  try {
    await initializeDatabase();
    logger.info('Banco de dados SQLite inicializado no diretório userData.');
  } catch (error) {
    logger.error('Erro ao inicializar o banco:', error);
  }

  if (app.isPackaged && mainWindow) {
    updaterService.init(mainWindow);
  }
}

protocol.registerSchemesAsPrivileged([
  { scheme: 'local', privileges: { standard: true, secure: true, supportFetchAPI: true } }
]);

app.whenReady().then(() => {
  protocol.handle('local', async (request) => {
    const parsed = new URL(request.url);
    const filename = decodeURIComponent(parsed.hostname || parsed.pathname.replace(/^\/+/, ''));


    let imagesDir;
    try {
      const settings = await prisma.settings.findFirst();
      if (settings?.images_directory) {
        imagesDir = settings.images_directory;
      } else {
        imagesDir = path.join(app.getPath('userData'), 'images');
      }
    } catch {
      imagesDir = path.join(app.getPath('userData'), 'images');
    }

    const absolutePath = path.normalize(path.join(imagesDir, filename));
    
    // Mitigação contra Path Traversal (- ../../) exigindo que resolva sempre dentro de imagesDir
    if (!absolutePath.startsWith(path.normalize(imagesDir))) {
      return new Response('Acesso Negado (Path Traversal Detection)', { status: 403 });
    }

    return net.fetch(pathToFileURL(absolutePath).toString());
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('app:getVersion', () => app.getVersion());

ipcMain.handle('app:minimize', () => {
  if (mainWindow) mainWindow.minimize();
});
ipcMain.handle('app:maximize', () => {
  if (mainWindow) {
    if (process.platform === 'linux') {
      const w = mainWindow as any;
      if (w._isCustomMaximized) {
        w.setBounds(w._prevBounds);
        w._isCustomMaximized = false;
      } else {
        w._prevBounds = w.getBounds();
        const display = screen.getDisplayNearestPoint(w.getBounds());
        w.setBounds(display.workArea);
        w._isCustomMaximized = true;
      }
    } else {
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
      } else {
        mainWindow.maximize();
      }
    }
  }
});
ipcMain.handle('app:close', () => {
  if (mainWindow) mainWindow.close();
});

import { CategoryController } from './controllers/CategoryController';
import { ProductController } from './controllers/ProductController';
import { AddonGroupController } from './controllers/AddonGroupController';
import { AddonController } from './controllers/AddonController';
import { ProductAddonGroupController } from './controllers/ProductAddonGroupController';
import { OrdersController } from './controllers/OrdersController';
import { DashboardController } from './controllers/DashboardController';
import { ImageController } from './controllers/ImageController';
import { SettingsController } from './controllers/SettingsController';

ipcMain.handle('settings:get', SettingsController.get);
ipcMain.handle('settings:upsert', SettingsController.upsert);

ipcMain.handle('dialog:selectDirectory', async () => {
  const result = await dialog.showOpenDialog(mainWindow as any, {
    properties: ['openDirectory']
  });
  if (!result.canceled && result.filePaths.length > 0) {
    return { success: true, data: result.filePaths[0] };
  }
  return { success: false, error: 'Seleção cancelada' };
});

ipcMain.handle('image:upload', ImageController.upload);
ipcMain.handle('dashboard:getMetrics', DashboardController.getMetrics);
ipcMain.handle('dashboard:getTopItems', DashboardController.getTopItems);
ipcMain.handle('dashboard:getChartData', DashboardController.getChartData);
ipcMain.handle('dashboard:getSalesByPaymentMethod', DashboardController.getSalesByPaymentMethod);

ipcMain.handle('orders:create', OrdersController.create);
ipcMain.handle('orders:getNextTicketNumber', OrdersController.getNextTicketNumber);
ipcMain.handle('orders:getAll', OrdersController.getAll);
ipcMain.handle('orders:getById', OrdersController.getById);
ipcMain.handle('orders:cancel', OrdersController.cancel);

ipcMain.handle('categories:getAll', CategoryController.getAll);
ipcMain.handle('categories:getById', CategoryController.getById);
ipcMain.handle('categories:create', CategoryController.create);
ipcMain.handle('categories:update', CategoryController.update);
ipcMain.handle('categories:delete', CategoryController.delete);

ipcMain.handle('products:getAll', ProductController.getAll);
ipcMain.handle('products:getMenu', ProductController.getMenu);
ipcMain.handle('products:getById', ProductController.getById);
ipcMain.handle('products:create', ProductController.create);
ipcMain.handle('products:update', ProductController.update);
ipcMain.handle('products:delete', ProductController.delete);
ipcMain.handle('products:clone', ProductController.clone);

ipcMain.handle('addonGroups:getAll', AddonGroupController.getAll);
ipcMain.handle('addonGroups:getById', AddonGroupController.getById);
ipcMain.handle('addonGroups:create', AddonGroupController.create);
ipcMain.handle('addonGroups:update', AddonGroupController.update);
ipcMain.handle('addonGroups:delete', AddonGroupController.delete);

ipcMain.handle('addons:getAll', AddonController.getAll);
ipcMain.handle('addons:create', AddonController.create);
ipcMain.handle('addons:update', AddonController.update);
ipcMain.handle('addons:delete', AddonController.delete);

ipcMain.handle('productAddonGroups:getByProductId', ProductAddonGroupController.getByProductId);
ipcMain.handle('productAddonGroups:saveLinks', ProductAddonGroupController.saveLinks);

ipcMain.handle('printer:getPrinters', async (event) => {
  return await event.sender.getPrintersAsync();
});

ipcMain.handle('printer:printSilent', async (event, options) => {
  try {
    event.sender.print({
      silent: true,
      deviceName: options.deviceName,
      margins: { marginType: 'none' }
    });
    return { success: true };
  } catch (e: any) {
    logger.error('Erro na impressao silenciosa:', e);
    return { success: false, error: e.message };
  }
});
