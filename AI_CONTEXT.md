# AI_CONTEXT

## Projeto

Portifolio 2 e um portfolio frontend em React para Paulo Vitor. O foco atual e uma experiencia publica, editorial e estatica primeiro, com desempenho alto e pouca dependencia de backend na renderizacao inicial.

## Fonte de verdade atual

- O app principal e o projeto da raiz do workspace.
- Existe um subprojeto separado em `ai-architect-mcp/` com `package.json` proprio. Ele nao faz parte do bundle do frontend.
- Para tarefas no portfolio, rode comandos a partir da raiz do workspace.
- Para tarefas do MCP, use explicitamente a pasta `ai-architect-mcp/`.

## Stack ativa do portfolio

- React 18 com Vite 6.
- JavaScript/JSX com `checkJs` habilitado em `jsconfig.json`.
- Tailwind CSS 3 com `tailwindcss-animate`.
- `@` aponta para `src/`.
- Roteamento com `react-router-dom`.
- UI utilitaria baseada em componentes em `src/components/ui`.

## Estrutura atual

- `src/App.jsx` define as rotas publicas.
- `src/pages/` contem as paginas de rota.
- `src/components/` contem componentes reutilizaveis.
- `src/sections/` contem secoes compostas, hoje usadas principalmente na home.
- `src/content/` contem o conteudo local e atualmente e a principal fonte de dados do site.
- `src/api/` existe, mas no momento esta vazio.

## Regras arquiteturais

- Trate o portfolio como `static-first`.
- O conteudo publico deve continuar funcionando sem backend.
- Antes de introduzir integracao remota, confirme que existe necessidade real de dados dinamicos.
- Se houver backend no futuro, encapsule acesso em servicos claros e preserve fallback local quando fizer sentido.
- Evite acoplar componentes de pagina diretamente a chamadas remotas.
- Prefira manter conteudo editavel em modulos de `src/content/` enquanto o site permanecer institucional e de baixo volume de atualizacao.

## Estado atual de backend

- Nao ha cliente Supabase no codigo de `src/`.
- Nao ha chamadas `fetch` ou camada de API em uso no frontend atual.
- Existem dependencias e texto de conteudo mencionando Supabase, mas isso hoje representa direcao futura, nao integracao implementada.

## Convencoes de interface

- A linguagem visual atual e mais editorial e contida do que "dashboard".
- O projeto usa paleta quente e neutra, espacamento generoso e tipografia com `Space Grotesk`.
- Evite introduzir layouts genericos, blocos pesados ou UI que fuja desse tom sem motivo claro.

## Observacoes importantes

- O `README.md` da raiz ainda carrega texto template de Base44 e nao deve ser tratado como documentacao confiavel do estado atual do app.
- Ha mistura intencional de JavaScript com verificacao de tipos via `checkJs`; nao migrar para TypeScript completo sem necessidade explicita.
- O projeto nao possui suite de testes configurada neste momento.

## Comandos uteis do app principal

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run lint:fix`
- `npm run typecheck`

## Direcao preferida para proximas mudancas

- Priorizar clareza de conteudo, performance e consistencia visual.
- Manter separacao entre conteudo, composicao de pagina e infraestrutura.
- Introduzir formulários, persistencia e integracoes somente com contrato claro de dados e impacto real no produto.
