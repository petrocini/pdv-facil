# Fluxo de Versionamento, Deploy e Updates (PDV Fácil)

Este documento detalha o padrão adotado para gerenciar ciclos de vida da aplicação **PDV Fácil**, garantindo estabilidade operando localmente no Electron e atualizações limpas e automáticas pros clientes.

O sistema baseia-se em **Git Flow + GitHub Releases + electron-updater**.

## 1. Padrão de Branching (Versões do Código)

Seguimos a metodologia Git Flow ajustada para projetos locais/desktop, combinada ao *Semantic Versioning* (SemVer).

* **`main` (ou `master`)**: Representa estritamente o código atualmente **em produção**. Cada commit para esta branch DEVE obrigatoriamente estar associado a uma tag de release (ex: `v1.0.3`). Nunca realizamos código direto nela.
* **`develop`**: A próxima versão do software. Onde o novo código é agrupado e onde realizamos as validações da release anterior.
* **`feature/*`**: Para desenvolver uma nova funcionalidade (ex: `feature/suporte-balanca`). Sempre inicia de `develop` e realiza a fusão (*merge*) para `develop` com *Pull Request*.
* **`release/*`** (Ponte para produção): Quando a branch `develop` tem features o bastante para uma nova versão. (Ex: `release/v2.0.0`). Criada para subir os números da versão (`npm version minor`) e testar empacotamento. É imutável após fechada, fazendo o *merge* voltando na `main` (aonde o executável é feito) e retroagindo o ajuste de versão em `develop`.
* **`hotfix/*`**: Correções urgentes quando um erro crítico está na versão em produção. Saem baseadas na `main` e sobem um "Patch" (ex: `npm version patch` -> `v1.0.4`). Feita a correção, dão merge na `main` para publicar imediatamente e, também, voltam a correção para `develop`.

## 2. Definindo a Versão (SemVer)

O arquivo `package.json` define qual a versão atual do compilado. Padrão `M.M.P` onde:
* **Major (X.0.0)**: Mudanças arquiteturais ou de interface severas ou incompatíveis.
* **Minor (0.X.0)**: Novas funcionalidades. O banco de dados antigo continua compatível ou tem schema com auto-update.
* **Patch (0.0.X)**: Somente conserto de falhas pequenas. Nenhuma feature nova. 

Você atualiza o arquivo automaticamente com o comando base do pnpm/npm antes de realizar push pra `main`.
```bash
# Sobe um patch (1.0.2 -> 1.0.3)
npm version patch

# Sobe um minor (1.0.3 -> 1.1.0)
npm version minor

# Sobe um major (1.1.0 -> 2.0.0)
npm version major
```

---

## 3. Fluxo de Publicação e Deploy (Como subir p/ o cliente)

O projeto confia no `electron-builder` e em provedores em nuvem, especificamente configurado com `github`, que entrega executáveis e lida como um repositório transparente de versões.

### Etapas da Publicação:

1. Finalize sua `release` fechando o PR no GitHub e atualizando o `package.json` antes de jogar na `main`. A nova subida de código deve disparar via GitHub Actions (ou você empacota rodando um build manual e enviando caso seja uma pipeline básica) rodando:
   ```bash
   # O processo de builder é ativado pelas chaves GITHUB_TOKEN
   npm run dist
   ```
2. O `electron-builder` gerará localmente e depois vai subir para "Releases" do GitHub um `.exe` e um arquivo `.yml` ("latest.yml").
3. Essa aba "Releases" será a nossa **central autônoma**.

---

## 4. O Comportamento do Aplicativo (Auto-Update)

Como o Desktop descobre sozinho que tem uma versão lá? Através da integração que efetuamos com `electron-updater`. 

1. Execução **Silenciosa**: Sempre que o PDV inicializar (logo no início do evento App ready do Electron), ele envia para `/releases/latest.yml` do seu provedor Github a pergunta de qual versão está marcada ali.
2. Compara local vs Remoto (ex: Local `1.0.1`, Nuvem `1.0.2`). 
3. Caso a mesma seja nova e não seja Beta (verá os metadados), o download começará em segundo plano (na thread Main do electron). 
4. Ao concluir, o Electron enviará via Ponte (Preload/IPC) uma mensagem que ativará via evento o React. O Front-end apresentará ao usuário o aviso do fim.
5. Quando fechado/ou pela confirmação explícita do aviso - a biblioteca substitui os binários sem dor no windows executando um update transparente.

---

O sistema de versionamento depende integralmente da preservação limpa da árvore principal (`main`), sem uso indevido de Tags e garantindo o alinhamento adequado dentro das regras listadas acima para que o instalador confie e substitua no cliente final de maneira assertiva sem corromper as tabelas locais (SQLite).
