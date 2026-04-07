import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { toast } from 'sonner';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import CategoryList from './pages/Catalog/Categories/CategoryList';
import CategoryForm from './pages/Catalog/Categories/CategoryForm';
import ProductList from './pages/Catalog/Products/ProductList';
import ProductForm from './pages/Catalog/Products/ProductForm';
import AddonGroupList from './pages/Catalog/Addons/AddonGroupList';
import AddonGroupForm from './pages/Catalog/Addons/AddonGroupForm';
import POSPage from './pages/POS/POSPage';
import OrderHistoryList from './pages/Orders/OrderHistoryList';
import Settings from './pages/Settings/Settings';
import Help from './pages/Help/Help';

export default function App() {
  useEffect(() => {
    if (window.api?.updater) {
      window.api.updater.onDownloaded((info: any) => {
        toast.message(`Atualização baixada (v${info?.version || 'nova'})`, {
          description: 'A aplicação será atualizada ao ser fechada, mas você pode aplicar a atualização imediatamente.',
          duration: Infinity,
          action: {
            label: 'Reiniciar Agora',
            onClick: () => window.api.updater.quitAndInstall(),
          },
        });
      });
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="categories/new" element={<CategoryForm />} />
          <Route path="categories/:id" element={<CategoryForm />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/new" element={<ProductForm />} />
          <Route path="products/:id" element={<ProductForm />} />
          <Route path="addon-groups" element={<AddonGroupList />} />
          <Route path="addon-groups/new" element={<AddonGroupForm />} />
          <Route path="addon-groups/:id" element={<AddonGroupForm />} />
          
          <Route path="pos" element={<POSPage />} />
          <Route path="orders" element={<OrderHistoryList />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
