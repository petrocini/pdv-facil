import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, ListTree, Package, Settings, Layers, HelpCircle, Calendar, MapPin } from 'lucide-react';
import CustomTitleBar from './CustomTitleBar';
import { Toaster, toast } from 'sonner';
import ConfirmDialog from './ui/ConfirmDialog';
import { useEventStore } from '../store/eventStore';
import { useConfirmStore } from '../store/confirmStore';
import { Play, Square } from 'lucide-react';
import EventForm from '../pages/Events/EventForm';

export default function Layout() {
  const { activeEvent, loadActiveEvent } = useEventStore();
  const { confirm } = useConfirmStore();
  const navigate = useNavigate();
  const [isQuickStartOpen, setIsQuickStartOpen] = useState(false);
  const [quickForm, setQuickForm] = useState({ name: '', city: '' });

  useEffect(() => {
    loadActiveEvent();
  }, [loadActiveEvent]);

  const handleEndActive = async (e: React.MouseEvent) => {
    e.stopPropagation();
    confirm({
      title: 'Encerrar Evento',
      message: 'Tem certeza que deseja encerrar o evento atual?',
      onConfirm: async () => {
        try {
          await window.api.events.endActive();
          await loadActiveEvent();
          toast.success('Evento encerrado!');
        } catch (err: any) {
          toast.error('Erro ao encerrar evento');
        }
      }
    });
  };

  const handleQuickStart = () => {
    setIsQuickStartOpen(true);
  };

  const handleEventFormSuccess = async () => {
    await loadActiveEvent();
  };
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
          <div className="p-4 border-b border-gray-100">
            {activeEvent ? (
              <div className="group relative">
                <div 
                  onClick={() => navigate('/events')}
                  className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 text-white shadow-sm cursor-pointer hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:scale-110 transition-transform">
                    <Calendar size={48} />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-100">Evento Ativo</span>
                  </div>
                  <h3 className="font-bold text-sm line-clamp-1 pr-6">{activeEvent.name}</h3>
                  <div className="flex items-center gap-1 mt-1 text-xs text-indigo-100">
                    <MapPin size={12} />
                    <span className="truncate">{activeEvent.city} {activeEvent.state ? `- ${activeEvent.state}` : ''}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/20">
                    <button
                      onClick={handleEndActive}
                      title="Encerrar Agora"
                      className="w-full py-1.5 flex items-center justify-center gap-1.5 bg-white/20 hover:bg-white/30 rounded text-white text-[10px] font-bold transition-colors z-10 relative"
                    >
                      <Square size={10} fill="currentColor" />
                      ENCERRAR
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 border-dashed rounded-lg p-3 text-center">
                <span className="text-xs text-gray-500 block mb-2">Nenhum evento ativo</span>
                <button
                  onClick={handleQuickStart}
                  className="w-full flex items-center justify-center gap-1 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded text-xs font-semibold transition-colors"
                >
                  <Play size={12} fill="currentColor" />
                  Iniciar Evento
                </button>
              </div>
            )}
          </div>
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
            <NavLink to="/events" className={navLinkClasses}>
              <Calendar size={20} /> Eventos
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

      <EventForm
        isOpen={isQuickStartOpen}
        onClose={() => setIsQuickStartOpen(false)}
        selectedDate={new Date()}
        onSuccess={handleEventFormSuccess}
      />
    </div>
  );
}
