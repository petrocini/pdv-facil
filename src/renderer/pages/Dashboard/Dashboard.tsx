import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  averageTicket: number;
}

interface TopItem {
  productName: string;
  quantity: number;
}

export default function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalRevenue: 0,
    totalOrders: 0,
    averageTicket: 0
  });
  const [topItems, setTopItems] = useState<TopItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        // @ts-ignore
        const metricsResponse = await window.api.dashboard.getMetrics();
        if (metricsResponse.success) {
          setMetrics(metricsResponse.data);
        }

        // @ts-ignore
        const topItemsResponse = await window.api.dashboard.getTopItems();
        if (topItemsResponse.success) {
          setTopItems(topItemsResponse.data);
        }
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-1">Resumo das atividades de hoje.</p>
        </div>
        <Link 
          to="/pos" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-colors flex items-center space-x-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          <span>Novo Pedido</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wider">Faturamento Hoje</h3>
          {loading ? (
             <div className="h-9 w-32 bg-slate-100 animate-pulse rounded"></div>
          ) : (
             <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{formatCurrency(metrics.totalRevenue)}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wider">Pedidos Hoje</h3>
          {loading ? (
             <div className="h-9 w-24 bg-slate-100 animate-pulse rounded"></div>
          ) : (
             <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{metrics.totalOrders}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wider">Ticket Médio</h3>
          {loading ? (
             <div className="h-9 w-32 bg-slate-100 animate-pulse rounded"></div>
          ) : (
             <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{formatCurrency(metrics.averageTicket)}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center justify-center flex-grow min-h-[300px]">
           <div className="opacity-50 flex flex-col items-center space-y-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              <p className="text-slate-500 font-medium">Os gráficos de histórico de vendas entrarão aqui.</p>
           </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>Top Mais Vendidos</span>
          </h3>
          
          <div className="flex-1">
             {loading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                       <div className="h-4 bg-slate-100 animate-pulse rounded w-3/4"></div>
                       <div className="h-4 bg-slate-100 animate-pulse rounded w-8"></div>
                    </div>
                  ))}
                </div>
             ) : topItems.length > 0 ? (
                <ul className="space-y-5">
                   {topItems.map((item, index) => (
                      <li key={index} className="flex items-center justify-between group">
                         <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                              {index + 1}
                            </span>
                            <span className="font-medium text-slate-700 truncate max-w-[160px]" title={item.productName}>
                               {item.productName}
                            </span>
                         </div>
                         <span className="text-sm font-semibold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-md">
                            {item.quantity} un
                         </span>
                      </li>
                   ))}
                </ul>
             ) : (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-3 opacity-60">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                   <p className="text-sm text-slate-500">Nenhum pedido hoje.</p>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
