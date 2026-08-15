# Template — `specs/05-system-architecture.md`

O `05-system-architecture.md` é **um único ficheiro** que descreve a arquitetura fixada do projeto. É lido por:
- O business analyst (06), para alinhar épicos/stories com os módulos e rotas.
- O project manager (07), para fatiar em implementações sem inferir schema, rotas ou design.
- O developer (08), para implementar sem inferir.

Mantém-no **conciso e preciso**: nomes exatos, paths exatos, 1-2 linhas por item. **Não copies código** — documenta interfaces e decisões.

> Este ficheiro **não** regista progresso. O estado vivo (o que já foi implementado) vive no `06-requirements.md`, mantido pelo developer. Aqui é só o plano técnico de referência. Se a arquitetura for refinada numa execução futura, atualiza as secções que mudam.

A estrutura abaixo é um ponto de partida; adapta as secções ao projeto. O que **não** pode faltar: stack, schema previsto, rotas com rendering, mapeamento do design, convenções.

```markdown
# Arquitetura do Sistema — [Nome do Projeto]

> Baseado em `04-prd.md` e `04-seo.md` (+ design externo). Plano técnico de referência.

## 1. Stack
[Stack fixada. Se divergir do starter kit, explicitar e justificar a partir do input.]

## 2. Decisões de arquitetura
- App autenticada: Inertia SPA + Fortify/Sanctum.
- Multitenancy e RBAC: starter kit (`tenant_id`, Global Scopes, `TenantManager`, `Gate::before()`).
- i18n: locale por omissão e locales suportados; sistema nativo do Laravel (lang/ publicado, pt-PT). Fundação.
- Páginas de erro: códigos cobertos (404/403/413/419/429/500/503) alinhados ao design system. Fundação.
- [Outras decisões transversais: pagamentos, uploads, filas, etc.]

## 3. Schema previsto
[Tabelas previstas, com colunas-chave, relações, e se são tenantable (tenant_id). Cobre o âmbito do PRD.]

| Tabela | Colunas-chave | Relações | Tenantable | Notas |
|--------|---------------|----------|------------|-------|
| users  | …             | …        | —          | starter kit |
| …      | …             | …        | sim        | … |

## 4. Rotas e rendering
[Classificação definitiva de cada rota. Rendering: Blade+islands / Inertia SSR / Inertia SPA.]

| Rota | Descrição | Visibilidade | Rendering | Middleware | Justificação |
|------|-----------|--------------|-----------|------------|--------------|
| `/` | Homepage | Pública | Blade+islands | — | SEO máximo |
| `/pricing` | Preços | Pública | Inertia SSR | — | Indexável, alguma interatividade |
| `/login` | Login | Pública (noindex) | Blade | guest | Sem valor SEO |
| `/dashboard` | Dashboard | Privada | Inertia SPA | auth | Autenticada |

[Inclui notas sobre colisões de namespace resolvidas e SEO de tenant, se aplicável.]

## 5. Design system mapeado
### Cores (OKLCH)
| Nome semântico | OKLCH | Variável shadcn |
|----------------|-------|-----------------|
| primary        | …     | --primary       |
### Tipografia
[Famílias, escala, pesos. font-medium máximo.]
### Componentes
- shadcn a instalar: […]
- Componentes custom a construir: […]
### Princípios
[Espaçamento, --radius, sombras, dark mode.]

## 6. Convenções
[Idioma UI/código, um componente por ficheiro, paths (resources/js/Pages, Components, Components/ui, types), sem bold, sem hex, sem emojis. Ver starter-kit-conventions.]
```

## Greenfield vs existente

- **Greenfield:** a skill cria este ficheiro do zero na Etapa 4.
- **Existente:** a skill lê o ficheiro na Etapa 1 e atualiza as secções que mudam (schema previsto de novas capacidades, rotas novas, mapeamento de design se reconfirmado), preservando o resto.
