import React from 'react';
import { Minus, Square, X, UtensilsCrossed } from 'lucide-react';

export default function CustomTitleBar() {
  return (
    <div 
      className="h-10 w-full bg-blue-700 flex items-center justify-between select-none z-50 flex-shrink-0 shadow-md"
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
    >
      <div className="flex items-center gap-3 px-4">
        <UtensilsCrossed size={16} className="text-blue-100" />
        <span className="text-sm font-semibold text-white tracking-wide">Criativa PDV</span>
      </div>

      <div className="flex h-full" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
        <button 
          onClick={() => window.api.app.minimize()}
          className="h-full px-4 hover:bg-blue-800 flex items-center justify-center transition-colors text-blue-100 hover:text-white"
        >
          <Minus size={18} />
        </button>
        <button 
          onClick={() => window.api.app.maximize()}
          className="h-full px-4 hover:bg-blue-800 flex items-center justify-center transition-colors text-blue-100 hover:text-white"
        >
          <Square size={14} />
        </button>
        <button 
          onClick={() => window.api.app.close()}
          className="h-full px-4 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors text-blue-100"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
