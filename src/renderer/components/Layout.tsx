import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, ListTree, Package, Settings, Layers, HelpCircle } from 'lucide-react';
import CustomTitleBar from './CustomTitleBar';
import { Toaster } from 'sonner';
import ConfirmDialog from './ui/ConfirmDialog';

export default function Layout() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-3 py-2.5 rounded-r-lg border-l-4 transition-all duration-200 ${
      isActive 
        ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold' 
        : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`;

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans">
      <CustomTitleBar />
      <Toaster position="top-right" richColors />
      <ConfirmDialog />
      <div className="flex flex-1 min-h-0">
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10 w-64 flex-shrink-0">
          <nav className="flex-1 py-4 pr-4 space-y-1 overflow-y-auto">
            <NavLink to="/" className={navLinkClasses} end>
              <LayoutDashboard size={20} /> Dashboard
            </NavLink>
            <NavLink to="/pos" className={navLinkClasses}>
              <ShoppingCart size={20} /> Frente de Caixa
            </NavLink>
            <NavLink to="/orders" className={navLinkClasses}>
              <Layers size={20} /> Histórico de Pedidos
            </NavLink>
            
            <div className="pt-6 pb-2 pl-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Catálogo</p>
            </div>
            
            <NavLink to="/categories" className={navLinkClasses}>
              <ListTree size={20} /> Categorias
            </NavLink>
            <NavLink to="/products" className={navLinkClasses}>
              <Package size={20} /> Produtos
            </NavLink>
            <NavLink to="/addon-groups" className={navLinkClasses}>
              <Layers size={20} /> Adicionais
            </NavLink>

            <div className="pt-6 pb-2 pl-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sistema</p>
            </div>
            <NavLink to="/settings" className={navLinkClasses}>
              <Settings size={20} /> Configurações
            </NavLink>
            <NavLink to="/help" className={navLinkClasses}>
              <HelpCircle size={20} /> Ajuda
            </NavLink>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col min-h-0 overflow-hidden bg-gray-50/50">
          <div className="flex-1 overflow-y-auto p-8 relative">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
