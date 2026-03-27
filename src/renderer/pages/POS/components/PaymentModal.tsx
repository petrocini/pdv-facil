import React, { useState, useEffect } from 'react';
import { CreditCard, Banknote, WalletCards, X, ArrowRight, QrCode } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number;
  onConfirm: (paymentMethod: string, customTicketNumber: number) => void;
  isProcessing: boolean;
}

export default function PaymentModal({ isOpen, onClose, cartTotal, onConfirm, isProcessing }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [ticketNumber, setTicketNumber] = useState<number | ''>('');
  const [loadingTicket, setLoadingTicket] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadNextTicket();
      setSelectedMethod('');
    }
  }, [isOpen]);

  const loadNextTicket = async () => {
    setLoadingTicket(true);
    try {
      const res = await window.api.orders.getNextTicketNumber();
      if (res.success && res.data) {
        setTicketNumber(Number(res.data));
      }
    } catch (error) {
      console.error('Failed to load next ticket number', error);
    } finally {
      setLoadingTicket(false);
    }
  };

  if (!isOpen) return null;

  const paymentMethods = [
    { id: 'Dinheiro', label: 'Dinheiro', icon: Banknote, color: 'text-green-600', bg: 'bg-green-100' },
    { id: 'Cartão de Crédito', label: 'Cartão de Crédito', icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 'Cartão de Débito', label: 'Cartão de Débito', icon: WalletCards, color: 'text-purple-600', bg: 'bg-purple-100' },
    { id: 'PIX', label: 'PIX', icon: QrCode, color: 'text-teal-600', bg: 'bg-teal-100' }
  ];

  const handleConfirm = () => {
    if (!selectedMethod) {
      toast.error('Selecione uma forma de pagamento.');
      return;
    }
    if (!ticketNumber || ticketNumber <= 0) {
      toast.error('Informe uma senha/ticket válida.');
      return;
    }
    
    onConfirm(selectedMethod, Number(ticketNumber));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm print:hidden">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Finalizar Pedido</h2>
          <button 
            onClick={onClose}
            disabled={isProcessing}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm font-semibold text-gray-500 mb-1">Total a cobrar</p>
            <p className="text-3xl font-black text-blue-600">
              R$ {cartTotal.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Senha / Número do Pedido
            </label>
            <input 
              type="number"
              value={ticketNumber === '' ? '' : ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value === '' ? '' : parseInt(e.target.value))}
              disabled={isProcessing || loadingTicket}
              className="w-full text-center text-2xl font-bold p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
              placeholder="Ex: 123"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Forma de Pagamento
            </label>
            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const isSelected = selectedMethod === method.id;
                
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    disabled={isProcessing}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 bg-white'
                    }`}
                  >
                    <div className={`p-3 rounded-full mb-2 ${method.bg} ${method.color}`}>
                      <Icon size={24} />
                    </div>
                    <span className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                      {method.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleConfirm}
            disabled={!selectedMethod || isProcessing || ticketNumber === ''}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all duration-300 ${
              !selectedMethod || isProcessing || ticketNumber === ''
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:-translate-y-1 active:scale-[0.98]'
            }`}
          >
            {isProcessing ? 'Processando...' : 'Confirmar e Emitir'}
            {!isProcessing && <ArrowRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
