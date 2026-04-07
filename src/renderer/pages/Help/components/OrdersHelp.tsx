import React from 'react';
import { Layers } from 'lucide-react';

export default function OrdersHelp() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Layers className="text-blue-600" /> Histórico de Pedidos
        </h2>
        <p className="text-gray-500 mt-2">Maneiras de acompanhar o status e fazer estornos das vendas.</p>
      </div>

      <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
        <p>
          A aba de Histórico de Pedidos guarda a memória de todas as vendas processadas pelo sistema. Ela é crucial pra fechar caixa e resolver mal-entendidos.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Filtros e Buscas</h3>
        <p>
          No topo da tela de pedidos você encontra ferramentas poderosas:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Busca por Senha/Comanda:</strong> Digite o número da senha impressa e localize o pedido num segundo.</li>
          <li><strong>Filtro de Data:</strong> Escolha listar "Hoje", "Últimos 7 Dias", "Últimos 30 Dias" ou até um período "Personalizado" em datas do passado.</li>
          <li><strong>Filtro de Status:</strong> Oculte os pedidos estornados verificando apenas os "Aprovados", ou liste tudo.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Ações em um Pedido Existente</h3>
        <p>
          Quando você clica no ícone de "olho" na lateral de um cardá do histórico, você abrirá a visualização completa sobre quais itens aquela venda possui:
        </p>

        <div className="bg-gray-100 p-4 rounded-md border border-gray-200 my-4 shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="bg-white p-2 rounded shrink-0 border border-gray-300">
              <Layers className="text-gray-400 w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 m-0">Menu de Ações</h4>
              <p className="text-sm mt-1 mb-0">Além da visualização dos itens faturados, nesta modal existem dois botões vitais no cabeçalho:</p>
              <ul className="list-disc pl-5 m-0 mt-2 text-sm text-gray-600">
                <li><strong>Reimprimir (Impressora):</strong> Permite tirar 2ª via da conta, tanto do modelo pro Cliente quanto do ticket para a Cozinha.</li>
                <li><strong>Cancelar Pedido (Lixeira vermelha):</strong> Estorna a venda. O sistema impedirá exclusão definitiva; ele solicitará uma "Justificativa" do motivo do erro para que essa operação fique gravada fiscal/financeiramente. Um pedido cancelado não conta mais para o cálculo do Dashboard.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
