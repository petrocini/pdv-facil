import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Edit2, Trash2, X, DollarSign, ShoppingBag, TrendingUp, AlignLeft, Landmark, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useEventStore } from '../../store/eventStore';
import { useConfirmStore } from '../../store/confirmStore';
import ExtraordinaryMovementModal from './ExtraordinaryMovementModal';

interface EventDetailPanelProps {
  event: Event | null;
  onEdit: (event: Event) => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function EventDetailPanel({ event, onEdit, onDelete, onClose }: EventDetailPanelProps) {
  const [metrics, setMetrics] = useState<any>(null);
  const [movements, setMovements] = useState<ExtraordinaryMovement[]>([]);
  const [loading, setLoading] = useState(false);
  const [isMovementModalOpen, setIsMovementModalOpen] = useState(false);
  
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
      const [metricsRes, movementsRes] = await Promise.all([
        window.api.dashboard.getEventMetrics(event.id),
        window.api.extraordinaryMovements.getByEventId(event.id)
      ]);
      
      if (metricsRes.success) {
        setMetrics(metricsRes.data);
      }
      if (movementsRes.success && movementsRes.data) {
        setMovements(movementsRes.data);
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

  const handleDeleteMovement = async (id: string, description: string) => {
    confirm({
      title: 'Excluir Movimentação',
      message: `Deseja realmente excluir a movimentação "${description}"?`,
      confirmText: 'Excluir',
      variant: 'danger',
      onConfirm: async () => {
        try {
          const res = await window.api.extraordinaryMovements.delete(id);
          if (res.success) {
            toast.success('Movimentação excluída com sucesso');
            loadMetrics();
          } else {
            toast.error(res.error || 'Erro ao excluir movimentação');
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
      <div className={`p-6 text-white relative flex-shrink-0 ${isActive ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gray-800'}`}>
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

      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
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
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <AlignLeft size={14} /> Observações
            </h3>
            <p className="text-sm text-gray-600 bg-amber-50 p-3 rounded-lg border border-amber-100/50 leading-relaxed">
              {event.notes}
            </p>
          </div>
        )}

        {/* Resumo Financeiro */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1">
            <TrendingUp size={14} /> Resumo de Faturamento
          </h3>
          
          {loading && !metrics ? (
            <div className="text-center p-4 text-sm text-gray-500 animate-pulse">Carregando métricas...</div>
          ) : metrics ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Vendas (Pedidos)</span>
                  <div className="text-sm font-extrabold text-gray-700">
                    R$ {Number(metrics.salesRevenue || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Pedidos Emitidos</span>
                  <div className="text-sm font-extrabold text-gray-700">
                    {metrics.totalOrders}
                  </div>
                </div>
              </div>

              {/* Se houver movimentações extraordinárias, exibe o sumário delas */}
              {(Number(metrics.extraordinaryInflow) > 0 || Number(metrics.extraordinaryOutflow) > 0) && (
                <div className="bg-slate-50/50 p-3 rounded-xl border border-dashed border-gray-250 text-xs space-y-1.5">
                  <div className="flex justify-between text-gray-600">
                    <span>Entradas Extraordinárias:</span>
                    <span className="font-bold text-emerald-600">+ R$ {Number(metrics.extraordinaryInflow).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Saídas Extraordinárias:</span>
                    <span className="font-bold text-rose-600">- R$ {Number(metrics.extraordinaryOutflow).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              )}

              {/* Receita Reconciliada Final */}
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-bold text-indigo-900/60 uppercase tracking-wider">Receita Reconciliada</span>
                  <div className="text-xl font-black text-indigo-700">
                    R$ {Number(metrics.totalRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <DollarSign size={20} className="text-indigo-500 opacity-80" />
              </div>

              {/* Ticket Médio */}
              <div className="bg-emerald-50/40 p-3 rounded-xl border border-emerald-100/50 flex justify-between items-center text-xs">
                <span className="font-semibold text-emerald-900">Ticket Médio (Vendas):</span>
                <span className="font-bold text-emerald-700">
                  R$ {Number(metrics.averageTicket).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center p-4 text-sm text-gray-500">Sem dados de vendas</div>
          )}
        </div>

        {/* Lista de Movimentações Extraordinárias */}
        <div className="border-t border-gray-100 pt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <Landmark size={14} /> Ajustes Extraordinários
            </h3>
            <button
              onClick={() => setIsMovementModalOpen(true)}
              className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-bold bg-indigo-50 hover:bg-indigo-100 py-1 px-2.5 rounded-lg border border-indigo-100 transition-colors"
            >
              <Plus size={14} />
              Lançar Ajuste
            </button>
          </div>

          {movements.length > 0 ? (
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {movements.map((movement) => (
                <div 
                  key={movement.id} 
                  className="bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-3 flex justify-between items-start text-xs shadow-sm hover:shadow transition-all group"
                >
                  <div className="space-y-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`font-extrabold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider ${
                        movement.type === 'entrada' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {movement.type === 'entrada' ? 'Entrada' : 'Saída'}
                      </span>
                      {movement.payment_method && (
                        <span className="bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">
                          {movement.payment_method}
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-gray-700 break-words" title={movement.description}>
                      {movement.description}
                    </p>
                    <span className="text-[9px] text-gray-400 block font-medium">
                      {new Date(movement.created_at).toLocaleDateString('pt-BR')} {new Date(movement.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`font-black text-sm ${
                      movement.type === 'entrada' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      {movement.type === 'entrada' ? '+' : '-'} R$ {Number(movement.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <button
                      onClick={() => handleDeleteMovement(movement.id, movement.description)}
                      className="p-1 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      title="Excluir Ajuste"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-4 text-center text-xs text-gray-400">
              Nenhuma movimentação extraordinária lançada neste evento.
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2 flex-shrink-0">
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

      {/* Lançamento Modal */}
      <ExtraordinaryMovementModal
        isOpen={isMovementModalOpen}
        onClose={() => setIsMovementModalOpen(false)}
        eventId={event.id}
        onSuccess={loadMetrics}
      />
    </div>
  );
}
