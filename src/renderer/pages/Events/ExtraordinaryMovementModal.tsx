import React, { useState } from 'react';
import { X, ArrowUpCircle, ArrowDownCircle, Info, Landmark } from 'lucide-react';
import { toast } from 'sonner';
import CurrencyInput from '../../components/ui/CurrencyInput';

interface ExtraordinaryMovementModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string;
  onSuccess: () => void;
}

export default function ExtraordinaryMovementModal({ isOpen, onClose, eventId, onSuccess }: ExtraordinaryMovementModalProps) {
  const [type, setType] = useState<'entrada' | 'saida'>('entrada');
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) {
      toast.error('O valor deve ser maior que zero');
      return;
    }
    if (!description.trim()) {
      toast.error('A descrição é obrigatória');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await window.api.extraordinaryMovements.create({
        event_id: eventId,
        type,
        amount,
        description: description.trim(),
        payment_method: paymentMethod || undefined
      });

      if (response.success) {
        toast.success(`Movimentação de ${type} cadastrada com sucesso!`);
        // Reset state
        setAmount(0);
        setDescription('');
        setPaymentMethod('');
        setType('entrada');
        
        onSuccess();
        onClose();
      } else {
        toast.error(response.error || 'Erro ao cadastrar movimentação');
      }
    } catch (err: any) {
      toast.error(err.message || 'Erro inesperado');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-4 duration-300 border border-gray-100">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white flex items-center justify-between">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Landmark size={22} />
            Lançar Ajuste Extraordinário
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Tipo de Ajuste */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Tipo de Movimentação
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType('entrada')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold border transition-all ${
                  type === 'entrada'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm ring-1 ring-emerald-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <ArrowUpCircle size={18} className={type === 'entrada' ? 'text-emerald-600' : 'text-gray-400'} />
                Entrada (+)
              </button>
              <button
                type="button"
                onClick={() => setType('saida')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold border transition-all ${
                  type === 'saida'
                    ? 'bg-red-50 border-red-500 text-red-700 shadow-sm ring-1 ring-red-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <ArrowDownCircle size={18} className={type === 'saida' ? 'text-red-600' : 'text-gray-400'} />
                Saída (-)
              </button>
            </div>
          </div>

          {/* Valor */}
          <div>
            <label htmlFor="amount" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
              Valor
            </label>
            <CurrencyInput
              id="amount"
              value={amount}
              onValueChange={setAmount}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-bold text-lg text-gray-800"
              placeholder="R$ 0,00"
              required
            />
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="description" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Info size={14} /> Descrição / Motivo
            </label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm text-gray-700"
              placeholder="Ex: Diferença de caixa máquina de pagamentos"
              required
            />
          </div>

          {/* Forma de Pagamento */}
          <div>
            <label htmlFor="paymentMethod" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
              Forma de Pagamento (Opcional)
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white transition-all text-sm text-gray-700"
            >
              <option value="">Nenhuma / Reconciliação Geral</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="PIX">PIX</option>
              <option value="Crédito">Crédito</option>
              <option value="Débito">Débito</option>
            </select>
            <p className="text-[10px] text-gray-400 mt-1">
              Associe para corrigir faturamento de uma forma de pagamento específica.
            </p>
          </div>

          {/* Botões */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all disabled:opacity-50 text-sm"
            >
              {isSubmitting ? 'Salvando...' : 'Confirmar Lançamento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
