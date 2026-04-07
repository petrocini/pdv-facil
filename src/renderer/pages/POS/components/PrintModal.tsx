import React, { useEffect, useState } from 'react';
import { CheckCircle2, Ticket, Printer, X } from 'lucide-react';
import PrintableReceipt from '../../../components/PrintableReceipt';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    ticketNumber: number;
    paymentMethod: string;
    items: any[];
    cartTotal: number;
  } | null;
}

export default function PrintModal({ isOpen, onClose, orderData }: PrintModalProps) {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchSettings() {
      if (isOpen) {
        try {
          // @ts-ignore
          const res = await window.api.settings.get();
          if (res.success) {
            setSettings(res.data);
          }
        } catch (error) {
          console.error('Failed to fetch settings:', error);
        }
      }
    }
    fetchSettings();
  }, [isOpen]);

  if (!isOpen || !orderData) return null;

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

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm print:hidden">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300">
          
          <div className="bg-green-500 p-8 flex flex-col items-center justify-center text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-green-100 hover:text-white rounded-full bg-green-600/50 hover:bg-green-600 transition"
            >
              <X size={20} />
            </button>
            <div className="bg-white rounded-full p-2 mb-4 shadow-lg">
              <CheckCircle2 size={48} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-black mb-1">Pedido Finalizado!</h2>
            <p className="text-green-100 font-medium">O que deseja fazer agora?</p>
          </div>

          <div className="p-6">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 mb-6 flex flex-col items-center">
              <div className="flex items-center gap-2 text-gray-500 mb-2 font-semibold">
                <Ticket size={18} />
                <span>Senha do Pedido</span>
              </div>
              <span className="text-5xl font-black text-gray-900 tracking-tighter">
                {orderData.ticketNumber}
              </span>
              <span className="text-sm font-bold text-gray-500 mt-3 px-3 py-1 bg-gray-200 rounded-full">
                {orderData.paymentMethod}
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handlePrint('cozinha')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold rounded-xl transition-colors"
              >
                <Printer size={18} />
                Imprimir para Cozinha
              </button>
              <button
                onClick={() => handlePrint('cliente')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold rounded-xl transition-colors"
              >
                <Printer size={18} />
                Imprimir para Cliente
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={onClose}
                className="w-full py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-xl transition-colors"
              >
                Atender Novo Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      <PrintableReceipt orderData={orderData} settings={settings} />
    </>
  );
}
