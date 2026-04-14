import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, ShoppingCart, Layers, Package, Settings, ArrowLeft } from 'lucide-react';
import CustomTitleBar from '../../components/CustomTitleBar';
import IntroHelp from './components/IntroHelp';
import POSHelp from './components/POSHelp';
import OrdersHelp from './components/OrdersHelp';
import CatalogHelp from './components/CatalogHelp';
import SettingsHelp from './components/SettingsHelp';

type HelpTab = 'intro' | 'pos' | 'orders' | 'catalog' | 'settings';

export default function Help() {
  const [activeTab, setActiveTab] = useState<HelpTab>('intro');
  const navigate = useNavigate();

  const tabs = [
    { id: 'intro', label: 'Introdução', icon: Info },
    { id: 'pos', label: 'Frente de Caixa (POS)', icon: ShoppingCart },
    { id: 'orders', label: 'Histórico de Pedidos', icon: Layers },
    { id: 'catalog', label: 'Gerenciamento de Catálogo', icon: Package },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <IntroHelp />;
      case 'pos': return <POSHelp />;
      case 'orders': return <OrdersHelp />;
      case 'catalog': return <CatalogHelp />;
      case 'settings': return <SettingsHelp />;
      default: return <IntroHelp />;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden font-sans">
      <CustomTitleBar />
      
      <div className="flex-1 flex flex-col bg-white overflow-hidden shadow-sm m-4 rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 px-8 py-6 flex items-center gap-4">
          <button 
            onClick={() => navigate('/')} 
            className="p-2 -ml-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            title="Voltar ao sistema"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Central de Ajuda</h1>
            <p className="text-gray-500 mt-1">Consulte os manuais de instrução de cada módulo do sistema.</p>
          </div>
        </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Help Navigation Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-gray-50/50 p-4 overflow-y-auto flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as HelpTab)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100/50 text-blue-700 font-semibold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
          </main>
        </div>
      </div>
    </div>
  );
}
