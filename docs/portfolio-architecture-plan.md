# Plano de Arquitetura do Portfolio

## Objetivo
Construir um portfolio profissional em React + Tailwind + Supabase com foco em carregamento rapido, SEO basico, manutencao simples e capacidade de evoluir sem acoplamento desnecessario.

## Diagnostico da Base Atual
A base atual ja possui React, Vite, Tailwind e componentes de portfolio reutilizaveis. Porem, ela ainda carrega infraestrutura generica de app (`AuthProvider`, `base44`, `react-query` global e roteamento auto-gerado) que nao agrega valor para uma landing publica e aumenta complexidade, custo cognitivo e risco de regressao.

## Decisao Arquitetural
### Estrategia principal
Usar uma arquitetura **static-first com dados opcionais do Supabase**.

Isso significa:
- O conteudo critico da home deve carregar sem depender do Supabase.
- O Supabase entra para dados dinamicos de baixo acoplamento: formulario de contato, analytics simples, projetos gerenciaveis e feature toggles de publicacao.
- A home deve continuar funcional mesmo se o backend falhar.

### Estrutura recomendada
- **app/**: bootstrap da aplicacao, providers minimos e roteamento.
- **pages/**: paginas de alto nivel (`Home`, `ProjectDetails` opcional, `NotFound`).
- **sections/**: blocos grandes da landing (`HeroSection`, `ProjectsSection`, `StackSection`, `ProcessSection`, `ContactSection`, `Footer`).
- **components/**: UI compartilhada e componentes puros.
- **content/**: conteudo estatico versionado (`profile.ts`, `projects.ts`, `social-links.ts`).
- **services/**: clientes externos (`supabaseClient`, `contactService`, `projectsService`).
- **hooks/**: hooks de orquestracao (`useProjects`, `useContactForm`).
- **types/**: contratos e schemas.
- **lib/**: utilidades e helpers.

## Organizacao de Responsabilidades
### Render publico
- A home deve renderizar usando conteudo local tipado como fonte primaria.
- Se existir integracao com Supabase para projetos publicados, ela deve hidratar ou substituir blocos especificos depois do first paint.

### Supabase
Usar Supabase apenas para:
- `contact_messages`: armazenar mensagens do formulario.
- `projects` ou `project_entries`: opcional, para gerenciar projetos sem novo deploy.
- `site_settings`: opcional, para CTA, links e toggles.

### Estado
- Evitar store global para este projeto.
- Usar `useState` e hooks locais por secao.
- Usar `@tanstack/react-query` apenas se houver leitura frequente de dados remotos. Se o Supabase for usado apenas no formulario de contato, o Query Client global pode ser removido.

## Performance
### O que manter
- Vite como bundler atual.
- Tailwind para styling utilitario.
- Framer Motion apenas em blocos hero e reveals pontuais.

### O que reduzir
- Remover camada de autenticacao publica se o portfolio nao exigir login.
- Remover `base44` e qualquer dependencia residual nao usada.
- Evitar imagens remotas pesadas sem compressao.
- Evitar animacoes em todas as secoes; usar motion so onde melhora percepcao visual.

### Medidas concretas
- Carregar a primeira dobra com conteudo local.
- Lazy load para secoes nao criticas e componentes pesados.
- Usar `loading="lazy"` em imagens abaixo da dobra.
- Padronizar imagens em WebP/AVIF.
- Limitar fontes e pesos tipograficos.
- Manter JavaScript da home o mais proximo possivel do essencial.

## SEO e Experiencia
- Definir `title`, `meta description`, Open Graph e favicon.
- Estruturar headings com hierarquia semantica.
- Garantir contraste, foco visivel e navegacao por teclado.
- Incluir CTAs claros: contato, GitHub, LinkedIn e curriculo.

## Estrutura sugerida para este projeto
```text
src/
  app/
    providers/
    router/
  pages/
    Home.jsx
    NotFound.jsx
  sections/
    home/
      HeroSection.jsx
      ProjectsSection.jsx
      StackSection.jsx
      ProcessSection.jsx
      ContactSection.jsx
      FooterSection.jsx
  components/
    portfolio/
    ui/
  content/
    profile.js
    projects.js
    stack.js
  services/
    supabase/
      client.js
    contact-service.js
    projects-service.js
  hooks/
    use-projects.js
    use-contact-form.js
  lib/
    seo.js
    utils.js
```

## Roadmap tecnico recomendado
### Fase 1
- Limpar providers e integracoes que nao servem ao portfolio.
- Consolidar a home como landing publica simples e rapida.
- Centralizar conteudo em arquivos locais.

### Fase 2
- Integrar Supabase para contato.
- Adicionar tabela de mensagens e politicas minimas.
- Criar feedback visual confiavel para envio.

### Fase 3
- Tornar projetos gerenciaveis via Supabase com fallback local.
- Adicionar filtros, tags e paginas de detalhe se houver volume suficiente.

## Recomendacao sobre outras specs
Se o objetivo principal for SEO e performance maxima para pagina publica, **Astro com ilhas React** seria tecnicamente melhor que uma SPA em Vite. Porem, como este projeto ja esta em React/Vite e voce quer avancar dentro da base atual, a decisao mais pragmatica e **manter Vite e adotar uma arquitetura static-first**. Isso entrega velocidade de execucao agora sem reescrever o projeto.

## Conclusao
A melhor arquitetura para este portfolio nao e a mais complexa, e sim a mais seletiva: landing publica rapida, conteudo local como base, Supabase apenas onde ha ganho real e componentes organizados por responsabilidade. Esse caminho preserva performance, facilita manutencao e permite evolucao gradual.
