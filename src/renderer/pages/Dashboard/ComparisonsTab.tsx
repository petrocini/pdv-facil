import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { MapPin, Calendar } from 'lucide-react';

interface Filters {
  startDate?: string;
  endDate?: string;
}

export default function ComparisonsTab({ filters }: { filters: Filters }) {
  const [cityRanking, setCityRanking] = useState<any[]>([]);
  const [eventComparison, setEventComparison] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [rankRes, evCompRes] = await Promise.all([
        window.api.dashboard.getCityRanking(filters),
        window.api.dashboard.getEventComparison(filters)
      ]);
      if (rankRes.success) setCityRanking(rankRes.data);
      if (evCompRes.success) setEventComparison(evCompRes.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (val: number) => `R$ ${val.toFixed(2).replace('.', ',')}`;

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <MapPin className="text-indigo-500" />
          Ranking de Cidades
        </h3>
        
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1,2,3].map(i => <div key={i} className="h-12 bg-gray-100 rounded" />)}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 rounded-lg">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Cidade</th>
                  <th className="px-4 py-3 text-right">Eventos</th>
                  <th className="px-4 py-3 text-right">Pedidos</th>
                  <th className="px-4 py-3 text-right">Ticket Médio</th>
                  <th className="px-4 py-3 text-right rounded-r-lg">Receita Total</th>
                </tr>
              </thead>
              <tbody>
                {cityRanking.map((item, idx) => (
                  <tr key={item.city} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 font-bold text-gray-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">{idx + 1}</span>
                      {item.city}
                    </td>
                    <td className="px-4 py-4 text-right text-gray-600">{item.eventCount}</td>
                    <td className="px-4 py-4 text-right text-gray-600">{item.totalOrders}</td>
                    <td className="px-4 py-4 text-right text-emerald-600 font-medium">{formatCurrency(item.averageTicket)}</td>
                    <td className="px-4 py-4 text-right text-indigo-700 font-bold">{formatCurrency(item.totalRevenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {cityRanking.length === 0 && <p className="text-center text-gray-400 py-6">Nenhum dado encontrado.</p>}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Calendar className="text-purple-500" /> Comparativo de Eventos
        </h3>
        {loading ? (
          <div className="h-[300px] flex items-center justify-center text-gray-400">Carregando gráfico...</div>
        ) : eventComparison.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eventComparison} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="eventName" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(val) => `R$ ${val}`} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Bar dataKey="totalRevenue" fill="#a855f7" radius={[4, 4, 0, 0]} name="Receita" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
           <div className="h-[300px] flex items-center justify-center text-gray-400">Nenhum evento encontrado no período.</div>
        )}
      </div>

    </div>
  );
}
