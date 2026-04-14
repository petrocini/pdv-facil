import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  averageTicket: number;
}

interface TopItem {
  productName: string;
  quantity: number;
}

interface ChartItem {
  name: string;
  total: number;
}

interface PaymentMethodItem {
  method: string;
  total: number;
}

export default function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalRevenue: 0,
    totalOrders: 0,
    averageTicket: 0
  });
  const [topItems, setTopItems] = useState<TopItem[]>([]);
  const [chartData, setChartData] = useState<ChartItem[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const loadData = async () => {
    try {
      setLoading(true);
      const filters = {
        startDate: startDate ? new Date(startDate).toISOString() : undefined,
        endDate: endDate ? new Date(endDate).toISOString() : undefined,
        paymentMethod: paymentMethod || undefined,
      };

      // @ts-ignore
      const metricsResponse = await window.api.dashboard.getMetrics(filters);
      if (metricsResponse.success) {
        setMetrics(metricsResponse.data);
      }

      // @ts-ignore
      const topItemsResponse = await window.api.dashboard.getTopItems(filters);
      if (topItemsResponse.success) {
        setTopItems(topItemsResponse.data);
      }

      // @ts-ignore
      const chartResponse = await window.api.dashboard.getChartData(filters);
      if (chartResponse.success) {
        setChartData(chartResponse.data);
      }

      // @ts-ignore
      const paymentResponse = await window.api.dashboard.getSalesByPaymentMethod(filters);
      if (paymentResponse.success) {
        setPaymentMethods(paymentResponse.data);
      }
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-1">Resumo das atividades e faturamento.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500 ml-2">De</span>
            <input 
              type="datetime-local" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="text-sm border-slate-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500">Até</span>
            <input 
              type="datetime-local" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="text-sm border-slate-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-sm border-slate-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value="">Todas as formas</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="PIX">PIX</option>
              <option value="Crédito">Crédito</option>
              <option value="Débito">Débito</option>
            </select>
          </div>
          <button 
            onClick={loadData}
            disabled={loading}
            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg font-medium transition-colors border border-indigo-100 whitespace-nowrap ml-1 flex items-center disabled:opacity-50"
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            )}
            Filtrar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group hover:border-indigo-200 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-2 -translate-y-2 group-hover:scale-110 group-hover:opacity-10 transition-all text-indigo-600">
            <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wider relative z-10">Faturamento</h3>
          {loading ? (
             <div className="h-9 w-32 bg-slate-100 animate-pulse rounded"></div>
          ) : (
             <p className="text-4xl font-extrabold text-slate-900 tracking-tight relative z-10">{formatCurrency(metrics.totalRevenue)}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group hover:border-sky-200 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-2 -translate-y-2 group-hover:scale-110 group-hover:opacity-10 transition-all text-sky-600">
             <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wider relative z-10">Total de Pedidos</h3>
          {loading ? (
             <div className="h-9 w-24 bg-slate-100 animate-pulse rounded"></div>
          ) : (
             <p className="text-4xl font-extrabold text-slate-900 tracking-tight relative z-10">{metrics.totalOrders}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group hover:border-emerald-200 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-2 -translate-y-2 group-hover:scale-110 group-hover:opacity-10 transition-all text-emerald-600">
            <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3 className="text-slate-500 font-medium text-sm mb-2 uppercase tracking-wider relative z-10">Ticket Médio</h3>
          {loading ? (
             <div className="h-9 w-32 bg-slate-100 animate-pulse rounded"></div>
          ) : (
             <p className="text-4xl font-extrabold text-slate-900 tracking-tight relative z-10">{formatCurrency(metrics.averageTicket)}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col min-h-[400px]">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
               <span>Histórico de Vendas</span>
             </h3>
           </div>
           
           <div className="flex-1 w-full h-full min-h-[300px]">
             {loading ? (
               <div className="w-full h-full flex items-center justify-center">
                 <div className="animate-pulse flex flex-col items-center">
                   <div className="h-32 w-full max-w-md bg-slate-100 rounded-lg mb-4"></div>
                   <div className="h-4 w-32 bg-slate-100 rounded"></div>
                 </div>
               </div>
             ) : chartData.length > 0 ? (
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                   <defs>
                     <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                   <XAxis 
                     dataKey="name" 
                     axisLine={false} 
                     tickLine={false} 
                     tick={{ fill: '#64748b', fontSize: 12 }} 
                     dy={10}
                   />
                   <YAxis 
                     axisLine={false} 
                     tickLine={false} 
                     tick={{ fill: '#64748b', fontSize: 12 }}
                     tickFormatter={(value) => `R$ ${value}`}
                   />
                   <Tooltip 
                     formatter={(value: number) => [formatCurrency(value), 'Faturamento']}
                     labelStyle={{ color: '#0f172a', fontWeight: 'bold' }}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                   />
                   <Area 
                     type="monotone" 
                     dataKey="total" 
                     stroke="#6366f1" 
                     strokeWidth={3}
                     fillOpacity={1} 
                     fill="url(#colorTotal)" 
                   />
                 </AreaChart>
               </ResponsiveContainer>
             ) : (
               <div className="h-full flex flex-col justify-center items-center text-center space-y-3 opacity-60">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                 <p className="text-sm text-slate-500">Sem dados para exibir no gráfico neste período.</p>
               </div>
             )}
           </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col min-h-[400px]">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>Top Mais Vendidos</span>
          </h3>
          
          <div className="flex-1 overflow-y-auto">
             {loading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                       <div className="flex items-center space-x-3 w-full">
                         <div className="h-6 w-6 bg-slate-100 rounded-full animate-pulse"></div>
                         <div className="h-4 bg-slate-100 animate-pulse rounded w-1/2"></div>
                       </div>
                       <div className="h-6 bg-slate-100 animate-pulse rounded w-12"></div>
                    </div>
                  ))}
                </div>
             ) : topItems.length > 0 ? (
                <ul className="space-y-4">
                   {topItems.map((item, index) => (
                      <li key={index} className="flex items-center justify-between group p-2 hover:bg-slate-50 rounded-xl transition-colors">
                         <div className="flex items-center space-x-3">
                            <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                              {index + 1}
                            </span>
                            <span className="font-medium text-slate-700 truncate max-w-[160px]" title={item.productName}>
                               {item.productName}
                            </span>
                         </div>
                         <span className="text-sm font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                            {item.quantity} un
                         </span>
                      </li>
                   ))}
                </ul>
             ) : (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-3 opacity-60 mt-10">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                   <p className="text-sm text-slate-500">Nenhum item vendido neste período.</p>
                </div>
             )}
          </div>
        </div>
      </div>

      {/* Vendas por Forma de Pagamento */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          <span>Vendas por Forma de Pagamento</span>
        </h3>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-28 bg-slate-100 animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : paymentMethods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentMethods.map((pm, index) => {
              const percentage = metrics.totalRevenue > 0 ? (pm.total / metrics.totalRevenue) * 100 : 0;
              return (
                <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between group hover:border-pink-200 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">{pm.method}</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded-full group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors">{percentage.toFixed(1)}%</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{formatCurrency(pm.total)}</p>
                  </div>
                  <div className="mt-4 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-pink-500 h-1.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center space-y-3 opacity-60 py-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            <p className="text-sm text-slate-500">Nenhum dado de pagamento neste período.</p>
          </div>
        )}
      </div>

    </div>
  );
}
