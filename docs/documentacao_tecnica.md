# Documentação Técnica — Criativa PDV Offline

## 1. Visão Geral

O Criativa PDV é um sistema de Ponto de Venda (PDV) desktop offline-first, projetado para ambientes de venda de alto volume. O sistema opera 100% localmente, sem dependência de internet, e oferece gestão completa de catálogo, emissão rápida de pedidos com suporte a adicionais customizáveis, e impressão de comprovantes térmicos.

---

## 2. Stack Tecnológico

| Camada | Tecnologia | Versão |
|---|---|---|
| Desktop Wrapper | Electron | 29.x |
| Frontend (Renderer) | React.js + TypeScript | 18.x |
| Build Tool | Vite | 5.x |
| Estilização | TailwindCSS | 3.4.x |
| Estado Global | Zustand | 4.5.x |
| Roteamento | React Router DOM (HashRouter) | 7.x |
| Ícones | Lucide React | 0.577.x |
| Notificações | Sonner | 2.x |
| ORM | Prisma Client | 5.10.x |
| Banco de Dados | SQLite (modo WAL) | Embutido |
| Processamento de Imagens | Sharp | 0.34.x |
| Logging | electron-log | 5.x |
| Linguagem do Código | TypeScript (Inglês) | 5.3.x |
| Linguagem da UI | Português (PT-BR) | — |

---

## 3. Arquitetura do Electron

### 3.1. Processos e Isolamento

O projeto segue estritamente o modelo de segurança do Electron:

- **Main Process** (`src/main/`): Contém toda a lógica de backend — controllers, services, acesso ao banco via Prisma, manipulação de arquivos e logging.
- **Preload** (`src/preload/index.ts`): Ponte IPC que expõe apenas funções tipadas via `contextBridge.exposeInMainWorld`. Nunca vaza `ipcRenderer` diretamente.
- **Renderer** (`src/renderer/`): Aplicação React pura. Acessa o backend exclusivamente via `window.api.*`. Não importa módulos Node.js.

```
contextIsolation: true
nodeIntegration: false
```

### 3.2. Padrão IPC

Toda comunicação segue o padrão de domínio:

```
Frontend:  window.api.orders.create(payload)
Preload:   orders: { create: (p) => ipcRenderer.invoke('orders:create', p) }
Main:      ipcMain.handle('orders:create', OrdersController.create)
```

### 3.3. Estrutura de Diretórios

```
src/
├── main/
│   ├── index.ts              # Entry point, IPC handlers, custom protocol
│   ├── controllers/          # Camada de entrada IPC (9 controllers)
│   ├── services/             # Lógica de negócio e acesso ao banco (8 services)
│   ├── database/
│   │   └── prisma.ts         # Singleton do PrismaClient + inicialização WAL
│   └── lib/
│       └── logger.ts         # Wrapper do electron-log
├── preload/
│   └── index.ts              # contextBridge com API tipada por domínio
└── renderer/
    ├── App.tsx               # Rotas (HashRouter)
    ├── components/           # Layout, PrintableReceipt, UI (ConfirmDialog)
    ├── pages/
    │   ├── POS/              # Tela de venda (POSPage, CartSidebar, Modais)
    │   ├── Orders/           # Histórico de pedidos (lista + detalhes)
    │   ├── Catalog/          # CRUDs de Categories, Products, Addons
    │   ├── Dashboard/        # Métricas do dia
    │   └── Settings/         # Configurações da empresa
    ├── store/                # Zustand (cartStore, confirmStore)
    └── types/                # electron.d.ts (tipagem do window.api)
```

---

## 4. Camada Controller / Service

O backend segue o princípio de responsabilidade única (SRP):

- **Controller**: Recebe o evento IPC, delega ao Service, trata erros e retorna `{ success, data?, error? }`.
- **Service**: Contém a lógica de negócio e acesso ao Prisma. Nunca conhece IPC.

| Domínio | Controller | Service |
|---|---|---|
| Categorias | `CategoryController` | `CategoryService` |
| Produtos | `ProductController` | `ProductService` |
| Grupos de Adicionais | `AddonGroupController` | `AddonGroupService` |
| Adicionais | `AddonController` | `AddonService` |
| Vínculo Produto↔Grupo | `ProductAddonGroupController` | `ProductAddonGroupService` |
| Pedidos | `OrdersController` | `OrdersService` |
| Precificação | — | `PricingService` |
| Dashboard | `DashboardController` | `DashboardService` |
| Imagens | `ImageController` | *(inline, migração pendente)* |
| Configurações | `SettingsController` | *(inline, migração pendente)* |

---

## 5. Banco de Dados (Prisma + SQLite)

### 5.1. Localização

O arquivo SQLite é armazenado em `app.getPath('userData')/pdv_database.sqlite`. Na primeira execução, o sistema copia o banco template (`prisma/dev.db`) para esta pasta.

### 5.2. Modo WAL

O `PRAGMA journal_mode = WAL` é ativado na inicialização para garantir resiliência contra quedas de energia e melhor performance de leitura/escrita concorrente.

### 5.3. Modelo de Dados

```
categories ──< products ──< product_addon_groups >── addon_groups ──< addons
                   │
                   └──< order_items ──< order_item_addons >── addons
                           │
                    orders ─┘

settings (tabela independente, 1 registro singleton)
```

**Tabelas**: `categories`, `products`, `addon_groups`, `addons`, `product_addon_groups`, `orders`, `order_items`, `order_item_addons`, `settings`.

### 5.4. Transações

Operações multi-tabela utilizam obrigatoriamente `prisma.$transaction`:
- Criação de pedido (`OrdersService.create`): `orders` + `order_items` + `order_item_addons` em uma transação.
- Vínculo de adicionais (`ProductAddonGroupService.saveLinks`): delete + create em transação.

### 5.5. Integridade Financeira (PricingService)

O `PricingService.calculateOrderTotal()` é executado dentro da `$transaction` do pedido. Ele busca `products.base_price` e `addons.price` diretamente do banco, ignorando qualquer valor enviado pelo frontend. O total salvo é sempre o recalculado pelo backend.

---

## 6. Fluxo de Emissão de Pedidos

1. O caixa navega para a tela PDV (`/pos`) e seleciona produtos do cardápio.
2. Produtos com adicionais abrem o `AddonSelectionModal`, que permite selecionar **quantidades** individuais de cada adicional via controles `+`/`-`, validando que a soma de quantidades não exceda `max_selections` do grupo.
3. Os itens são adicionados ao carrinho gerenciado pelo `cartStore` (Zustand), com cada adicional carregando seu `quantity`.
4. Ao clicar em "Finalizar Pedido", o `PaymentModal` abre e carrega a próxima senha de atendimento sugerida via IPC `orders:getNextTicketNumber`.
5. O caixa escolhe o método de pagamento e confirma.
6. O payload é enviado via `orders:create`. O `OrdersService` recalcula o total via `PricingService` dentro de uma `$transaction` e persiste o pedido.
7. O `PrintModal` é exibido com opções de impressão para Cozinha ou Cliente.
8. A impressão usa `window.print()` com CSS configurado para 80mm. Classes CSS dinâmicas (`print-kitchen` / `print-customer`) controlam quais seções são visíveis em cada tipo de comprovante.

---

## 7. Sistema de Imagens

- Upload de imagens via `ImageController` usando o `sharp` para redimensionar (max 800×800px) e converter para WebP (qualidade 80%).
- Imagens são salvas no diretório configurável (`settings.images_directory`) ou no fallback `userData/images/`.
- O frontend carrega imagens via protocolo customizado `local://filename.webp`, registrado como scheme privilegiado no Electron.

---

## 8. Logging e Observabilidade

Todas as mensagens do Main Process são gravadas em arquivos físicos via `electron-log`:

- **Path**: `app.getPath('userData')/logs/`
- **Rotação**: 5 MB por arquivo
- **Formato**: `[YYYY-MM-DD HH:mm:ss.ms] [level] message`
- **Pontos críticos logados**: inicialização do banco, criação/cancelamento de pedidos, erros de I/O de imagens, falhas de configurações.

---

## 9. Resposta Padronizada da API

Todos os controllers retornam um DTO padronizado:

```typescript
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
```

Objetos Prisma são serializados via `JSON.parse(JSON.stringify(...))` antes de cruzar a ponte IPC, evitando vazamento de metadados do ORM para o Renderer.

---

## 10. Padrões de Interação do Catálogo

### 10.1. Click-to-Edit (Edição por Clique na Linha)

As telas de listagem do Catálogo (`ProductList`, `CategoryList`, `AddonGroupList`) adotam o padrão **Click-to-Edit**: o usuário clica em qualquer parte da linha (ou card) para navegar diretamente para a tela de edição do registro. O ícone de lápis de edição foi removido de todas as listagens.

**Implementação:**

- O elemento `<tr>` recebe `onClick={() => navigate('/products/:id')}` com `cursor-pointer` e um feedback visual de hover (`hover:bg-blue-50/40`).
- O nome do registro aplica `group-hover:text-blue-700` para reforçar a ação.
- Botões de ação na coluna "Ações" (ex.: Excluir, Clonar) chamam `e.stopPropagation()` para evitar que o clique no botão dispare a navegação da linha.

```tsx
// Exemplo em ProductList.tsx
<tr onClick={() => navigate(`/products/${product.id}`)} className="cursor-pointer group">
  ...
  <button onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}>
    <Trash2 />
  </button>
</tr>
```

### 10.2. Clonagem de Produtos

#### Funcionalidade

O botão **Clonar** (`Copy2` icon, cor violeta) na listagem de Produtos cria uma cópia completa de um produto, incluindo:

- Categoria (`category_id`)
- Imagem (`image_path`)
- Todos os vínculos de Grupos de Adicionais (`product_addon_groups`) com seus `min_selections`, `max_selections` e `sort_order`

#### Convenção de Nomes

O algoritmo determina o próximo nome disponível seguindo:

1. Se o produto original não tem sufixo `(N)`, o nome base é o nome do produto.
2. Se já tem sufixo (é um clone existente), o nome base é extraído via regex: `/^(.*)\s\((\d+)\)$/`.
3. Busca todos os produtos com `name STARTSWITH baseName`.
4. Encontra o maior contador `N` existente (o produto original conta como 1).
5. O novo clone recebe `"${baseName} (N+1)"`.

**Exemplos:**

| Ação | Resultado |
|---|---|
| Clonar "X-Bacon" | "X-Bacon (2)" |
| Clonar "X-Bacon (2)" | "X-Bacon (3)" |
| Clonar "X-Bacon (3)" com (2) e (3) já existentes | "X-Bacon (4)" |

#### Fluxo IPC

```
Frontend: window.api.products.clone(productId)
Preload:  products: { clone: (id) => ipcRenderer.invoke('products:clone', id) }
Main:     ipcMain.handle('products:clone', ProductController.clone)
          └─> ProductService.clone(id)
              ├── prisma.products.findUnique (com product_addon_groups)
              ├── prisma.products.findMany (para calcular nome)
              ├── prisma.products.create (clone)
              └── ProductAddonGroupService.saveLinks (replica vínculos)
```

#### Arquivos Modificados

| Arquivo | Alteração |
|---|---|
| `ProductService.ts` | Método `clone()` adicionado |
| `ProductController.ts` | Handler `clone()` adicionado |
| `main/index.ts` | `ipcMain.handle('products:clone', ...)` registrado |
| `preload/index.ts` | `products.clone` exposto via `contextBridge` |
| `electron.d.ts` | Tipagem `clone` adicionada ao namespace `products` |
| `ProductList.tsx` | Botão Clonar + Click-to-Edit |


### 10.3. Quantidades Múltiplas por Adicional

#### Funcionalidade

O `AddonSelectionModal` permite que o operador selecione **quantidades** de cada adicional individualmente (ex.: "5x Chocolate + 2x Granulado"), em vez de apenas marcar/desmarcar checkboxes. Cada adicional exibe controles `+` / `-` inline.

#### Estrutura de Dados

O estado interno do modal armazena as seleções num mapa bidimensional:

```typescript
// selected[groupId][addonId] = quantity
const [selected, setSelected] = useState<Record<string, Record<string, number>>>();

// Exemplo em runtime:
{
  "grupo-coberturas-uuid": {
    "addon-chocolate-uuid": 5,
    "addon-granulado-uuid": 2
  }
}
```

Ao confirmar, o modal converte para o formato `CartAddon[]` esperado pelo `cartStore`:

```typescript
interface CartAddon {
  addonId: string;
  name: string;
  price: number;     // preço unitário do adicional
  quantity: number;  // quantidade selecionada
}
```

#### Regras de Validação

| Regra | Implementação |
|---|---|
| Limite máximo por grupo | `sum(quantities) <= max_selections`. O botão `+` é desabilitado quando o limite é atingido. |
| Mínimo obrigatório por grupo | `sum(quantities) >= min_selections`. O botão "Adicionar" permanece desabilitado até que todos os grupos obrigatórios sejam satisfeitos. |
| Decremento mínimo | Ao atingir `0`, a chave do adicional é removida do estado. |

#### Exibição em Tempo Real

- Cada grupo exibe um badge `X / max` mostrando o total selecionado vs. o limite.
- O preço do adicional exibe `+ R$ X,XX × N = R$ Y,YY` quando `N > 1`.
- O total geral (base + adicionais × quantidades × quantidade do item) é recalculado em tempo real no footer.

#### Fluxo Completo

```
AddonSelectionModal (increment/decrement por addon)
  ↓ onAddToCart(quantity, CartAddon[])
POSPage → cartStore.addItem({ addons: CartAddon[] })
  ↓ Ao finalizar
OrdersService.create → PricingService.calculateOrderTotal
  ↓ Recalcula preços do DB, usa addon.quantity para multiplicar
order_item_addons (quantity + charged_price persistidos)
```

#### Arquivos Modificados

| Arquivo | Alteração |
|---|---|
| `AddonSelectionModal.tsx` | Refatorado: `handleAddonToggle` substituído por `handleIncrement` / `handleDecrement`. Layout alterado de grid de checkboxes para lista com controles `+`/`-` inline. Badge `X / max` adicionado ao cabeçalho do grupo. |
