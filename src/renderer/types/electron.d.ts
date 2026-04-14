declare global {
  interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
  }

  interface Category {
    id: string;
    name: string;
    description?: string;
    image_path?: string;
  }

  interface Product {
    id: string;
    category_id: string;
    name: string;
    description?: string;
    base_price: number | string;
    image_path?: string;
    category?: Category;
  }

  interface Window {
    api: {
      app: {
        getVersion: () => Promise<string>;
      };
      categories: {
        getAll: () => Promise<ApiResponse<Category[]>>;
        getById: (id: string) => Promise<ApiResponse<Category>>;
        create: (data: any) => Promise<ApiResponse<Category>>;
        update: (id: string, data: any) => Promise<ApiResponse<Category>>;
        delete: (id: string) => Promise<ApiResponse<void>>;
      };
      products: {
        getAll: () => Promise<ApiResponse<Product[]>>;
        getMenu: () => Promise<ApiResponse<Product[]>>;
        getById: (id: string) => Promise<ApiResponse<Product>>;
        create: (data: any) => Promise<ApiResponse<Product>>;
        update: (id: string, data: any) => Promise<ApiResponse<Product>>;
        delete: (id: string) => Promise<ApiResponse<void>>;
      };
      addonGroups: {
        getAll: () => Promise<ApiResponse<any[]>>;
        getById: (id: string) => Promise<ApiResponse<any>>;
        create: (data: any) => Promise<ApiResponse<any>>;
        update: (id: string, data: any) => Promise<ApiResponse<any>>;
        delete: (id: string) => Promise<ApiResponse<void>>;
      };
      addons: {
        getAll: (groupId: string) => Promise<ApiResponse<any[]>>;
        create: (data: any) => Promise<ApiResponse<any>>;
        update: (id: string, data: any) => Promise<ApiResponse<any>>;
        delete: (id: string) => Promise<ApiResponse<void>>;
      };
      productAddonGroups: {
        getByProductId: (productId: string) => Promise<ApiResponse<any[]>>;
        saveLinks: (productId: string, links: any[]) => Promise<ApiResponse<void>>;
      };
      orders: {
        create: (cartPayload: any) => Promise<ApiResponse<any>>;
      };
      dashboard: {
        getMetrics: (filters?: any) => Promise<ApiResponse<any>>;
        getTopItems: (filters?: any) => Promise<ApiResponse<any>>;
        getChartData: (filters?: any) => Promise<ApiResponse<any>>;
        getSalesByPaymentMethod: (filters?: any) => Promise<ApiResponse<any>>;
      };
      updater: {
        quitAndInstall: () => Promise<void>;
        onDownloaded: (callback: (info: any) => void) => void;
      };
    };
  }
}

export {};
