import React, { useState } from 'react';
import { LayoutDashboard, BarChart2 } from 'lucide-react';
import GeneralTab from './GeneralTab';
import ComparisonsTab from './ComparisonsTab';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'general' | 'comparisons'>('general');

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex border-b border-gray-200 mb-6 bg-white rounded-t-xl px-2 pt-2 shrink-0">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-4 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'general' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <LayoutDashboard size={18} /> Visão Analítica
        </button>
        <button
          onClick={() => setActiveTab('comparisons')}
          className={`px-4 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'comparisons' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <BarChart2 size={18} /> Comparativos e Rankings
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'general' && <GeneralTab />}
        {activeTab === 'comparisons' && <ComparisonsTab filters={{}} />}
      </div>
    </div>
  );
}
