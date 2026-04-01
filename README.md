# PDV Fácil 🛒

**PDV Fácil** é um sistema de Ponto de Venda (PDV) desktop moderno, ágil e focado em operações offline (*offline-first*). Desenvolvido para atender comércios de balcão e ambientes de alto volume de vendas, o sistema garante total independência de internet para a operação principal, operando 100% localmente.

> [!NOTE]
> Este é um projeto desenvolvido para **uso pessoal**.

---

## ✨ Principais Funcionalidades

- **🚀 Operação Offline-First**: O banco de dados SQLite local garante que você nunca pare de vender por falta de sinal.
- **📸 Catálogo Otimizado**: Gestão de produtos, categorias e grupos de adicionais com suporte a imagens comprimidas automaticamente.
- **🗂️ Gestão de Pedidos**: Fluxo completo de emissão de pedidos, cálculo automático de totais (base + adicionais) e controle de senha de atendimento.
- **📈 Dashboard em Tempo Real**: Métricas de faturamento diário, itens mais vendidos e ticket médio calculados instantaneamente.
- **🖨️ Impressão Térmica**: Suporte a impressoras térmicas de 80mm com layouts específicos para Cozinha e Cliente.
- **🛠️ Configurações Flexíveis**: Personalize os dados da sua empresa e o diretório de armazenamento de imagens.

---

## 🛠️ Stack Tecnológico

- **Desktop Framework**: Electron 29.x
- **Frontend**: React.js 18.x + Vite
- **Banco de Dados**: SQLite (Modo WAL para alta resiliência)
- **ORM**: Prisma Client
- **Estilização**: TailwindCSS
- **Gerenciamento de Estado**: Zustand
- **Processamento de Imagens**: Sharp (Conversão automática para WebP)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (Recomendado: v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório ou baixe os arquivos.
2. No diretório raiz do projeto, instale as dependências:
   ```bash
   npm install
   ```

### Preparação do Banco de Dados

O sistema utiliza o Prisma ORM. Você precisa gerar o cliente e garantir que o banco de dados inicial esteja pronto:
```bash
npx prisma generate
```

### Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento:
```bash
npm run dev
```

---

## 📦 Build e Distribuição

Se desejar gerar o executável final da aplicação:

1. Gere o build de produção:
   ```bash
   npm run build
   ```
2. Empacote para o sistema operacional desejado (Windows, Linux, macOS):
   ```bash
   npm run dist
   ```
O executável será gerado na pasta `release`.

---

## 🛡️ Segurança e Resiliência

- **Isolamento de Contexto**: O projeto segue as melhores práticas de segurança do Electron, com `contextIsolation: true` e `nodeIntegration: false`.
- **Integridade Financeira**: Todos os cálculos de preços são revalidados pelo backend (Main Process) antes da persistência, garantindo que valores manipulados no frontend não afetem o faturamento.
- **Logging Persistente**: Logs detalhados de operações sensíveis são gravados localmente para facilitar diagnósticos.

---

## 📄 Licença

Este projeto é para uso pessoal. Os direitos sobre o código e design pertencem ao autor.
