import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Edit2, Trash2, X, DollarSign, ShoppingBag, TrendingUp, AlignLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useEventStore } from '../../store/eventStore';
import { useConfirmStore } from '../../store/confirmStore';

interface EventDetailPanelProps {
  event: Event | null;
  onEdit: (event: Event) => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function EventDetailPanel({ event, onEdit, onDelete, onClose }: EventDetailPanelProps) {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { loadActiveEvent } = useEventStore();
  const { confirm } = useConfirmStore();

  useEffect(() => {
    if (event) {
      loadMetrics();
    }
  }, [event]);

  const loadMetrics = async () => {
    if (!event) return;
    setLoading(true);
    try {
      const res = await window.api.dashboard.getEventMetrics(event.id);
      if (res.success) {
        setMetrics(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!event) return;
    
    confirm({
      title: 'Excluir Evento',
      message: `Tem certeza que deseja excluir o evento "${event.name}"? Os pedidos não serão excluídos, apenas desvinculados.`,
      confirmText: 'Excluir',
      variant: 'danger',
      onConfirm: async () => {
        try {
          const res = await window.api.events.delete(event.id);
          if (res.success) {
            toast.success('Evento excluído com sucesso');
            loadActiveEvent();
            onDelete();
          } else {
            toast.error(res.error || 'Erro ao excluir evento');
          }
        } catch (e: any) {
          toast.error(e.message || 'Erro inesperado');
        }
      }
    });
  };

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <Calendar size={64} className="mb-4 text-gray-200" />
        <p className="text-center font-medium">Selecione um evento no calendário para ver os detalhes</p>
      </div>
    );
  }

  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);
  const isActive = new Date() >= startDate && new Date() <= endDate;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden animate-in fade-in duration-300">
      <div className={`p-6 text-white relative ${isActive ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gray-800'}`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors">
          <X size={20} />
        </button>
        
        {isActive && (
          <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-100 text-xs font-bold uppercase tracking-wider py-1 px-2.5 rounded-full mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Em andamento
          </div>
        )}
        
        <h2 className="text-2xl font-bold mb-1">{event.name}</h2>
        <div className="flex items-center gap-4 text-sm opacity-90">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            {event.city} {event.state ? `- ${event.state}` : ''}
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Período</h3>
          <div className="flex items-center justify-between text-sm text-gray-700 font-medium">
            <div className="text-center flex-1">
              <span className="block text-gray-500 text-xs mb-1">Início</span>
              {startDate.toLocaleDateString('pt-BR')} <br />
              <span className="text-gray-400 font-normal">{startDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="text-center flex-1">
              <span className="block text-gray-500 text-xs mb-1">Fim</span>
              {endDate.toLocaleDateString('pt-BR')} <br />
              <span className="text-gray-400 font-normal">{endDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>

        {event.notes && (
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <AlignLeft size={14} /> Observações
            </h3>
            <p className="text-sm text-gray-600 bg-amber-50 p-3 rounded-lg border border-amber-100/50 leading-relaxed">
              {event.notes}
            </p>
          </div>
        )}

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1">
            <TrendingUp size={14} /> Resumo de Vendas
          </h3>
          
          {loading ? (
            <div className="text-center p-4 text-sm text-gray-500 animate-pulse">Carregando métricas...</div>
          ) : metrics ? (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-indigo-900">Receita</span>
                  <DollarSign size={16} className="text-indigo-500" />
                </div>
                <div className="text-xl font-bold text-indigo-700">
                  R$ {Number(metrics.totalRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-purple-900">Pedidos</span>
                  <ShoppingBag size={16} className="text-purple-500" />
                </div>
                <div className="text-xl font-bold text-purple-700">
                  {metrics.totalOrders}
                </div>
              </div>
              <div className="col-span-2 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-emerald-900">Ticket Médio</span>
                </div>
                <div className="text-lg font-bold text-emerald-700">
                  R$ {Number(metrics.averageTicket).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-4 text-sm text-gray-500">Sem dados de vendas</div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2">
        <button
          onClick={() => onEdit(event)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Edit2 size={18} /> Editar
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-red-200 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
        >
          <Trash2 size={18} /> Excluir
        </button>
      </div>
    </div>
  );
}
