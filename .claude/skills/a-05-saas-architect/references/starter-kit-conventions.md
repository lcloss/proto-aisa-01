# Convenções do starter kit

Estas são as peças que **já existem** no starter kit custom do Luciano. Ao desenhar a arquitetura, **não as planeies como novas** — assume-as disponíveis e constrói por cima. Esta lista existe para não duplicar fundações já resolvidas.

## Stack base

- Laravel (última LTS), PHP 8.3+, MySQL (exclusivo).
- Inertia.js + React + TypeScript no frontend da app autenticada.
- Vite como build.
- TailwindCSS v4 (custom properties / `@theme`, dark mode moderno).
- shadcn/ui — instalado **à medida**, nunca em bloco.
- Pest para testes backend.

## Autenticação e API — já configurado

- **Laravel Fortify** — registo, login, reset de password, 2FA. Não reimplementar.
- **Laravel Sanctum** — tokens de API quando aplicável. Não reimplementar.

## Multitenancy — já existe

- Coluna `tenant_id` nas tabelas tenantable.
- **Global Scopes** aplicam o filtro de tenant automaticamente.
- **`TenantManager` singleton** resolve o tenant ativo.
- Single-database, multi-tenant.
- As migrations de tabelas novas tenantable devem incluir `tenant_id` e seguir este padrão — mas a **mecânica** de scoping já está construída.

## Autorização — já existe

- **`Gate::before()`** para super-permissões.
- Permissões granulares (ex: `users.edit`) **scoped por tenant** via pivot `tenant_user`.
- RBAC por tenant. As implementações definem *quais* permissões novas criar e a *que* roles atribuir, mas a **mecânica** de autorização já existe.

## Convenções de código (a refletir nas specs)

- **UI copy:** Português europeu sem acordo ortográfico. **Código** (modelos, rotas, campos, componentes, tipos, comentários): inglês.
- **Um componente React por ficheiro.** Nunca componentes inline em páginas.
- **Sem bold:** `font-medium` é o peso máximo de ênfase.
- **Sem hex em projeto novo:** tokens OKLCH.
- **Sem emojis na UI.**
- Páginas Inertia em `resources/js/Pages/`, componentes reutilizáveis em `resources/js/Components/`, componentes shadcn em `resources/js/Components/ui/`, tipos em `resources/js/types/`.

## Páginas públicas

O starter kit suporta dois padrões de rendering para páginas públicas, escolhidos por página conforme o SEO:
- **Blade SSR + ilhas React** — padrão `site-island.tsx` (sem Inertia), para HTML mínimo e SEO máximo (marketing/landing).
- **Inertia SSR** — para públicas com interatividade rica.

## Nota

Se o input do projeto descrever explicitamente uma stack diferente, segue o input e regista a divergência no `05-system-architecture.md`. Caso contrário, tudo o que está aqui é dado como adquirido.
