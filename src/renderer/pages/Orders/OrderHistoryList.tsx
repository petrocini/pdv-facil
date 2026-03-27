import React, { useEffect, useState } from 'react';
import OrderDetailsModal from './OrderDetailsModal';

interface Order {
  id: string;
  ticket_number: number;
  created_at: string;
  total_amount: string | number;
  status: string;
}

export default function OrderHistoryList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [dateFilter, setDateFilter] = useState<'today' | 'all' | 'custom'>('today');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [ticketFilter, setTicketFilter] = useState('');

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const filters: any = {};
      
      if (dateFilter === 'today') {
        const now = new Date();
        const pad = (n: number) => String(n).padStart(2, '0');
        const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
        filters.dateFrom = today;
        filters.dateTo = today;
      } else if (dateFilter === 'custom') {
        if (dateFrom) filters.dateFrom = dateFrom;
        if (dateTo) filters.dateTo = dateTo;
      }

      if (statusFilter) filters.status = statusFilter;
      if (ticketFilter) filters.ticket_number = ticketFilter;

      // @ts-ignore
      const res = await window.api.orders.getAll(filters);
      if (res.success) {
        setOrders(res.data);
      } else {
        console.error("Failed to fetch orders:", res.error);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [dateFilter, dateFrom, dateTo, statusFilter, ticketFilter]);

  const formatCurrency = (val: string | number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(val));
  };

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Histórico de Pedidos</h1>
          <p className="text-slate-500 mt-1">Consulte e gerencie os pedidos finalizados.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Período</label>
          <select 
            value={dateFilter} 
            onChange={(e) => setDateFilter(e.target.value as any)}
            className="w-full md:w-40 border-slate-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="today">Hoje</option>
            <option value="all">Todos</option>
            <option value="custom">Personalizado</option>
          </select>
        </div>

        {dateFilter === 'custom' && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">De</label>
              <input 
                type="date" 
                value={dateFrom} 
                onChange={(e) => setDateFrom(e.target.value)} 
                className="w-full md:w-36 border-slate-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Até</label>
              <input 
                type="date" 
                value={dateTo} 
                onChange={(e) => setDateTo(e.target.value)} 
                className="w-full md:w-36 border-slate-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </>
        )}

        <div>
           <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Status</label>
           <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-40 border-slate-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Todos</option>
            <option value="Pago">Pago</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>

        <div>
           <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Senha</label>
           <input 
             type="number" 
             placeholder="Ex: 12"
             value={ticketFilter} 
             onChange={(e) => setTicketFilter(e.target.value)}
             className="w-full md:w-32 border-slate-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-slate-400"
           />
        </div>
        
        <div className="ml-auto">
           <button 
             onClick={fetchOrders}
             className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2"
           >
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
             Atualizar
           </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200/60 shadow-sm rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Senha</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Data / Hora</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Valor Total</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
               <tr>
                 <td colSpan={5} className="p-12 text-center text-slate-400">
                   <div className="animate-pulse space-y-4">
                     <div className="h-4 bg-slate-100 rounded w-1/4 mx-auto"></div>
                     <div className="h-4 bg-slate-100 rounded w-1/3 mx-auto"></div>
                   </div>
                 </td>
               </tr>
            ) : orders.length === 0 ? (
               <tr>
                 <td colSpan={5} className="p-16 text-center text-slate-400">
                   Nenhum pedido encontrado para os filtros selecionados.
                 </td>
               </tr>
            ) : (
              orders.map(order => {
                const isCanceled = order.status === 'Cancelado';
                return (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4 font-bold text-slate-900 text-lg">
                      #{String(order.ticket_number).padStart(3, '0')}
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-medium text-slate-900">
                        {new Date(order.created_at).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="text-xs text-slate-500">
                        {new Date(order.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isCanceled ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-900 text-right">
                      <span className={isCanceled ? 'line-through text-slate-400' : ''}>
                        {formatCurrency(order.total_amount)}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setSelectedOrderId(order.id)}
                        className="text-indigo-600 hover:text-indigo-900 font-medium text-sm transition-colors hover:underline"
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {selectedOrderId && (
        <OrderDetailsModal 
          orderId={selectedOrderId} 
          onClose={() => setSelectedOrderId(null)} 
          onOrderCancelled={() => {
            fetchOrders();
            setSelectedOrderId(null);
          }}
        />
      )}
    </div>
  );
}
