import React from 'react';
import { Package } from 'lucide-react';

export default function CatalogHelp() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Package className="text-blue-600" /> Montando seu Catálogo
        </h2>
        <p className="text-gray-500 mt-2">Como cadastrar categorias, produtos e adicionais obedecendo a árvore do banco.</p>
      </div>

      <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
        <p>
          A seção "Catálogo" é dividida estrategicamente para que você monte a estrutura de custos e apresentações sem gerar duplicações. Siga sempre o roteiro de cadastros abaixo:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Passo 1: Crie as Categorias</h3>
        <p>
          (Exemplo: "Bebidas", "Pizzas", "Acompanhamentos") <br />
          Antes de inserir produtos, crie as categorias na aba respectiva. Elas criarão aquelas "abas" clicáveis no momento do Ponto de Venda.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Passo 2: Crie os Adicionais (Se houver) </h3>
        <p>
          (Exemplo: Grupo "Escolha sua borda" -&gt; Adicionais "Catupiry", "Cheddar") <br />
          Para evitar que você digite os mesmos adicionais em 10 produtos diferentes, o mecanismo é centralizado:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Acesse a tela de <strong>Adicionais</strong>.</li>
          <li>Crie um "Grupo" nomeando o título que o cliente vê. Defina as regras (ex: mínimo de seleções X, máximo Y).</li>
          <li>Dentro da visualização do grupo que criou, aí sim introduza as opções e os preços (ex: Bacon R$5, Ouro R$100).</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Passo 3: Cadastre os Produtos Finais</h3>
        <p>
          Agora, na aba de Produtos, o processo fica fácil:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>Insira Nome, Preço Base, Imagem e descreva a comida/item.</li>
          <li>Relacione ele a uma Categoria criada no Passo 1.</li>
          <li><strong>Aba de Vinculação:</strong> Relacione os "Grupos de Adicionais" ao produto se ele suportar (ex. Hamburguer com grupo Molhos).</li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-4">
          <p className="m-0 text-sm text-blue-800">
            <strong>Dica de Imagens:</strong> O catálogo faz redimensionamento automático de fotos grandes pra não travar seu computador! Escolha imagens bonitas dos hambugueres ou bebidas, o sistema se encarrega de focar e comprimir garantindo a ultra-velocidade.
          </p>
        </div>
      </div>
    </div>
  );
}
