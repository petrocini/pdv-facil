import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function POSHelp() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <ShoppingCart className="text-blue-600" /> Frente de Caixa (POS)
        </h2>
        <p className="text-gray-500 mt-2">Aprenda a operar a tela de vendas de forma rápida e eficiente.</p>
      </div>

      <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mt-2">Navegando no Menu</h3>
        <p>
          A tela da Frente de Caixa é dividida em duas áreas fundamentais: à esquerda, ficam as categorias e os produtos. À direita, o "carrinho de compras" atual da pessoa. As categorias ajudam a filtrar rapidamente o que o cliente quer pedir.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Adicionando Itens e Adicionais</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Produtos Simples:</strong> Ao clicar num produto sem adicionais obrigatórios, ele vai instantaneamente para o carrinho na lateral.</li>
          <li><strong>Produtos Customizáveis:</strong> Se o produto possui adicionais (exemplo: "Borda Recheada" ou "Molhos"), uma janela em forma de modal aparecerá na tela permitindo que o cliente escolha as opções antes do envio.</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r mt-4">
          <p className="m-0 text-sm text-yellow-800">
            <strong>Nota Importante:</strong> Se um produto exige um número mínimo de escolhas num grupo de adicionais (ex: "Escolha pelo menos 1 molho"), o sistema não deixará fechar o modal até que a regra seja atendida.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Finalizando a Venda</h3>
        <p>
          Quando todos os itens estiverem no carrinho, clique no botão azul <strong>"Cobrar"</strong>.
        </p>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>Selecione a forma de pagamento (Dinheiro, PIX, Cartão de Crédito ou Débito).</li>
          <li>Uma senha sequencial (Número do Pedido) será gerada automaticamente. Se você já tem uma comanda física, pode alterar essa senha no campo acima antes de aprovar.</li>
          <li>Clique em "Confirmar Pagamento".</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Impressão Automática</h3>
        <p>
          Logo após a confirmação, o sistema abre a janela de impressão. Nela você tem duas opções de comprovantes de **80mm**:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cupom do Cliente:</strong> Imprime detalhes dos preços.</li>
          <li><strong>Cupom da Cozinha:</strong> Imprime em letras grandes para leitura de montagem lá na produção, ignorando todos os valores financeiros.</li>
        </ul>
      </div>
    </div>
  );
}
