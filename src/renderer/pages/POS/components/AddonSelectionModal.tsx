import React, { useState, useEffect } from 'react';
import { X, Check, Plus, Minus } from 'lucide-react';
import { CartAddon } from '../../../store/cartStore';

interface AddonSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  onAddToCart: (quantity: number, addons: CartAddon[]) => void;
}

export default function AddonSelectionModal({ isOpen, onClose, product, onAddToCart }: AddonSelectionModalProps) {
  const [quantity, setQuantity] = useState(1);
  
  const [selected, setSelected] = useState<Record<string, Record<string, number>>>({});

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setSelected({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddonToggle = (groupId: string, addon: any, maxForGroup: number) => {
    const currentGroupSelections = selected[groupId] || {};
    const totalSelectedInGroup = Object.values(currentGroupSelections).reduce((a, b) => a + b, 0);
    const currentAddonQty = currentGroupSelections[addon.id] || 0;

    setSelected(prev => {
      const newGroup = { ...prev[groupId] };
      
      if (currentAddonQty > 0) {
        // Toggle off since we are treating a click as toggle in multiple choice, 
        // OR decrement if we want to allow multiples of the SAME addon? 
        // Usually addons in POS are +1 -1 or checkboxes. Let's make it a checkbox toggle for simplicity if max_selections > 1
        // But if max_selections is 1, it acts like a radio.
        if (maxForGroup === 1) {
           return prev; // cannot toggle off radio easily, just leave it selected, or click another.
        }
        
        delete newGroup[addon.id];
      } else {
        // Turning on
        if (maxForGroup === 1) {
          // act as radio, clear others
          return { ...prev, [groupId]: { [addon.id]: 1 } };
        } else {
          // act as checkbox, check max
          if (totalSelectedInGroup < maxForGroup) {
            newGroup[addon.id] = 1;
          } else {
            // Reached max
            return prev;
          }
        }
      }
      return { ...prev, [groupId]: newGroup };
    });
  };

  const getAddonsTotal = () => {
    let total = 0;
    Object.keys(selected).forEach(groupId => {
      const selections = selected[groupId];
      Object.keys(selections).forEach(addonId => {
        const qty = selections[addonId];
        const groupLink = product.product_addon_groups.find((g: any) => g.addon_group_id === groupId);
        if (groupLink) {
          const addonObj = groupLink.addon_group.addons.find((a: any) => a.id === addonId);
          if (addonObj) {
            total += Number(addonObj.price) * qty;
          }
        }
      });
    });
    return total;
  };

  const isFormValid = () => {
    for (const link of product.product_addon_groups) {
      const groupId = link.addon_group_id;
      const min = link.min_selections;
      const currentSelectedCount = Object.values(selected[groupId] || {}).reduce((a, b) => a + b, 0);
      
      if (currentSelectedCount < min) {
        return false;
      }
    }
    return true;
  };

  const handleConfirm = () => {
    if (!isFormValid()) return;
    
    const cartAddons: CartAddon[] = [];
    Object.keys(selected).forEach(groupId => {
      const selections = selected[groupId];
      Object.keys(selections).forEach(addonId => {
        const qty = selections[addonId];
        if (qty > 0) {
          const groupLink = product.product_addon_groups.find((g: any) => g.addon_group_id === groupId);
          const addonObj = groupLink.addon_group.addons.find((a: any) => a.id === addonId);
          cartAddons.push({
            addonId,
            name: addonObj.name,
            price: Number(addonObj.price),
            quantity: qty
          });
        }
      });
    });

    onAddToCart(quantity, cartAddons);
  };

  const totalItemPrice = (Number(product.base_price) + getAddonsTotal()) * quantity;
  const isValid = isFormValid();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <p className="text-gray-500 mt-1">Personalize o seu produto</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white text-gray-400 hover:text-gray-700 rounded-full shadow-sm hover:shadow transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-white">
          {product.product_addon_groups.map((link: any) => {
            const group = link.addon_group;
            const min = link.min_selections;
            const max = link.max_selections;
            const currentSelectedCount = Object.values(selected[group.id] || {}).reduce((a, b) => a + b, 0);
            
            const isMinMet = currentSelectedCount >= min;

            return (
              <div key={link.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      {group.name}
                      {isMinMet && min > 0 && <Check size={18} className="text-green-500" />}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {min === max ? `Escolha ${min} opção` : `Escolha de ${min} até ${max} opções`}
                    </p>
                  </div>
                  {!isMinMet && min > 0 && (
                     <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       Obrigatório
                     </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.addons.map((addon: any) => {
                    const isSelected = !!(selected[group.id] && selected[group.id][addon.id]);
                    const isDisabled = !isSelected && currentSelectedCount >= max;

                    return (
                      <button
                        key={addon.id}
                        disabled={isDisabled && max > 1}
                        onClick={() => handleAddonToggle(group.id, addon, max)}
                        className={`text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50/50 shadow-sm' 
                            : isDisabled
                              ? 'border-transparent bg-gray-100 opacity-50 cursor-not-allowed'
                              : 'border-transparent bg-white shadow-sm hover:border-blue-200'
                        }`}
                      >
                        <div>
                          <p className={`font-semibold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                            {addon.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {Number(addon.price) > 0 ? `+ R$ ${Number(addon.price).toFixed(2).replace('.', ',')}` : 'Sem custo adicional'}
                          </p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'
                        }`}>
                            {isSelected && <Check size={12} className="text-white" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] flex items-center gap-6">
          <div className="flex items-center bg-gray-100 rounded-xl p-1">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 bg-white rounded-lg text-gray-600 shadow-sm hover:text-blue-600 transition"
            >
              <Minus size={20} />
            </button>
            <span className="w-16 text-center text-xl font-bold">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 bg-white rounded-lg text-gray-600 shadow-sm hover:text-blue-600 transition"
            >
              <Plus size={20} />
            </button>
          </div>

          <button
            disabled={!isValid}
            onClick={handleConfirm}
            className={`flex-1 py-4 rounded-xl font-bold text-lg flex justify-between items-center px-6 transition-all shadow-lg ${
              isValid 
                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/20 active:scale-95' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
            }`}
          >
            <span>Adicionar</span>
            <span>R$ {totalItemPrice.toFixed(2).replace('.', ',')}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
