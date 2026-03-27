import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, X } from 'lucide-react';
import { useCartStore } from '../../../store/cartStore';
import { toast } from 'sonner';
import PaymentModal from './PaymentModal';
import PrintModal from './PrintModal';

export default function CartSidebar() {
  const { items, cartTotal, updateQuantity, removeItem, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [orderConfirmData, setOrderConfirmData] = useState<any>(null);

  const handleCheckoutClick = () => {
    if (items.length === 0) return;
    setIsPaymentModalOpen(true);
  };

  const handleConfirmPayment = async (paymentMethod: string, ticketNumber: number) => {
    setIsProcessing(true);
    
    try {
      const payload = {
        items,
        cartTotal,
        paymentMethod,
        ticketNumber
      };
      
      const res = await window.api.orders.create(payload);
      if (res.success) {
        setOrderConfirmData({
          ticketNumber: res.data.ticket_number,
          paymentMethod: paymentMethod,
          items: items,
          cartTotal: cartTotal
        });
        
        clearCart();
        setIsPaymentModalOpen(false);
        setIsPrintModalOpen(true);
      } else {
        toast.error('Erro ao finalizar pedido: ' + res.error);
      }
    } catch (e: any) {
      toast.error('Erro inesperado: ' + e.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col shadow-xl z-10 flex-shrink-0">
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-900">Pedido Atual</h2>
        </div>
        {items.length > 0 && (
          <button 
            onClick={clearCart}
            className="text-sm font-medium text-red-500 hover:text-red-700 transition"
          >
            Limpar
          </button>
        )}
      </div>



      <div className="flex-1 overflow-y-auto bg-gray-50/30 p-5 space-y-4">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-6">
              <ShoppingCart size={48} className="text-gray-300" />
            </div>
            <p className="text-lg font-semibold text-gray-500 mb-2">Seu carrinho está vazio</p>
            <p className="text-sm text-gray-400">Adicione produtos do cardápio para começar um novo pedido.</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <div className="flex flex-col mt-1">
                    {item.addons.map((addon, i) => (
                      <span key={i} className="text-xs text-gray-500">
                        + {addon.quantity > 1 ? `${addon.quantity}x ` : ''}{addon.name} 
                        {addon.price > 0 && ` (R$ ${Number(addon.price).toFixed(2).replace('.', ',')})`}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-gray-300 hover:text-red-500 hover:scale-110 hover:bg-red-50 rounded-full transition-all p-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              <div className="flex items-center justify-between pt-3 mt-1 border-t border-gray-50">
                <div className="flex items-center bg-gray-100/80 rounded-xl p-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 bg-white rounded-lg text-gray-600 shadow-sm hover:text-blue-600 hover:shadow-md transition-all active:scale-95"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 bg-white rounded-lg text-gray-600 shadow-sm hover:text-blue-600 hover:shadow-md transition-all active:scale-95"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <span className="font-bold text-gray-900">
                  R$ {item.totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between items-end mb-6">
          <span className="text-gray-500 font-semibold mb-1">Total do Pedido</span>
          <span className="text-3xl font-black text-blue-700 tracking-tight">
            R$ {cartTotal.toFixed(2).replace('.', ',')}
          </span>
        </div>
        
        <button
          onClick={handleCheckoutClick}
          disabled={items.length === 0 || isProcessing}
          className={`group w-full py-4 px-6 rounded-2xl font-bold text-lg flex justify-center items-center gap-3 transition-all duration-300 shadow-xl ${
            items.length === 0 || isProcessing
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
              : 'bg-green-500 hover:bg-green-600 text-white hover:shadow-green-500/30 hover:-translate-y-1 active:scale-[0.98]'
          }`}
        >
          {isProcessing ? 'Processando...' : 'Finalizar Pedido'}
          {!isProcessing && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />}
        </button>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        cartTotal={cartTotal}
        onConfirm={handleConfirmPayment}
        isProcessing={isProcessing}
      />

      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        orderData={orderConfirmData}
      />
    </div>
  );
}
