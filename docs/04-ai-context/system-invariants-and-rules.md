# Contexto de IA: Invariantes Arquiteturais e Diretrizes de Codificação

**Status**: Aprovado  
**Versão**: 2.0.0  
**Contexto**: Regras Invioláveis, Contratos IPC e Padrões de Implementação para Engenheiros e Agentes Autônomos de IA  

---

## 1. Finalidade deste Documento

Este arquivo atua como o **guia de contexto primordial** para agentes autônomos de IA (como Antigravity, Claude, Cursor) e novos desenvolvedores que venham a implementar novas tasks neste repositório. O desrespeito a qualquer uma das invariantes listadas abaixo constitui falha crítica de integridade ou vulnerabilidade de segurança.

---

## 2. Invariantes Arquiteturais Invioláveis

### 2.1. Integridade Financeira Server-Side
> [!CAUTION]
> **NUNCA confie em valores monetários, subtotais ou totais enviados pelo Renderer.**
- O frontend (`cartStore`) calcula totais apenas para feedback visual imediato ao operador.
- No momento da persistência (`OrdersService.create`), o backend no Main Process **ignora sumariamente** o total enviado no payload e aciona o `PricingService.calculateOrderTotal`.
- O `PricingService` busca os preços oficiais direto do SQLite (`products.base_price` e `addons.price`) e multiplica pelas quantidades dentro da transação atômica (`prisma.$transaction`).
- Qualquer nova funcionalidade de desconto, acréscimo ou cupom DEVE ser obrigatoriamente recalculada no backend.

### 2.2. Isolamento de Contexto no Electron
> [!IMPORTANT]
> **NUNCA importe módulos nativos do Node.js (`fs`, `path`, `child_process`, `electron`) dentro de `src/renderer/`.**
- O Renderer é uma aplicação React pura. A comunicação com o SO ou com o banco ocorre unicamente via `window.api.<domain>.<action>()`.
- A ponte `src/preload/index.ts` NUNCA deve expor o `ipcRenderer` genérico ou permitir invocações arbitrárias de canais não tipados.

### 2.3. Imutabilidade e Auditoria de Pedidos
> [!WARNING]
> **NUNCA execute `prisma.orders.delete()` na base de produção.**
- Pedidos cancelados recebem `status = 'Cancelado'` e exigem uma justificativa não-vazia (`cancel_reason`).
- Relatórios analíticos e dashboards filtram pedidos ativos usando `status: { not: 'Cancelado' }`.

### 2.4. Resiliência de Banco de Dados Local
- O SQLite opera em modo WAL (`PRAGMA journal_mode = WAL;`).
- Toda nova tabela ou coluna adicionada ao `prisma/schema.prisma` deve conter sua migração de runtime correspondente em `src/main/database/prisma.ts` (`initializeDatabase()`), garantindo que clientes existentes não quebrem ao atualizar a versão do aplicativo.
- O parâmetro `deleteAppDataOnUninstall: false` no `package.json` NUNCA deve ser alterado para `true`.

---

## 3. Padrão de Comunicação e Contrato IPC

Ao implementar um novo recurso que transite entre o Renderer e o Main Process, o desenvolvedor/agente DEVE seguir o fluxo completo de 5 etapas:

### 3.1. Convenção de Nomenclatura dos Canais
- Padrão: `<dominio>:<acao>` (ex.: `orders:create`, `products:clone`, `events:getActive`).

### 3.2. Formato Obrigatório de Retorno
Todo controller deve retornar o DTO padrão `ApiResponse<T>`:
```typescript
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
```

### 3.3. Sanitização e Serialização de Objetos Prisma
Antes de cruzar a ponte IPC do Electron, instâncias do Prisma devem passar por serialização para evitar erro de objeto não clonável:
```typescript
return { success: true, data: JSON.parse(JSON.stringify(result)) };
```

### 3.4. Checklist de Modificação IPC
Toda nova rota IPC exige alterações simultâneas em:
1. **Service**: Implementa a regra pura em `src/main/services/NomeService.ts`.
2. **Controller**: Trata o evento e erros em `src/main/controllers/NomeController.ts`.
3. **Handler**: Registra `ipcMain.handle('dominio:acao', ...)` em `src/main/index.ts`.
4. **Preload**: Expõe o método em `src/preload/index.ts`.
5. **Tipagem Global**: Adiciona a assinatura tipada no namespace correspondente em `src/renderer/types/electron.d.ts`.

---

## 4. Padrões de Código e UI/UX

### 4.1. Idiomas
- **Código-Fonte**: Identificadores, nomes de arquivos, funções, métodos e tabelas devem ser escritos em **Inglês** (ex.: `OrdersService`, `calculateOrderTotal`, `addon_groups`).
- **Interface do Usuário**: Textos, mensagens de erro, comprovantes e toasts devem ser escritos em **Português do Brasil (PT-BR)**.

### 4.2. Estilização e Design
- Utilize **TailwindCSS** utilitário. Evite criar arquivos `.css` isolados por componente.
- Formatações de moeda na interface devem sempre utilizar a máscara em Real (`R$ 0,00`).
- Feedbacks assíncronos devem utilizar a biblioteca `sonner` (`toast.success()`, `toast.error()`).

### 4.3. Restrições de Impressão Térmica
- Qualquer modificação no componente `PrintableReceipt.tsx` ou em `src/renderer/index.css` deve respeitar a largura máxima de **80mm**.
- O layout de cozinha (`print-kitchen`) NUNCA deve exibir preços ou dados fiscais/financeiros.
- O layout de cliente (`print-customer`) NUNCA deve omitir a mensagem *"NÃO É DOCUMENTO FISCAL"*.

---

## 5. Gotchas e Armadilhas Conhecidas

1. **Associação de Eventos no POS**: Ao criar um pedido no POS, o sistema verifica se existe um evento ativo no `eventStore` (`activeEvent?.id`). Se houver, ele é gravado no pedido. Se o evento for criado a posteriori, o `EventService` fará o vínculo retroativo baseado na data/hora do pedido.
2. **Conflito de Eventos**: Antes de salvar um evento, `EventService.checkOverlap()` valida se há outro evento ativo no intervalo.
3. **Path Traversal em Imagens**: No protocolo `local://`, caminhos de imagens são validados com `path.normalize()`. Nunca permita servir caminhos que não comecem com `images_directory` ou `userData/images`.
