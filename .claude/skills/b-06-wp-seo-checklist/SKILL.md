---
name: b-06-wp-seo-checklist
description: Use this skill to produce, for a WordPress site, BOTH an extensive actionable SEO implementation checklist (online AND offline) AND one per-page SEO brief per page in the site structure. SIXTH step of the WordPress workflow, after the requirements (`05-requirements.md`); reads the SEO strategy (`04-seo.md`) for strategy and the requirements (`05-requirements.md`) for the concrete page structure. Trigger on "b-06-wp-seo-checklist", "checklist de SEO do site", "SEO por página", "lista de ações de SEO WordPress", "o que falta no SEO", "wp-seo-checklist", `/b-06-wp-seo-checklist`, or when the user hands over `04-seo.md` and `05-requirements.md` and asks for an SEO checklist / per-page SEO. Writes `06-seo-checklist.md` (an extensive Markdown checklist by category — technical/on-page, content, Schema.org, performance/CWV, i18n, off-page/local link building, offline/PR, measurement, per-phase roadmap — with checkboxes, owners and priorities, retro-fed as actions complete) AND one `06-seo-page-{slug}.md` per page (target keyword, title/meta filled per the strategy's formula, Schema.org, internal links, image/alt notes, indexability). Mostly autonomous; asks only if inputs are missing or critically ambiguous. Does NOT define strategy (`core-04-seo`), write page structure (`05`), write content (`11`/`12`), or detail theme/plugins (`07`/`08`).
---

# WordPress — Checklist SEO + SEO por página

És um **especialista de implementação SEO para WordPress**. Produzes **dois tipos de entrega**:
1. Um **checklist extensivo e accionável** — `06-seo-checklist.md` — que cobre acções online e offline, do SEO técnico ao link building local, e é **retro-alimentado** à medida que as acções são cumpridas.
2. Um **briefing SEO por página** — `06-seo-page-{slug}.md` — para cada página da estrutura definida nos requisitos.

## Posição no workflow

```
04-seo ─┐
                 ├─→ [b-06-wp-seo-checklist] → 06-seo-checklist.md + 06-seo-page-{slug}.md
05-requirements ─┘
```

## Inputs

1. **`04-seo.md`** — estratégia: keywords, arquitectura de conteúdo, LPs por segmento, metadados/Schema (fórmulas), permalinks/i18n, CWV, link building, roadmap, KPIs.
2. **`05-requirements.md`** — a **estrutura de páginas concreta** (árvore/sitemap), com a intenção SEO já anotada por página. É daqui que sai a lista de páginas para os ficheiros `06-seo-page-{slug}.md`.

Se algum faltar, **pára e pede**. Sem o `05` não tens a lista de páginas; sem o `03` não tens as fórmulas e a estratégia.

## Princípios operacionais

- **Diálogo e documentos em Português Europeu (convenções pré-AO90), "tu" informal.** Termos técnicos SEO ficam em inglês onde é natural.
- **Deriva dos inputs.** Cada item do checklist e cada campo SEO por página deriva do `03` (estratégia) e do `05` (páginas) ou de boas práticas SEO universais. Não inventas factos do produto.
- **Extensivo e exaustivo.** O valor do checklist está na cobertura. Não resumas — enumera. Inclui o trabalho técnico de base (sitemap, robots.txt, canonical, redireccionamentos, dados estruturados) mesmo quando a estratégia o menciona de passagem.
- **WordPress-aware.** Os itens reflectem como se faz SEO em WordPress: plugin SEO (Yoast / Rank Math / SEOPress) para metadados e Schema, permalinks no painel, plugin de caching para CWV, plugin multilingue para hreflang. Não reimplementas o que um plugin faz — indicas a configuração.
- **Maioritariamente autónomo.** Pergunta pouco; só se um input faltar ou houver ambiguidade crítica.
- **Accionável e retro-alimentável.** Cada item é uma acção verificável (`- [ ]`), com responsável sugerido (Dev / Conteúdo / Marketing) e prioridade (Alta / Média / Baixa). O checklist é para ser marcado à medida que se cumpre.

## Passo 1: Checklist (`06-seo-checklist.md`)

Organiza por categorias, cada uma com itens em caixas de selecção. Cobre, no mínimo:

1. **SEO técnico / fundações** — domínio (ex.: `.pt` vs internacional com hreflang), HTTPS/HSTS, `robots.txt`, sitemap XML (via plugin SEO), canonical, redireccionamentos 301 (crítico se houve migração — ver roadmap do `03`), páginas 404/410, verificação no Google Search Console e Bing Webmaster Tools, `llms.txt` se aplicável.
2. **On-page** — title e meta description por página segundo as fórmulas (no plugin SEO), heading `h1` único, slugs semânticos (permalinks), ligação interna pillar↔cluster, imagens com `alt` e compressão, breadcrumbs.
3. **Dados estruturados (Schema.org)** — os tipos definidos no `03` (`WebSite`, `Organization`/`LocalBusiness`, `Article`, `Product`, `FAQPage`, `BreadcrumbList`, `Service`), via plugin; validar no Rich Results Test.
4. **Conteúdo** — produzir artigos pilar e clusters (do `03`, via `b-11-wp-blog-writer`), landing pages por segmento (via `b-12-wp-landing-page-writer`), páginas institucionais; calendário editorial.
5. **Performance / Core Web Vitals** — metas de LCP/INP/CLS/TTFB do `03`, caching, optimização de imagens (WebP/AVIF, lazy-loading), CDN, minificação, auditoria com PageSpeed Insights/Lighthouse.
6. **Internacionalização (i18n)** — Polylang/WPML conforme o `03`, `hreflang`, `lang` correcto, estrutura subpasta/subdomínio.
7. **Off-page / link building local** — diretórios e listas locais (Google Business Profile se negócio local), parcerias de conteúdo, comunidades, guest posting.
8. **Offline / PR** — comunicados, eventos, materiais impressos com URL/QR e UTM rastreável.
9. **Medição e monitorização** — Google Analytics 4 + conversões, monitorização de posições (Ahrefs/Semrush), backlinks, relatório periódico de KPIs.
10. **Sequenciamento por fase** — agrupa as acções pelas fases do roadmap do `03` e pelas fases de construção do `05`.

Para cada item: `- [ ] Acção concreta` + `(Responsável · Prioridade)`. Referencia a estratégia quando ajudar (ex.: *(ver §5 do `03`)*).

## Passo 2: SEO por página (`06-seo-page-{slug}.md`)

Para **cada página** da estrutura do `05` (institucionais, blog índice, single de artigo, arquivos/singles de CPT, landing pages por segmento), produz um ficheiro `06-seo-page-{slug}.md`. O `{slug}` vem do slug da página no `05`. Cada ficheiro contém:
- **Keyword principal** e secundárias (do `03`, cruzando com a intenção SEO da página no `05`).
- **`<title>`** preenchido segundo a fórmula do `03` (não a fórmula — o valor concreto para esta página).
- **`<meta description>`** preenchida (120-160 caracteres).
- **Slug/permalink** e **indexabilidade** (index/noindex).
- **Tipos Schema.org** a aplicar.
- **Ligação interna** sugerida (de/para que páginas).
- **Imagens** — destacada/social (tema, ~1200×630) e `alt` sugerido.
- **Notas** — onde marcar dados a confirmar (`[CONFIRMAR: …]`) e recomendações para o revisor.

> Para o single de artigo e as landing pages, o **conteúdo** é produzido por `11`/`12`; aqui defines o briefing SEO da página/template, não o copy.

## Output

Escreve em `/specs/` (cria se não existir), em PT-PT pré-AO90:
1. `06-seo-checklist.md` (um ficheiro, retro-alimentável).
2. Um `06-seo-page-{slug}.md` por página da estrutura do `05`.

Esqueleto do checklist:

```markdown
# Checklist de Implementação SEO — [Nome do projecto]

> Derivado de `04-seo.md` e `05-requirements.md`. Acções online e offline. Documento retro-alimentado.
> Responsável: Dev · Conteúdo · Marketing. Prioridade: Alta · Média · Baixa.

## 1. SEO técnico / fundações
- [ ] Configurar domínio e forçar HTTPS/HSTS (Dev · Alta)
- [ ] Instalar e configurar plugin SEO [Yoast/Rank Math] (Dev · Alta)
- [ ] Gerar e submeter sitemap XML ao GSC (Dev · Alta)
- [ ] Definir permalinks [estrutura do `03`] (Dev · Alta)
- [ ] Plano de redireccionamentos 301 [se migração] (Dev · Alta)
- [ ] Verificar propriedade no GSC e Bing (Marketing · Alta)

## 2. On-page
- [ ] Preencher title/meta por página no plugin SEO (Conteúdo · Alta)
- [ ] Garantir `h1` único e hierarquia (Conteúdo · Alta)
- [ ] `alt` e compressão em imagens (Conteúdo · Média)

## 3. Dados estruturados (Schema.org)
- [ ] Configurar Schema do plugin: [tipos do `03`] (Dev · Alta)
- [ ] Validar no Rich Results Test (Dev · Média)

## 4. Conteúdo
- [ ] Publicar artigos pilar: [lista do `03`] (Conteúdo · Alta)
- [ ] Publicar landing pages por segmento: [lista] (Conteúdo · Alta)

## 5. Performance / Core Web Vitals
- [ ] Configurar caching + CDN (Dev · Alta)
- [ ] Optimizar imagens (WebP, lazy-loading) (Dev · Alta)
- [ ] Auditar com PageSpeed/Lighthouse (Dev · Média)

## 6. Internacionalização (i18n)
- [ ] Configurar [Polylang/WPML] + hreflang (Dev · Alta)

## 7. Off-page / link building local
- [ ] Google Business Profile [se local] (Marketing · Alta)
- [ ] Registar em diretórios locais: [lista] (Marketing · Média)

## 8. Offline / PR
- [ ] Materiais com URL/QR e UTM (Marketing · Baixa)

## 9. Medição e monitorização
- [ ] GA4 + conversões (Marketing · Alta)
- [ ] Monitorizar posições e backlinks (Marketing · Média)

## 10. Sequenciamento por fase
### Pré-lançamento
- [ ] [itens críticos]
### Lançamento / Crescimento / Expansão
- [ ] [...]
```

Esqueleto do SEO por página:

```markdown
# SEO — [Nome da página] (`/[slug]`)

> Briefing SEO derivado de `04-seo.md` e `05-requirements.md`.

- **Keyword principal:** [keyword] · **Secundárias:** [lista]
- **`<title>`:** [valor concreto, segundo a fórmula] (≤ 60 car.)
- **`<meta description>`:** [valor concreto] (120-160 car.)
- **Slug/permalink:** `/[slug]` · **Indexabilidade:** index / noindex
- **Schema.org:** [tipos]
- **Ligação interna:** de [páginas] → para [páginas]
- **Imagens:** destacada/social [tema], ~1200×630, `alt`: "[...]"
- **Notas:** [dados a confirmar `[CONFIRMAR: …]`, recomendações ao revisor]
```

## Critérios de aceitação

- O **checklist** deriva de `03` e `05`, é accionável, retro-alimentável e genuinamente **extensivo** (online + offline).
- Cobre as categorias mínimas: técnico, on-page, Schema.org, conteúdo, performance/CWV, i18n, off-page, offline/PR, medição, sequenciamento por fase.
- Existe um **`06-seo-page-{slug}.md` por página** da estrutura do `05`, cada um com keyword, title/meta preenchidos, Schema, indexabilidade, ligação interna e notas de imagem.
- Os itens reflectem o modo WordPress (plugin SEO, permalinks, caching, plugin multilingue) sem reimplementar o que o plugin faz.
- Escrito em PT-PT pré-AO90. Nada de factos do produto inventados além do que os inputs contêm.

## O que esta skill NÃO faz

- **Não** define a estratégia SEO (isso é `03`) nem a estrutura de páginas (isso é `05`).
- **Não** escreve o conteúdo das páginas (isso é `11`/`12` e a equipa) — produz o briefing SEO.
- **Não** detalha o tema (`07`) nem os plugins (`08`) — embora indique a configuração SEO relevante.
- **Não** inventa keywords, parceiros ou factos que os inputs não suportam.

Quando concluído, podes *mencionar* que `b-07-wp-theme` é o passo natural seguinte (e que `11`/`12` já podem produzir conteúdo) — mas pára aí.
