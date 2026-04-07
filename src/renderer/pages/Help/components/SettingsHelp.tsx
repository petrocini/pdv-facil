import React from 'react';
import { Settings } from 'lucide-react';

export default function SettingsHelp() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="text-blue-600" /> Configurações Gerais
        </h2>
        <p className="text-gray-500 mt-2">Parâmetros essenciais do sistema da empresa e impressões.</p>
      </div>

      <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mt-2">Dados da Empresa</h3>
        <p>
          Esses dados servem para embasar não apenas a exibição interna no sistema, mas **também aparecer no topo do comprovante 80mm que vai impresso para todos os clientes**.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Nome e CNPJ:</strong> Insira os detalhes verdadeiros.</li>
          <li><strong>Local de Imagens:</strong> Por padrão, as imagens ficam num cofre técnico que o próprio banco escolhe (UserData). Se você lida ativamente mantendo as fotos em outra parte, esta configuração servirá aos técnicos de suporte para repontar a base. Geralmente isto não deve ser tocado se o aplicativo estiver operando as submissões normalmente.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Como definir a Impressora Padrão</h3>
        <p>
          O sistema confia nas impressoras cadastradas no Próprio Windows, Linux ou Mac:
        </p>

        <div className="bg-gray-100 p-4 rounded-md border border-gray-200 mt-2 shadow-sm">
          <ol className="list-decimal pl-5 m-0 space-y-2 text-sm text-gray-700">
            <li>Abra o "Dispositivos e Impressoras" no seu sistema operacional.</li>
            <li>Certifique-se de que sua impressora térmica genérica (Thermal Printer 80mm ou 58mm) esteja ali.</li>
            <li>Certifique-se que o driver instalado funcione com uma "Página de Teste" crua do Windows primeiramente.</li>
            <li>Uma vez garantida a sanidade no Windows/OS, **volte ao PDV Fácil**, navegue para Configurações. No Select/Dropdown de impressoras, selecione esse equipamento! Ao predefinir e "Salvar", quando o botão "Cobrar" for acionado logo a seguir ao PDV, já emitirá o papel direto pro balcão sem abrir janela irritante de "Confirmar Print"!</li>
          </ol>
        </div>

      </div>
    </div>
  );
}
