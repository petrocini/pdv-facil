import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  app: {
    getVersion: () => ipcRenderer.invoke('app:getVersion'),
    minimize: () => ipcRenderer.invoke('app:minimize'),
    maximize: () => ipcRenderer.invoke('app:maximize'),
    close: () => ipcRenderer.invoke('app:close')
  },
  image: {
    upload: (filePath: string) => ipcRenderer.invoke('image:upload', filePath)
  },
  categories: {
    getAll: () => ipcRenderer.invoke('categories:getAll'),
    getById: (id: string) => ipcRenderer.invoke('categories:getById', id),
    create: (data: any) => ipcRenderer.invoke('categories:create', data),
    update: (id: string, data: any) => ipcRenderer.invoke('categories:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('categories:delete', id)
  },
  products: {
    getAll: () => ipcRenderer.invoke('products:getAll'),
    getMenu: () => ipcRenderer.invoke('products:getMenu'),
    getById: (id: string) => ipcRenderer.invoke('products:getById', id),
    create: (data: any) => ipcRenderer.invoke('products:create', data),
    update: (id: string, data: any) => ipcRenderer.invoke('products:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('products:delete', id)
  },
  addonGroups: {
    getAll: () => ipcRenderer.invoke('addonGroups:getAll'),
    getById: (id: string) => ipcRenderer.invoke('addonGroups:getById', id),
    create: (data: any) => ipcRenderer.invoke('addonGroups:create', data),
    update: (id: string, data: any) => ipcRenderer.invoke('addonGroups:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('addonGroups:delete', id)
  },
  addons: {
    getAll: (groupId: string) => ipcRenderer.invoke('addons:getAll', groupId),
    create: (data: any) => ipcRenderer.invoke('addons:create', data),
    update: (id: string, data: any) => ipcRenderer.invoke('addons:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('addons:delete', id)
  },
  productAddonGroups: {
    getByProductId: (productId: string) => ipcRenderer.invoke('productAddonGroups:getByProductId', productId),
    saveLinks: (productId: string, links: any[]) => ipcRenderer.invoke('productAddonGroups:saveLinks', productId, links)
  },
  orders: {
    getNextTicketNumber: () => ipcRenderer.invoke('orders:getNextTicketNumber'),
    create: (cartPayload: any) => ipcRenderer.invoke('orders:create', cartPayload),
    getAll: (filters?: any) => ipcRenderer.invoke('orders:getAll', filters),
    getById: (id: string) => ipcRenderer.invoke('orders:getById', id),
    cancel: (id: string, justification: string) => ipcRenderer.invoke('orders:cancel', id, justification)
  },
  settings: {
    get: () => ipcRenderer.invoke('settings:get'),
    upsert: (data: any) => ipcRenderer.invoke('settings:upsert', data)
  },
  dialog: {
    selectDirectory: () => ipcRenderer.invoke('dialog:selectDirectory')
  },
  dashboard: {
    getMetrics: (filters?: any) => ipcRenderer.invoke('dashboard:getMetrics', filters),
    getTopItems: (filters?: any) => ipcRenderer.invoke('dashboard:getTopItems', filters),
    getChartData: (filters?: any) => ipcRenderer.invoke('dashboard:getChartData', filters),
    getSalesByPaymentMethod: (filters?: any) => ipcRenderer.invoke('dashboard:getSalesByPaymentMethod', filters)
  },
  printer: {
    getPrinters: () => ipcRenderer.invoke('printer:getPrinters'),
    printSilent: (options: any) => ipcRenderer.invoke('printer:printSilent', options)
  },
  updater: {
    quitAndInstall: () => ipcRenderer.invoke('updater:quitAndInstall'),
    onDownloaded: (callback: (info: any) => void) => {
      ipcRenderer.on('updater:downloaded', (_event, info) => callback(info));
    }
  }
});
