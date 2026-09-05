# PDV Fácil — Sistema de Especificações Técnicas e Arquitetura

Bem-vindo ao repositório central de especificações técnicas, arquitetura de software e diretrizes de engenharia do **PDV Fácil** (desktop point-of-sale offline-first).

Este conjunto de documentos segue o modelo de **Specification-Driven Development** praticado por equipes de alta performance em grandes empresas de tecnologia e é formatado para fornecer contexto inequívoco tanto para engenheiros humanos quanto para **agentes autônomos de IA**.

---

## 🗺️ Mapa de Navegação das Especificações

```
docs/
├── README.md                                  # Visão Executiva e Índice Mestre
├── 01-architecture/
│   ├── system-overview.md                     # Arquitetura Geral, Processos Electron e Protocolo IPC
│   ├── database-schema.md                     # Modelagem SQLite + Prisma, WAL, Migrações Runtime e Transações
│   └── hardware-and-printing.md               # Especificação de Impressão Térmica 80mm, Silent Print e CSS
├── 02-domains/
│   ├── catalog-spec.md                        # Domínio de Catálogo: Categorias, Produtos, Adicionais e Clonagem
│   ├── pos-and-orders-spec.md                 # Domínio de Vendas: PDV, Carrinho, Pricing Engine, Troco e Pedidos
│   ├── events-and-movements-spec.md           # Domínio de Eventos: Gestão Itinerante, Vínculo Retroativo e Caixa
│   └── analytics-and-dashboard-spec.md        # Domínio de Analytics: KPIs, Métricas Líquidas, Gráficos e Rankings
├── 03-operations/
│   ├── settings-and-storage-spec.md           # Configurações, Pipeline Sharp e Protocolo Privilegiado local://
│   └── release-and-update-spec.md             # SemVer, GitHub Actions CI/CD e Ciclo de Auto-Update
└── 04-ai-context/
    └── system-invariants-and-rules.md         # Invariantes Arquiteturais, Contratos de IPC e Regras para Agentes
```

---

## 📚 Sumário das Especificações

### [1. Arquitetura Fundamental (`01-architecture`)](./01-architecture/)
* **[system-overview.md](./01-architecture/system-overview.md)**: Paradigma offline-first, isolamento de contexto no Electron 29, arquitetura multi-processo (Main, Preload e Renderer), ciclo de vida IPC e DTOs de comunicação.
* **[database-schema.md](./01-architecture/database-schema.md)**: Esquema de dados em SQLite via Prisma ORM, garantias transacionais (`$transaction`), integridade financeira com tipos `Decimal`, modo WAL e mecanismo de migrações automáticas em runtime.
* **[hardware-and-printing.md](./01-architecture/hardware-and-printing.md)**: Arquitetura de integração com impressoras térmicas de 80mm, modo de impressão silenciosa via API de spooler do Electron (`printer:printSilent`) e layouts CSS para Cliente vs. Cozinha.

### [2. Domínios de Negócio (`02-domains`)](./02-domains/)
* **[catalog-spec.md](./02-domains/catalog-spec.md)**: Gestão de Categorias, Produtos, Grupos de Adicionais, regras de validação `min`/`max`, algoritmo de clonagem com resolução de sufixos sequenciais e interação Click-to-Edit.
* **[pos-and-orders-spec.md](./02-domains/pos-and-orders-spec.md)**: Máquina de estados do carrinho de compras, modal de adicionais com quantidades múltiplas (`+`/`-`), motor de precificação no backend (`PricingService`), controle de senhas diárias e fluxo de troco em dinheiro.
* **[events-and-movements-spec.md](./02-domains/events-and-movements-spec.md)**: Gestão de eventos itinerantes e praças municipais, algoritmo de verificação de sobreposição de datas, vínculo retroativo automático de pedidos e controle de entradas/saídas extraordinárias de caixa.
* **[analytics-and-dashboard-spec.md](./02-domains/analytics-and-dashboard-spec.md)**: Métricas consolidadas, cálculo de faturamento líquido real, agrupamento temporal adaptativo (hora vs. dia), comparativo de eventos e rankings de faturamento por município.

### [3. Operações e Infraestrutura (`03-operations`)](./03-operations/)
* **[settings-and-storage-spec.md](./03-operations/settings-and-storage-spec.md)**: Parâmetros de personalização do estabelecimento, pipeline de otimização de imagens (Sharp $\rightarrow$ WebP 800×800) e implementação segura do protocolo privilegiado `local://` com contenção de Path Traversal.
* **[release-and-update-spec.md](./03-operations/release-and-update-spec.md)**: Versionamento SemVer, Git Flow, automação de compilação via GitHub Actions (`release.yml`), geração de executáveis com `electron-builder` e mecânica de atualização automática via `electron-updater`.

### [4. Contexto para Agentes de IA (`04-ai-context`)](./04-ai-context/)
* **[system-invariants-and-rules.md](./04-ai-context/system-invariants-and-rules.md)**: Invariantes invioláveis de integridade financeira, regras de isolamento de segurança do Electron, contratos de canais IPC e diretrizes obrigatórias de codificação para execução autônoma de novas tarefas.

---

## ⚡ Guia Rápido de Desenvolvimento

```bash
# Instalação das dependências
npm install

# Geração dos clientes Prisma (local)
npx prisma generate

# Execução em ambiente de desenvolvimento (Vite + Electron)
npm run dev

# Build para produção
npm run build

# Empacotamento de distribuição (Windows / Linux)
npm run dist
```
