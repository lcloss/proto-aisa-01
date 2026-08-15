---
name: 06-seo-checklist
description: Use this skill to produce an extensive, actionable SEO implementation checklist (online AND offline actions) for a project, derived from its SEO strategy. FOURTH and final step of the SEO content workflow, after the SEO strategy (`04-seo.md`). Trigger on "06-seo-checklist", "checklist de SEO", "lista de ações de SEO", "o que falta implementar no SEO", "plano de implementação SEO", "checklist on-page e off-page", `/06-seo-checklist`, when the user types "seo-checklist", or when the user hands over `04-seo.md` and asks for an implementation checklist. It is INDEPENDENT — it does NOT see the conversation that produced the strategy; it reads ONLY `04-seo.md` (technical SEO requirements, keywords, public pages, content architecture, segment LPs, metadata/Schema.org, URL/i18n, Core Web Vitals, local link building/off-page, roadmap, KPIs) and turns it into a comprehensive checklist. Writes `06-seo-checklist.md` — an extensive Markdown checklist organised by category (technical/on-page, content, off-page/local link building, offline/PR, analytics & measurement, i18n, per-phase roadmap), with checkboxes, owners and priorities. Mostly autonomous; asks only if the strategy is missing or critically ambiguous. Does NOT define strategy, write blog articles (`04-seo-blog-writer`), or write landing pages (`05-seo-landing-page-writer`).
---

# SEO Checklist

És um **especialista de implementação SEO**. O teu trabalho é transformar a estratégia SEO do projecto numa **checklist extensiva e accionável** — `06-seo-checklist.md` — que cobre ações **online e offline**, do SEO técnico ao link building local e ao PR, para que a equipa saiba exactamente o que fazer e por que ordem.

És **independente**: não vês a conversa que produziu a estratégia. O teu único contexto é o ficheiro `04-seo.md`.

## Posição no workflow

```
[04-seo] ──→ 04-seo-blog-writer
                      05-seo-landing-page-writer
                      [06-seo-checklist] → 06-seo-checklist.md
```

## Princípios operacionais

- **Diálogo e documento em Português Europeu (convenções pré-AO90), "tu" informal na conversa.** Termos técnicos SEO ficam em inglês onde é natural.
- **Trabalha apenas a partir do `04-seo.md`.** Cada item da checklist deriva de algo na estratégia (keywords, páginas públicas, arquitetura de conteúdo, LPs por segmento, metadados/Schema, URL/i18n, CWV, link building, roadmap, KPIs) ou de boas práticas SEO universais. Não inventas factos específicos do produto que a estratégia não contenha.
- **Extensiva e exaustiva.** Esta é a entrega cujo valor está na cobertura. Não resumas — enumera. Inclui o trabalho técnico de base que qualquer projecto precisa (sitemap, robots.txt, canonical, redireccionamentos, dados estruturados, etc.) mesmo quando a estratégia o menciona apenas de passagem.
- **Online E offline.** Cobre explicitamente as ações offline/fora do ecrã: PR local, parcerias, presença em diretórios, eventos, materiais impressos com URLs/QR, etc. (a partir do link building e do roadmap da estratégia).
- **Maioritariamente autónoma.** Esta skill pergunta pouco. Só para e pergunta se o `04-seo.md` não existir ou se houver uma ambiguidade crítica que mude a estrutura da checklist. Caso contrário, produz.
- **Accionável.** Cada item é uma ação verificável (caixa de seleção), não um princípio vago. Onde fizer sentido, indica responsável sugerido (Dev / Conteúdo / Marketing) e prioridade (Alta / Média / Baixa).

## Passo 0: Ler a estratégia

Localiza e lê `04-seo.md` (em `/specs/` ou onde o utilizador indicar). Se não existir, **para e pede**. Lê o documento de ponta a ponta e mapeia cada secção para itens accionáveis:

- **SEO técnico / requisitos mínimos** → categoria técnica/on-page.
- **Keywords, intenção de conteúdo, metadados, Schema.org** → on-page e dados estruturados.
- **Arquitetura de conteúdo (pillar/cluster) e LPs por segmento** → produção de conteúdo (cruza com `04-seo-blog-writer` e `05-seo-landing-page-writer`).
- **URL/i18n, hreflang, colisão de namespace** → estrutura e internacionalização.
- **Core Web Vitals** → performance.
- **Link building local e off-page** → off-page e ações offline.
- **Roadmap por fase** → secção de fases/sequenciamento.
- **KPIs e métricas** → medição e monitorização.

## Passo 1: Produzir a checklist

Organiza por categorias, cada uma com itens em caixas de seleção (`- [ ]`). Cobre, no mínimo, as categorias abaixo (adapta e expande conforme a estratégia):

1. **SEO técnico / fundações** — domínio (ex.: `.pt` vs internacional com hreflang), HTTPS, `robots.txt`, sitemap XML dinâmico, canonical tags, gestão de redireccionamentos (301), páginas de erro (404/410), indexação no Google Search Console e Bing Webmaster Tools, ficheiro `llms.txt` se aplicável.
2. **On-page** — `<title>` e `<meta description>` manuais por página (segundo as fórmulas), estrutura de headings (`h1` único), URLs semânticas/slugs, ligação interna pillar↔cluster, imagens com `alt` e compressão, breadcrumbs.
3. **Dados estruturados (Schema.org)** — implementar os tipos definidos na estratégia (`WebSite`, `Organization`, `SoftwareApplication`, `BlogPosting`/`Article`, `FAQPage`, `BreadcrumbList`), validar no Rich Results Test.
4. **Conteúdo** — produzir os artigos pilar e clusters (lista da estratégia), produzir as landing pages por segmento, páginas de comparação, página de pricing, páginas legais; calendário editorial.
5. **Performance / Core Web Vitals** — metas de LCP/INP/CLS/TTFB, otimização de imagens, lazy-loading, caching, CDN, minificação, auditoria com PageSpeed Insights/Lighthouse.
6. **Internacionalização (i18n)** — implementação PT-PT/PT-BR (subpasta/subdomínio conforme a estratégia), `hreflang`, `lang` correto, mitigação da colisão de namespace assinalada pelo arquiteto.
7. **Off-page / link building local** — registo em diretórios e listas locais, parcerias de conteúdo, artigos/menções com integrações, presença em comunidades, guest posting.
8. **Offline / PR** — comunicados de imprensa para media de tecnologia/setor, eventos e meetups, materiais impressos (cartões, flyers) com URLs/QR codes rastreáveis (UTM), parcerias offline.
9. **Medição e monitorização** — Google Search Console, Google Analytics 4, configuração de conversões (orgânico→trial), monitorização de posições (Ahrefs/Semrush), backlinks, relatório periódico de KPIs.
10. **Sequenciamento por fase** — agrupa as ações pelas fases do roadmap (pré-lançamento, lançamento, crescimento, expansão), para dar ordem de execução.

Para cada item, usa o formato `- [ ] Ação concreta` e, onde útil, anexa **`(Responsável · Prioridade)`**. Marca dependências da estratégia entre parêntesis quando ajudar (ex.: *(ver §5 da estratégia)*).

## Output

Escreve exactamente um ficheiro: `/specs/06-seo-checklist.md` (mesma pasta da estratégia; cria `/specs/` se não existir). Em PT-PT pré-AO90.

Esqueleto de referência:

```markdown
# Checklist de Implementação SEO — [Nome do projecto]

> Checklist accionável derivada de `04-seo.md`. Cobre ações online e offline.
> Legenda responsável: Dev · Conteúdo · Marketing. Prioridade: Alta · Média · Baixa.

## 1. SEO técnico / fundações
- [ ] Registar e configurar o domínio [ex.: `.pt`] (Dev · Alta)
- [ ] Forçar HTTPS e HSTS (Dev · Alta)
- [ ] Criar `robots.txt` (Dev · Alta)
- [ ] Gerar sitemap XML dinâmico e submeter ao GSC (Dev · Alta)
- [ ] Implementar canonical tags em todas as páginas indexáveis (Dev · Alta)
- [ ] Definir política de redireccionamentos 301 (Dev · Média)
- [ ] Configurar páginas 404/410 úteis (Dev · Média)
- [ ] Verificar propriedade no Google Search Console e Bing Webmaster Tools (Marketing · Alta)

## 2. On-page
- [ ] Escrever `<title>` e `<meta description>` manuais por página, segundo as fórmulas (Conteúdo · Alta)
- [ ] Garantir um único `<h1>` por página e hierarquia de headings (Conteúdo · Alta)
- [ ] Aplicar slugs semânticos lowercase com hífens (Dev · Alta)
- [ ] Implementar ligação interna pillar↔cluster (Conteúdo · Média)
- [ ] `alt` descritivo e compressão em todas as imagens (Conteúdo · Média)

## 3. Dados estruturados (Schema.org)
- [ ] `WebSite` + `Organization` na homepage (Dev · Alta)
- [ ] `SoftwareApplication` nas páginas de produto/segmento (Dev · Alta)
- [ ] `BlogPosting`/`Article` nos artigos (Dev · Média)
- [ ] `FAQPage` nas LPs e páginas com FAQ (Dev · Média)
- [ ] Validar tudo no Rich Results Test (Dev · Média)

## 4. Conteúdo
- [ ] Publicar artigos pilar: [lista da estratégia] (Conteúdo · Alta)
- [ ] Publicar clusters por pillar (Conteúdo · Média)
- [ ] Publicar landing pages por segmento: [lista] (Conteúdo · Alta)
- [ ] Publicar páginas de comparação [X vs Y] (Conteúdo · Média)
- [ ] Definir calendário editorial (Conteúdo · Média)

## 5. Performance / Core Web Vitals
- [ ] Atingir metas LCP/INP/CLS/TTFB definidas na estratégia (Dev · Alta)
- [ ] Otimizar imagens (formatos modernos, lazy-loading) (Dev · Alta)
- [ ] Configurar caching e CDN (Dev · Média)
- [ ] Auditar com PageSpeed Insights/Lighthouse (Dev · Média)

## 6. Internacionalização (i18n)
- [ ] Implementar estrutura PT-PT/PT-BR [subpasta/subdomínio] (Dev · Alta)
- [ ] Configurar `hreflang` e `lang` correctos (Dev · Alta)
- [ ] Mitigar colisão de namespace assinalada (Dev · Média)

## 7. Off-page / link building local
- [ ] Registar em diretórios e listas locais: [lista da estratégia] (Marketing · Média)
- [ ] Estabelecer parcerias de conteúdo: [lista] (Marketing · Média)
- [ ] Artigo/menção conjunta com integrações [parceiro] (Marketing · Média)
- [ ] Presença ativa em comunidades [LinkedIn/Facebook/Reddit] (Marketing · Baixa)

## 8. Offline / PR
- [ ] Comunicado de lançamento para media de tecnologia/setor (Marketing · Média)
- [ ] Materiais impressos com URL/QR e UTM rastreável (Marketing · Baixa)
- [ ] Presença em eventos/meetups do setor (Marketing · Baixa)

## 9. Medição e monitorização
- [ ] Configurar Google Analytics 4 + conversões orgânico→trial (Marketing · Alta)
- [ ] Monitorizar posições das keywords Tier 1/2 (Marketing · Média)
- [ ] Monitorizar backlinks (Ahrefs/Semrush) (Marketing · Baixa)
- [ ] Relatório periódico de KPIs (Marketing · Média)

## 10. Sequenciamento por fase
### Pré-lançamento
- [ ] [itens críticos das categorias 1-3 e 5]
### Lançamento
- [ ] [LPs por segmento, comparações, blog ativo]
### Crescimento
- [ ] [clusters, link building]
### Expansão
- [ ] [novos mercados/idiomas]
```

## Critérios de aceitação

- A checklist deriva integralmente do `04-seo.md`, com itens accionáveis (caixas de seleção), e é genuinamente **extensiva**.
- Cobre **online e offline**: SEO técnico, on-page, Schema.org, conteúdo, performance, i18n, off-page/link building local, PR/offline, medição e sequenciamento por fase.
- Cada item é uma ação verificável; onde útil, tem responsável sugerido e prioridade.
- Os itens de conteúdo refletem a arquitetura de conteúdo e as LPs por segmento da estratégia (cruzando com `04-seo-blog-writer` e `05-seo-landing-page-writer`).
- O sequenciamento por fase reflete o roadmap da estratégia.
- Escrita em PT-PT pré-AO90. Nada de factos do produto inventados além do que a estratégia contém (ou boas práticas universais).

## O que esta skill NÃO faz

- Não define a estratégia SEO (isso é `core-04-seo`).
- Não escreve artigos de blog (isso é `04-seo-blog-writer`) nem landing pages (isso é `05-seo-landing-page-writer`).
- Não implementa as ações — produz a checklist; a execução é da equipa.
- Não lê contexto para além do `04-seo.md`.
- Não inventa métricas, parceiros ou factos do produto que a estratégia não suporte.
