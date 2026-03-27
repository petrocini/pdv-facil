---
trigger: always_on
---

AI Context & Development Guidelines - PDV Offline Desktop

Este documento serve como a Fonte da Verdade (Source of Truth) para o desenvolvimento deste projeto. Qualquer código gerado pela IA deve estritamente seguir as regras e padrões arquiteturais definidos abaixo.

1. Visão Geral do Projeto

O que é: Um sistema de Ponto de Venda (PDV) desktop offline-first.

Stack Principal: Electron, React.js (Vite), TailwindCSS, Zustand, Node.js (Main Process), Prisma ORM, SQLite.

Idioma do Código: Todo o código-fonte (variáveis, funções, classes, tabelas de banco, commits) deve ser escrito em Inglês.

Idioma da Interface (UI): Todos os textos visíveis ao usuário final devem ser em Português (PT-BR).

2. Princípios de Engenharia de Software

O código gerado deve sempre respeitar os princípios SOLID e Clean Code:

Single Responsibility Principle (SRP): Funções e classes devem ter apenas um motivo para mudar. Separe a lógica de acesso ao banco (Repository), lógica de negócio (Service) e comunicação IPC (Controller/Handler).

Evitar Acoplamento (Dependency Inversion): O frontend não deve saber como os dados são buscados. Ele apenas chama window.api.getProducts() e confia que o preload retornará os dados.

DRY (Don't Repeat Yourself): Reutilize componentes React (ex: botões, modais) e funções utilitárias.

Fail Fast & Tratamento de Erros: Sempre trate promessas rejeitadas e erros de IPC. Retorne objetos padronizados de erro para o frontend: { success: false, error: "Mensagem" }.

3. Padrões Arquiteturais do Electron (CRÍTICO)

3.1. Segurança e Isolamento

NUNCA ative nodeIntegration: true no BrowserWindow.

SEMPRE mantenha contextIsolation: true.

O processo de renderização (React) NUNCA deve importar módulos nativos do Node (ex: fs, path, sqlite3). Toda comunicação deve passar obrigatoriamente pelo preload.js usando ipcRenderer.invoke e ipcMain.handle.

3.2. Estrutura IPC (Inter-Process Communication)

Mantenha os handlers do Main Process organizados por domínio.

Exemplo de Padrão IPC:

Frontend: const products = await window.api.products.getAll()

Preload: products: { getAll: () => ipcRenderer.invoke('products:getAll') }

Main: ipcMain.handle('products:getAll', productsController.getAll)

3.3. Armazenamento de Dados e Mídia

Regra de Ouro: O banco de dados SQLite e a pasta de imagens DEVEM ser salvos no diretório userData do sistema operacional, acessado via app.getPath(,z'userData'). NUNCA salve dados no diretório de instalação do app.

4. Padrões de Frontend (React)

Componentização: Utilize Functional Components com Hooks.

Estilização: Utilize TailwindCSS. Evite arquivos .css isolados, a menos que seja estritamente necessário para animações complexas.

Gerenciamento de Estado: Utilize Zustand para o carrinho de compras (cartStore) e estados globais.

Nomenclatura:

Componentes: PascalCase (ex: ProductCard.jsx)

Funções e variáveis: camelCase (ex: handleAddToCart)

Constantes globais: UPPER_SNAKE_CASE (ex: MAX_DISCOUNT_PERCENTAGE)

5. Padrões de Backend e Banco de Dados (Prisma/SQLite)

Nomenclatura do Banco: Tabelas e colunas em snake_case (ex: order_items, ticket_number).

Utilize o Prisma Client instanciado como um Singleton para evitar memory leaks.

Transações: Toda operação que envolver a criação de um Pedido (Order) e seus itens/adicionais deve OBRIGATORIAMENTE utilizar $transaction do Prisma para garantir atomicidade.

Ative o modo WAL do SQLite para performance de leitura/escrita.

6. Padrões de Versionamento (Git)

O projeto adota o padrão Conventional Commits. Mensagens de commit DEVEM seguir o formato:
tipo(escopo opcional): descrição no imperativo

Tipos permitidos:

feat: Uma nova funcionalidade (ex: feat(pdv): add addon selection modal)

fix: Correção de um bug (ex: fix(db): resolve write permission on Windows)

refactor: Refatoração de código que não adiciona feature nem corrige bug.

chore: Atualizações de build, pacotes, ou tarefas menores.

docs: Atualização de documentação.

style: Formatação, ponto e vírgula, etc (sem impacto no código).

7. Instruções Finais para a IA

Sempre que for solicitado para escrever ou alterar código neste projeto:

Revise mentalmente se a solução viola o isolamento de contexto do Electron.

Certifique-se de que caminhos de arquivos estão usando path.join de forma multiplataforma.

Se gerar código de React, inclua classes do Tailwind apropriadas para uma UI moderna e limpa.

Comente blocos lógicos complexos ou regras de negócio em Inglês.