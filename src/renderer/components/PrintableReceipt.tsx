import React from 'react';
import { createPortal } from 'react-dom';

interface PrintableReceiptProps {
  orderData: {
    ticketNumber: number | string;
    paymentMethod: string;
    items: Array<{
      name: string;
      quantity: number;
      totalPrice: number;
      addons?: Array<{ name: string; quantity: number; price: number }>;
    }>;
    cartTotal: number;
  };
  settings?: {
    company_name?: string;
    company_document?: string;
  };
}

export default function PrintableReceipt({ orderData, settings }: PrintableReceiptProps) {
  if (!orderData) return null;

  return createPortal(
    <div className="print-wrapper">
      <div className="print-receipt font-mono text-black text-sm bg-white">
        {/* Header (Customer Only) */}
        <div className="print-hide-kitchen text-center mb-4 pb-2 border-b border-black border-dashed">
          <h1 className="font-bold text-lg mb-1">{settings?.company_name || 'PDV FÁCIL'}</h1>
          {settings?.company_document ? <p className="text-sm font-semibold mb-1">CNPJ: {settings.company_document}</p> : null}
          <p className="text-xs">Documento Auxiliar de Venda</p>
          <p className="text-xs mb-2">NÃO É DOCUMENTO FISCAL</p>
          <p className="text-xs">{new Date().toLocaleString('pt-BR')}</p>
        </div>

        {/* Ticket Number (Both) */}
        <div className="text-center mb-4 pb-4 border-b border-black border-dashed ticket-container">
          <h2 className="text-lg font-bold senha-label">SENHA DE ATENDIMENTO</h2>
          <p className="text-5xl font-black my-2 ticket-number">
            <span className="kitchen-only-inline mr-1">Senha</span>
            {orderData.ticketNumber}
          </p>
        </div>

        {/* Items (Both) */}
        <div className="mb-4">
          <h3 className="font-bold border-b border-black pb-1 mb-2 items-label">ITENS DO PEDIDO</h3>
          {orderData.items.map((item, index) => (
            <div key={index} className="mb-3 item-row pl-2">
              <div className="flex justify-between font-black uppercase items-start gap-2">
                <span className="flex-1 min-w-0 break-words">{item.quantity}x {item.name}</span>
                <span className="print-hide-kitchen whitespace-nowrap flex-shrink-0 price-tag text-right">
                  R$ {item.totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              {item.addons && item.addons.length > 0 && (
                <div className="pl-4 mt-1 text-xs font-bold">
                  {item.addons.map((addon, idx) => (
                    <div key={idx} className="flex justify-between text-black addon-item items-start gap-2">
                      <span className="flex-1 min-w-0 break-words">+ {addon.quantity > 1 ? `${addon.quantity}x ` : ''}{addon.name}</span>
                      <span className="print-hide-kitchen whitespace-nowrap flex-shrink-0 price-tag text-right">
                        {addon.price > 0 ? `R$ ${(addon.price * addon.quantity).toFixed(2).replace('.', ',')}` : ''}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer (Customer Only) */}
        <div className="print-hide-kitchen border-t border-black border-dashed pt-4">
          <div className="flex justify-between font-bold text-lg mb-2">
            <span>TOTAL</span>
            <span>R$ {orderData.cartTotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>FORMA DE PAGAMENTO</span>
            <span>{orderData.paymentMethod}</span>
          </div>
          <div className="text-center text-xs mt-6 pb-8">
            <p>Obrigado e volte sempre!</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
