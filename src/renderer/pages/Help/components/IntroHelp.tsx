import React from 'react';
import { Info } from 'lucide-react';

export default function IntroHelp() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Info className="text-blue-600" /> Introdução ao PDV Fácil
        </h2>
        <p className="text-gray-500 mt-2">Visão geral sobre o funcionamento do seu Ponto de Venda Offline.</p>
      </div>

      <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
        <p>
          Bem-vindo ao <strong>PDV Fácil</strong>, um sistema de frente de caixa projetado para ser rápido, confiável e funcionar de forma 100% offline. Ele foi criado especificamente para cenários de alto volume, como lanchonetes, restaurantes fast-food e comércio ágil.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Como o sistema funciona?</h3>
        <p>
          O aplicativo opera inteiramente na sua máquina local, o que significa que:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Você não precisa de internet:</strong> As vendas nunca vão parar por quedas de conexão.</li>
          <li><strong>Privacidade total:</strong> Todos os seus dados, cadastros e faturamentos ficam salvos apenas neste computador.</li>
          <li><strong>Desempenho máximo:</strong> O tempo de resposta ao adicionar itens ao carrinho ou processar um pagamento é instantâneo.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Abas e Funcionalidades</h3>
        <p>
          O sistema é dividido nas seguintes áreas principais pelo menu lateral:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dashboard:</strong> Resumo do dia com total faturado, itens mais vendidos e ticket médio.</li>
          <li><strong>Frente de Caixa:</strong> A tela principal onde você tira os pedidos e cobra os clientes.</li>
          <li><strong>Histórico de Pedidos:</strong> Local para consultar, reimprimir ou cancelar vendas anteriores.</li>
          <li><strong>Catálogo:</strong> Onde você cadastra Categorias, Produtos e Adicionais do seu negócio.</li>
          <li><strong>Configurações:</strong> Onde você altera o nome do negócio, seleciona a pasta de imagens e ajusta outros parâmetros do sistema.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-6">
          <p className="m-0 text-sm text-blue-800">
            <strong>Dica:</strong> Explore as outras abas deste menu de ajuda para ver guias passo-a-passo e dicas específicas para cada parte do sistema. Em telas futuras, você notará a facilidade com a qual novas imagens de suporte podem ser adicionadas nestas caixas.
          </p>
        </div>
      </div>
    </div>
  );
}
