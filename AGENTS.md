# AGENTS.md — PDV Fácil

## 1. Visão geral do projeto

- PDV desktop offline-first para comércio de balcão e food trucks itinerantes, construído com Electron + React.
- Cobre catálogo de produtos, frente de caixa com adicionais, impressão térmica 80mm, gestão de eventos/cidades, dashboard analítico e auto-update.

## 2. Stack técnica

| Camada                  | Tecnologia                                 | Versão mínima |
| ----------------------- | ------------------------------------------ | ------------- |
| Runtime                 | Electron                                   | 29            |
| Frontend                | React 18 + Vite 5 + TailwindCSS 3.4        | Node 20+      |
| Roteamento              | React Router DOM 7 (`HashRouter`)          | —             |
| Estado global           | Zustand 4                                  | —             |
| Formulários             | React Hook Form 7 + Zod 4                  | —             |
| Gráficos                | Recharts 3                                 | —             |
| Backend local           | Node.js (Main Process)                     | —             |
| ORM / Banco             | Prisma 5.10 + SQLite 3 (WAL mode)          | —             |
| Processamento de imagem | Sharp 0.34                                 | —             |
| Logging                 | electron-log 5                             | —             |
| Auto-update             | electron-updater 6                         | —             |
| Build/empacotamento     | electron-builder 24 (NSIS)                 | —             |
| CI                      | GitHub Actions (`windows-latest`, Node 20) | —             |

## 3. Estrutura de pastas

```
├── src/
│   ├── main/                    # Electron Main Process (backend local)
│   │   ├── index.ts             # Entry point: janela, IPC handlers, protocolo local://
│   │   ├── controllers/         # 11 controllers — validação IPC e ApiResponse<T>
│   │   ├── services/            # 11 services — regras de negócio puras + Prisma
│   │   ├── database/prisma.ts   # Bootstrap SQLite, WAL, migrações runtime
│   │   └── lib/logger.ts        # Instância electron-log
│   ├── preload/index.ts         # contextBridge — expõe window.api.<namespace>
│   └── renderer/                # React SPA (Renderer Process)
│       ├── App.tsx              # Rotas (HashRouter) e listener de auto-update
│       ├── main.tsx             # ReactDOM.createRoot
│       ├── index.css            # TailwindCSS + regras @media print (80mm)
│       ├── components/          # Layout, PrintableReceipt, ui/ (inputs reutilizáveis)
│       ├── pages/               # Catalog/, POS/, Orders/, Events/, Dashboard/, Settings/, Help/
│       ├── store/               # Zustand: cartStore, eventStore, confirmStore
│       └── types/electron.d.ts  # Tipagem global de window.api
├── prisma/
│   ├── schema.prisma            # Schema com 11 tabelas
│   ├── dev.db                   # Template SQLite copiado no primeiro boot
│   └── migrations/              # Migrações Prisma (dev)
├── docs/                        # Especificações técnicas (ver seção 8)
├── .github/workflows/release.yml # CI: build + publish no push de tag v*
├── build/icons/icon.ico         # Ícone do instalador
├── package.json                 # Scripts, dependências, config electron-builder
├── vite.config.ts               # Vite: saída em dist/renderer, alias @/ → src/renderer
├── tsconfig.json                # Renderer (ES2020, bundler, strict)
├── tsconfig.node.json           # Main + Preload (CommonJS, ES2022, strict)
├── tailwind.config.js           # Scan de ./src/renderer/**/*.{ts,tsx}
└── postcss.config.js            # Plugins: tailwindcss, autoprefixer
```

## 4. Comandos essenciais

| Ação                    | Comando                                                              |
| ----------------------- | -------------------------------------------------------------------- |
| Instalar dependências   | `npm install` (gera Prisma Client via `postinstall`)                 |
| Regenerar Prisma Client | `npx prisma generate`                                                |
| Dev (Vite + Electron)   | `npm run dev`                                                        |
| Build de produção       | `npm run build`                                                      |
| Empacotamento (NSIS)    | `npm run dist`                                                       |
| Lint / Formatter        | <TODO: não há ESLint/Prettier configurado — adicionar se necessário> |
| Testes                  | <TODO: não há framework de testes configurado>                       |

## 5. Convenções de código

- **Idioma do código**: Inglês (nomes de arquivos, funções, tabelas, variáveis).
- **Idioma da UI**: Português do Brasil (textos, toasts, labels, comprovantes).
- **Arquitetura backend**: Controller → Service → Prisma. Controllers nunca acessam o banco diretamente.
- **IPC**: Canais nomeados como `<domínio>:<ação>` (ex: `orders:create`). Todo controller retorna `ApiResponse<T>` (`{ success, data?, error? }`). Objetos Prisma passam por `JSON.parse(JSON.stringify(...))` antes de cruzar a ponte IPC.
- **Nova rota IPC** exige alterações em 5 lugares simultâneos — consultar checklist em `docs/04-ai-context/system-invariants-and-rules.md` §3.4.
- **Estilização**: TailwindCSS utilitário. Não criar CSS por componente; regras globais ficam em `src/renderer/index.css`.
- **Moeda**: Sempre usar máscara `R$ 0,00` via componente `CurrencyInput`.
- **Toasts**: Usar `sonner` (`toast.success()`, `toast.error()`).
- **TypeScript**: `strict: true` em ambos os tsconfigs. Path alias `@/` → `src/renderer/`.

## 6. Fluxo de trabalho (workflow)

1. **Entender** a tarefa e consultar a spec relevante em `/docs`.
2. **Planejar** — mudanças arquiteturais devem ser discutidas antes de implementadas.
3. **Implementar** seguindo as convenções da seção 5.
4. **Verificar** — compilar com `npm run build` para garantir que não há erros de tipagem.
5. **Commitar** seguindo o padrão da seção 7.
6. **Atualizar docs** se o commit alterou comportamento, contrato ou schema (ver seção 8).

## 7. Padrão de commits

Conventional Commits com scope opcional:

```
feat(pos): add discount percentage input
fix(orders): correct ticket number reset at midnight
docs: update specs after payment flow refactor
refactor(dashboard): extract chart aggregation logic
chore: bump electron-updater to 6.9
```

- Tipos: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `build`, `ci`, `perf`, `revert`.
- Breaking changes: usar `!` após o tipo/scope ou rodapé `BREAKING CHANGE:`.
- Commits pequenos e atômicos — um propósito por commit.

## 8. Documentação viva (`/docs`)

**Regra obrigatória**: sempre que um commit alterar comportamento, contrato IPC, schema de dados ou decisão de arquitetura, as specs em `/docs` devem ser atualizadas **ANTES** de considerar a tarefa concluída, em commit separado:

```
docs: update specs after <resumo da mudança>
```

Nunca misture a atualização de docs no mesmo commit da mudança de código.

**Referência rápida — qual doc consultar:**

| Situação                                         | Documento                                           |
| ------------------------------------------------ | --------------------------------------------------- |
| Arquitetura Electron, processos, IPC, segurança  | `docs/01-architecture/system-overview.md`           |
| Schema de banco, tabelas, migrações, transações  | `docs/01-architecture/database-schema.md`           |
| Impressão térmica 80mm, layouts, CSS print       | `docs/01-architecture/hardware-and-printing.md`     |
| Categorias, produtos, adicionais, clonagem       | `docs/02-domains/catalog-spec.md`                   |
| PDV, carrinho, pricing, pagamento, histórico     | `docs/02-domains/pos-and-orders-spec.md`            |
| Eventos, overlap, vínculo retroativo, caixa      | `docs/02-domains/events-and-movements-spec.md`      |
| Dashboard, KPIs, rankings, comparativos          | `docs/02-domains/analytics-and-dashboard-spec.md`   |
| Settings, imagens Sharp/WebP, protocolo local:// | `docs/03-operations/settings-and-storage-spec.md`   |
| SemVer, CI/CD, electron-builder, auto-update     | `docs/03-operations/release-and-update-spec.md`     |
| Invariantes invioláveis, regras para agentes     | `docs/04-ai-context/system-invariants-and-rules.md` |

## 9. Testes

- <TODO: não há framework de testes configurado (sem Jest, Vitest ou Playwright)>.
- **Cobertura obrigatória quando adicionado**: lógica de negócio em `src/main/services/`, especialmente `PricingService` e `OrdersService`.
- **Não exige teste**: componentes puramente visuais do Renderer.
- **Verificação mínima atual**: `npm run build` (compilação TypeScript strict + Vite).

## 10. Segurança e segredos

- `.env` está no `.gitignore` — nunca commitar. Conteúdo atual: apenas `DATABASE_URL="file:./dev.db"` (Prisma dev).
- <TODO: criar `.env.example` como referência>.
- `GH_TOKEN` para CI/CD é injetado via `secrets.GITHUB_TOKEN` no GitHub Actions — nunca hardcodar.
- Nunca logar dados financeiros sensíveis ou paths absolutos do sistema do usuário.
- Consultar proteções de segurança Electron em `docs/01-architecture/system-overview.md` §4.

## 11. Armadilhas conhecidas / decisões não óbvias

- **Preços são recalculados no backend**: o frontend calcula totais apenas para feedback visual; o `PricingService` busca preços reais do banco dentro da transação. Isso é intencional para prevenir fraudes.
- **Migrações runtime, não CLI**: novas colunas/tabelas devem ser adicionadas via SQL nativo em `src/main/database/prisma.ts` (`initializeDatabase()`), não apenas no schema.prisma, para que clientes existentes atualizem sem reinstalar.
- **`deleteAppDataOnUninstall: false`**: intencional — protege o banco SQLite e imagens ao desinstalar/atualizar. Nunca alterar para `true`.
- **`prisma/dev.db` é commitado**: serve como template de primeiro boot; copiado para `userData` na inicialização.
- **HashRouter, não BrowserRouter**: necessário para resolver paths em apps empacotadas pelo Electron no Windows/Linux.
- **`JSON.parse(JSON.stringify(...))`** na serialização IPC: resolve referências circulares e tipos `Decimal` do Prisma que o IPC do Electron não clona.

## 12. Quando pedir confirmação ao usuário

Pare e pergunte antes de:

- Alterar `prisma/schema.prisma` ou o mecanismo de migrações em `src/main/database/prisma.ts`.
- Remover/renomear arquivos existentes.
- Adicionar ou remover dependências de produção (`dependencies` no `package.json`).
- Modificar `package.json` > `build` (config do electron-builder).
- Alterar `.github/workflows/release.yml` ou qualquer config de CI/CD.
- Fazer `force-push` em qualquer branch.
- Modificar invariantes de segurança do Electron (`contextIsolation`, `nodeIntegration`, protocolo `local://`).

---

> **Este arquivo deve ser atualizado no mesmo commit sempre que a stack, estrutura de pastas ou workflow mudar.**
