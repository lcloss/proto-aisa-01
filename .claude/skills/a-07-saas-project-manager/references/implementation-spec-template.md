# Template — `specs/07-FF-II-slug.md`

Cada ficheiro de implementação é uma **fatia vertical entregável**, autossuficiente para o developer (08) executar. Lê o `05-system-architecture.md` (schema, rotas, design, convenções) e o `06-requirements.md` (stories e Gherkin) e materializa-os numa spec concreta. **Não copies a arquitetura inteira** — referencia as secções relevantes do `05` e detalha só o desta implementação.

A estrutura abaixo é a forma recomendada; adapta ao que esta implementação precisa, mas mantém todas as secções marcadas como obrigatórias.

```markdown
# 07-FF-II — [Título da implementação]

> Fase FF · implementação II. Fatia vertical. Baseado em `06-requirements.md` e `05-system-architecture.md`.
> Depende de: [07-FF-II anteriores, ou "—" se fundação inicial].

## Objetivo
[Uma capacidade de utilizador (ou técnica, na fundação) entregue de ponta a ponta. 1-2 frases.]

## User stories cobertas
- E#-US# — [título] — [estimativa]
- … (IDs exatos do `06-requirements.md`)

## Peças a reutilizar vs. novas
- **Reutilizar:** [do starter kit (Fortify, Sanctum, TenantManager, Gate::before, …) e de implementações anteriores. O que NÃO recriar.]
- **Novo:** [o que esta implementação cria de raiz.]

## Modelo de dados
[Tabelas/colunas/relações/permissões desta implementação, coerentes com o schema do `05`. Indica `tenant_id` onde tenantable.]

| Tabela | Colunas | Relações | Tenantable |
|--------|---------|----------|------------|
| …      | …       | …        | …          |

## Backend
- **Rotas:** [método + path + rendering (Blade+islands / Inertia SSR / Inertia SPA, conforme o `05`) + middleware.]
- **Controllers / actions:** […]
- **Form requests / validação:** [regras; mensagens via i18n.]
- **Policies / permissões:** [permissões novas e a que roles atribuir.]

## Frontend
- **Páginas Inertia:** `resources/js/Pages/…` […]
- **Componentes:** reutilizáveis em `resources/js/Components/`, shadcn em `Components/ui/`. Um componente por ficheiro.
- **Design:** tokens/componentes a usar — referencia os tokens do design system em `/specs/` (`specs/tokens/base.css`, `specs/tokens/tailwind.css`, `specs/tokens/shadcn.md`; página viva `specs/05-brand-design-system.html`) e a secção de design do `05`. O developer (08) copia estes tokens de `/specs/` para a pasta de recursos do projeto (CSS/JS) quando esta implementação precisar. Sem bold, sem hex, sem emojis. Copy em pt-PT via `__()`.

## Tarefas ordenadas
1. [migration …]
2. [modelo + relações + scope tenant]
3. [policy/permissões]
4. [rotas + controller + request]
5. [páginas/componentes React]
6. [testes Pest]
7. [traduções pt-PT]

## Critérios de aceitação
[Verificáveis, derivados dos Gherkin do `06`. Inclui os critérios não-funcionais do DoD relevantes: i18n, rendering correto, isolamento de tenant, testes a passar.]
- [ ] [critério]
- [ ] [critério]

## Comandos de verificação
```
php artisan migrate
php artisan test --filter=…
npm run build
```

## Prompt pronto para o developer (08)
> [Prompt autónomo: "Implementa a `07-FF-II-slug`. Lê esta spec, o `05-system-architecture.md` e as stories E#-US# do `06-requirements.md`. Reutiliza o starter kit (não reimplementes auth/multitenancy/RBAC). Segue as tarefas ordenadas, corre os comandos de verificação, e no fim marca as stories cobertas como ✅ no `06-requirements.md` indicando esta implementação."]
```
