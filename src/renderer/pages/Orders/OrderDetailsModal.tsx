import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Printer } from 'lucide-react';
import PrintableReceipt from '../../components/PrintableReceipt';

interface OrderDetailsModalProps {
  orderId: string;
  onClose: () => void;
  onOrderCancelled: () => void;
}

export default function OrderDetailsModal({ orderId, onClose, onOrderCancelled }: OrderDetailsModalProps) {
  const [order, setOrder] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const [showCancelPrompt, setShowCancelPrompt] = useState(false);
  const [cancelJustification, setCancelJustification] = useState('');
  const [cancelLoading, setCancelLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // @ts-ignore
        const resOrder = await window.api.orders.getById(orderId);
        if (resOrder.success) {
          setOrder(resOrder.data);
        }
        // @ts-ignore
        const resSettings = await window.api.settings.get();
        if (resSettings?.success) {
          setSettings(resSettings.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [orderId]);

  const handleCancelOrder = async () => {
    if (!cancelJustification.trim()) return;
    try {
      setCancelLoading(true);
      // @ts-ignore
      const res = await window.api.orders.cancel(orderId, cancelJustification);
      if (res.success) {
        onOrderCancelled();
        toast.success('Pedido cancelado com sucesso.');
      } else {
        toast.error(res.error || 'Falha ao cancelar o pedido.');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCancelLoading(false);
    }
  };

  const handlePrint = (type: 'cozinha' | 'cliente') => {
    if (type === 'cozinha') {
      document.body.classList.add('print-kitchen');
      document.body.classList.remove('print-customer');
    } else {
      document.body.classList.add('print-customer');
      document.body.classList.remove('print-kitchen');
    }

    setTimeout(async () => {
      if (settings?.printer_name) {
        await window.api.printer.printSilent({ deviceName: settings.printer_name });
      } else {
        window.print();
      }

      setTimeout(() => {
        document.body.classList.remove('print-kitchen', 'print-customer');
      }, 1000);
    }, 150);
  };

  const getMappedOrderData = () => {
    if (!order) return null;
    return {
      ticketNumber: order.ticket_number,
      paymentMethod: order.payment_method || 'N/A',
      cartTotal: Number(order.total_amount),
      items: order.order_items.map((item: any) => ({
        name: item.product.name,
        quantity: item.quantity,
        totalPrice: Number(item.unit_price) * item.quantity + item.order_item_addons.reduce((acc: number, addon: any) => acc + (Number(addon.charged_price) * addon.quantity), 0),
        addons: item.order_item_addons.map((addon: any) => ({
          name: addon.addon.name,
          quantity: addon.quantity,
          price: Number(addon.charged_price)
        }))
      }))
    };
  };

  const formatCurrency = (val: string | number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(val));
  };

  if (loading || !order) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in py-10">
        <div className="bg-white rounded-2xl w-full max-w-2xl min-h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  const isCanceled = order.status === 'Cancelado';

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in print:hidden py-10">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col max-h-full overflow-hidden zoom-in-95">
          
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Detalhes do Pedido</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-medium text-slate-500">
                  Senha <strong className="text-slate-900">#{String(order.ticket_number).padStart(3, '0')}</strong>
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-sm text-slate-500">
                  {new Date(order.created_at).toLocaleString('pt-BR')}
                </span>
                {isCanceled && (
                   <>
                     <span className="text-slate-300">•</span>
                     <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800 uppercase tracking-widest">Cancelado</span>
                   </>
                )}
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-6">
              
              {(isCanceled && order.cancel_reason) && (
                 <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                   <div>
                     <h4 className="text-sm font-bold text-red-900">Motivo do Cancelamento</h4>
                     <p className="text-sm text-red-700 mt-1">{order.cancel_reason}</p>
                   </div>
                 </div>
              )}

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                 <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                   <h3 className="font-semibold text-slate-700 text-sm tracking-wide uppercase">Itens do Pedido</h3>
                 </div>
                 <div className="divide-y divide-slate-100">
                   {order.order_items.map((item: any, idx: number) => (
                     <div key={item.id} className="p-4">
                       <div className="flex justify-between items-start">
                         <div className="flex gap-3">
                           <div className="min-w-6 text-sm font-bold text-slate-400 mt-0.5">{item.quantity}x</div>
                           <div>
                              <p className="font-semibold text-slate-900">{item.product.name}</p>
                              
                              {item.order_item_addons && item.order_item_addons.length > 0 && (
                                 <ul className="mt-1 space-y-1">
                                   {item.order_item_addons.map((addonItem: any) => (
                                     <li key={addonItem.id} className="text-sm text-slate-500 flex justify-between">
                                       <span className="flex items-center gap-1.5">
                                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                          {addonItem.quantity > 1 ? `${addonItem.quantity}x ` : ''} {addonItem.addon.name}
                                       </span>
                                       {Number(addonItem.charged_price) > 0 && (
                                          <span className="text-slate-400 text-xs">+{formatCurrency(addonItem.charged_price)}</span>
                                       )}
                                     </li>
                                   ))}
                                 </ul>
                              )}
                           </div>
                         </div>
                         <div className="text-sm font-medium text-slate-900">
                           {formatCurrency(Number(item.unit_price) * item.quantity + item.order_item_addons.reduce((acc: number, addon: any) => acc + (Number(addon.charged_price) * addon.quantity), 0))}
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="flex justify-end pt-2">
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 w-64">
                   <div className="flex justify-between items-center text-sm font-semibold text-slate-500 mb-2">
                     <span>Descontos</span>
                     <span>R$ 0,00</span>
                   </div>
                   <div className="flex justify-between items-center font-bold text-lg text-slate-900 pt-2 border-t border-slate-200">
                     <span>Total Pago</span>
                     <span>{formatCurrency(order.total_amount)}</span>
                   </div>
                 </div>
              </div>
              
            </div>
          </div>

          <div className="border-t border-slate-100 p-4 bg-slate-50/50 flex justify-between items-center">
            {!isCanceled && !showCancelPrompt ? (
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowCancelPrompt(true)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  Cancelar Pedido
                </button>
                <button
                  onClick={() => handlePrint('cozinha')}
                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                  title="Imprimir para Cozinha"
                >
                  <Printer size={18} />
                  Cozinha
                </button>
                
                <button
                  onClick={() => handlePrint('cliente')}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                  title="Imprimir para Cliente"
                >
                  <Printer size={18} />
                  Cliente
                </button>
              </div>
            ) : !isCanceled && showCancelPrompt ? (
              <div className="flex-1 flex gap-3 items-center">
                <input 
                  type="text" 
                  placeholder="Motivo do cancelamento..." 
                  autoFocus
                  value={cancelJustification}
                  onChange={(e) => setCancelJustification(e.target.value)}
                  className="flex-1 border-red-300 focus:border-red-500 focus:ring-red-500 rounded-lg text-sm"
                />
                <button 
                  onClick={handleCancelOrder}
                  disabled={cancelLoading || !cancelJustification.trim()}
                  className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  {cancelLoading ? 'Cancelando...' : 'Confirmar'}
                </button>
                <button 
                  onClick={() => {
                    setShowCancelPrompt(false);
                    setCancelJustification('');
                  }}
                  className="text-slate-500 hover:text-slate-700 px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                 >
                   Voltar
                 </button>
              </div>
            ) : (
               <div></div>
            )}
            
            {!showCancelPrompt && (
              <button 
                  onClick={onClose}
                  className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2 rounded-lg font-semibold shadow-sm transition-colors"
              >
                  Fechar
              </button>
            )}
          </div>
        </div>
      </div>

      <PrintableReceipt orderData={getMappedOrderData()} settings={settings} />
    </>
  );
}
