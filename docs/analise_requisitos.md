# Análise de Requisitos — Criativa PDV Offline

## 1. Visão Geral do Produto

O Criativa PDV é um aplicativo de Ponto de Venda (PDV) desktop offline-first, desenvolvido com Electron + React + SQLite. O objetivo é garantir agilidade e resiliência no atendimento de alto volume, sem dependência de internet, oferecendo gestão completa de catálogo customizável e controle eficiente do fluxo de pedidos e impressão térmica.

---

## 2. Stack Tecnológico Definido

| Camada | Escolha | Justificativa |
|---|---|---|
| Desktop Wrapper | **Electron** | Ecossistema Node.js completo para backend local |
| Frontend | **React.js (Vite)** | Interface fluida e componentizada |
| Estilização | **TailwindCSS** | UI moderna sem CSS isolado |
| Estado | **Zustand** | Gerenciamento leve do carrinho e modais |
| Banco de Dados | **SQLite (Prisma ORM)** | Embutido, transacional, sem servidor |
| Imagens | **Sharp** | Otimização local (WebP, 800px max) |
| Logging | **electron-log** | Logs persistentes em arquivo no `userData` |

---

## 3. Requisitos Funcionais (RF)

### 3.1. Módulo: Dashboard — ✅ Implementado

| ID | Requisito | Status |
|---|---|---|
| RF-01 | Exibir faturamento total do dia | ✅ |
| RF-02 | Listar os 5 itens mais vendidos do dia | ✅ |
| RF-03 | Exibir ticket médio do dia | ✅ |
| RF-04 | Métricas calculadas localmente via SQLite em tempo real | ✅ |

### 3.2. Módulo: Emissão de Pedidos — ✅ Implementado

| ID | Requisito | Status |
|---|---|---|
| RF-05 | Abertura ágil de pedido com listagem de categorias e produtos | ✅ |
| RF-06 | Senha de atendimento (ticket_number) sequencial por dia, customizável | ✅ |
| RF-07 | Leitura dos Grupos de Adicionais vinculados ao produto, com `sort_order` | ✅ |
| RF-08 | Validação de `min_selections` / `max_selections` por grupo | ✅ (frontend) |
| RF-08.2 | **Quantidades múltiplas por adicional**: controles `+`/`-` por item, com soma validada contra `max_selections` | ✅ |
| RF-09 | Cálculo em tempo real do total (base + adicionais) | ✅ |
| RF-09.1 | **Total recalculado pelo backend** com preços do DB (PricingService) | ✅ |
| RF-10 | Seleção de método de pagamento (Dinheiro, Crédito, Débito, PIX) | ✅ |
| RF-10.1 | Senha de atendimento editável na tela de pagamento | ✅ |
| RF-10.2 | Impressão de comprovante 80mm (layout Cozinha / Cliente) | ✅ |

### 3.3. Módulo: Consulta de Pedidos — ✅ Implementado

| ID | Requisito | Status |
|---|---|---|
| RF-11 | Lista de pedidos ordenada por mais recentes | ✅ |
| RF-12 | Filtros por data (Hoje / Todos / Personalizado), status e senha | ✅ |
| RF-13 | Visualização detalhada de pedido com adicionais | ✅ |
| RF-14 | Cancelamento de pedido com justificativa obrigatória | ✅ |
| RF-14.1 | Reimpressão de pedido a partir do histórico (Cozinha / Cliente) | ✅ |

### 3.4. Módulo: Catálogo — ✅ Implementado

| ID | Requisito | Status |
|---|---|---|
| RF-15 | CRUD de Categorias (nome, descrição, imagem) | ✅ |
| RF-16 | CRUD de Grupos de Adicionais e Adicionais individuais (nome, imagem, preço) | ✅ |
| RF-17 | CRUD de Produtos (nome, descrição, preço base, imagem, categoria) | ✅ |
| RF-18 | Vínculo N:N Produto ↔ Grupo de Adicionais com min/max/sort_order | ✅ |
| RF-19.1 | **Interação Click-to-Edit**: clique na linha (tabela) abre edição diretamente, sem ícone de lápis | ✅ |
| RF-22 | **Clonagem de Produto**: copia nome (com contador), categoria, imagem e vínculos de adicionais | ✅ |

### 3.5. Módulo: Configurações — ✅ Implementado

| ID | Requisito | Status |
|---|---|---|
| RF-19 | Impressão via diálogo nativo do SO (`window.print()`) | ✅ |
| RF-20 | Senha de atendimento reinicia diariamente (automático) | ✅ |
| RF-21 | Configurações da empresa (nome, CNPJ, logo, diretório de imagens) | ✅ |

### 3.6. Requisitos Pendentes (Backlog)

| ID | Requisito | Status |
|---|---|---|
| RF-21.1 | Backup/Exportação do banco SQLite para pen drive | 🔲 Pendente |
| RF-21.2 | Importação/Restauração do banco SQLite | 🔲 Pendente |
| RF-08.1 | Validação de `min/max_selections` **no backend** (OrdersService) | 🔲 Pendente |

---

## 4. Modelo de Dados

O banco SQLite utiliza Prisma ORM com as seguintes tabelas (nomenclatura `snake_case`):

| Tabela | Chave Primária | Relacionamentos |
|---|---|---|
| `categories` | UUID | `1 → N products` |
| `products` | UUID | `N → 1 categories`, `1 → N product_addon_groups`, `1 → N order_items` |
| `addon_groups` | UUID | `1 → N addons`, `1 → N product_addon_groups` |
| `addons` | UUID | `N → 1 addon_groups`, `1 → N order_item_addons` |
| `product_addon_groups` | UUID | Pivô: `product_id` + `addon_group_id` + `min/max_selections` + `sort_order` |
| `orders` | UUID | `1 → N order_items` |
| `order_items` | UUID | `N → 1 orders`, `N → 1 products`, `1 → N order_item_addons` |
| `order_item_addons` | UUID | `N → 1 order_items`, `N → 1 addons` |
| `settings` | UUID | Singleton (1 registro) |

**Campos financeiros** (`base_price`, `price`, `total_amount`, `unit_price`, `charged_price`): tipo `Decimal` no Prisma, garantindo precisão monetária.

---

## 5. Requisitos Não Funcionais (RNF)

| ID | Requisito | Implementação |
|---|---|---|
| RNF-01 | 100% offline, sem chamadas a APIs externas | ✅ Nenhuma dependência de rede |
| RNF-02 | Carregamento de catálogo < 1s (1000+ produtos) | ✅ SQLite local + queries otimizadas |
| RNF-03 | Imagens otimizadas localmente (WebP, max 800×800px) | ✅ Sharp no upload |
| RNF-04 | SQLite em modo WAL para resiliência contra quedas de energia | ✅ `PRAGMA journal_mode = WAL` na inicialização |
| RNF-05 | Logs persistentes em arquivo para diagnóstico em produção | ✅ electron-log em `userData/logs/` |
| RNF-06 | Integridade financeira: total calculado pelo backend | ✅ PricingService dentro de `$transaction` |
| RNF-07 | Segurança IPC: `contextIsolation: true`, `nodeIntegration: false` | ✅ |

---

## 6. Fluxo de Interação do Usuário — Catálogo

### 6.1. Padrão Click-to-Edit

O padrão de interação nas listagens do catálogo (Produtos, Categorias, Grupos de Adicionais) foi revisado para eliminar o ícone de lápis e tornar a edição mais intuitiva:

| Ação do Usuário | Comportamento do Sistema |
|---|---|
| Clica em qualquer célula da linha | Navega para a tela de edição do registro |
| Hover sobre a linha | Destaque visual (fundo azul claro, nome em azul) |
| Clica no botão Excluir (🗑) | Abre diálogo de confirmação; **não** navega para edição |
| Clica no botão Clonar (🗐) — apenas Produtos | Abre diálogo de confirmação de clonagem |

### 6.2. Fluxo de Clonagem de Produto

1. O usuário clica em **Clonar** (ícone `Copy2`, violeta) na linha do produto desejado.
2. Um diálogo de confirmação exibe o nome do produto e avisa que categoria, imagem e adicionais serão copiados.
3. Ao confirmar, o sistema chama `window.api.products.clone(id)`.
4. O backend determina o nome do clone usando a convenção de contadores:
   - "Produto A" → "Produto A (2)" → "Produto A (3)" ...
5. O produto clonado é inserido com os vínculos de grupos de adicionais replicados.
6. Uma notificação de sucesso (`toast`) exibe o nome do novo produto.
7. A lista é recarregada automaticamente.

### 6.3. Fluxo de Seleção de Adicionais com Quantidades

1. O operador clica em um produto que possui Grupos de Adicionais vinculados.
2. O `AddonSelectionModal` abre, exibindo cada grupo com seus adicionais.
3. Cada adicional possui controles `+` / `-` para incrementar/decrementar a quantidade.
4. O cabeçalho do grupo exibe um badge `X / max` com a contagem em tempo real.
5. O botão `+` é desabilitado quando a soma de quantidades do grupo atinge o `max_selections`.
6. O botão principal "Adicionar" permanece desabilitado até que todos os grupos obrigatórios satisfaçam `min_selections`.
7. O preço individual exibe `+ R$ X,XX × N = R$ Y,YY` quando a quantidade é maior que 1.
8. Ao confirmar, os adicionais são salvos com sua quantidade no carrinho.
9. Na finalização, o `PricingService` recalcula todos os preços usando o banco de dados, multiplicando `charged_price × quantity` por adicional.