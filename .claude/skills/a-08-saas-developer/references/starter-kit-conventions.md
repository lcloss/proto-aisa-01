# Convenções do starter kit

Estas são as peças que **já existem** no starter kit custom do Luciano. Ao implementar, **não as recries** — reutiliza-as e constrói por cima.

## Stack base

- Laravel (última LTS), PHP 8.3+, MySQL (exclusivo).
- Inertia.js + React + TypeScript no frontend da app autenticada.
- Vite como build.
- TailwindCSS v4 (custom properties / `@theme`, dark mode moderno).
- shadcn/ui — instalado **à medida** (`npx shadcn@latest add <component>`), nunca em bloco.
- Pest para testes backend.

## Autenticação e API — já configurado (NÃO reimplementar)

- **Laravel Fortify** — registo, login, reset de password, 2FA.
- **Laravel Sanctum** — tokens de API quando aplicável.

## Multitenancy — já existe (NÃO reimplementar)

- Coluna `tenant_id` nas tabelas tenantable.
- **Global Scopes** aplicam o filtro de tenant automaticamente.
- **`TenantManager` singleton** resolve o tenant ativo.
- Single-database, multi-tenant.
- Migrations novas tenantable incluem `tenant_id` e seguem este padrão — mas a **mecânica** de scoping já está construída.

## Autorização — já existe (NÃO reimplementar)

- **`Gate::before()`** para super-permissões.
- Permissões granulares (ex: `users.edit`) **scoped por tenant** via pivot `tenant_user`.
- RBAC por tenant. Cria *quais* permissões a implementação pede e atribui aos roles — mas a **mecânica** já existe.

## Convenções de código

- **UI copy:** Português europeu sem acordo ortográfico, sempre via `__()` / sistema de tradução. **Código** (modelos, rotas, campos, componentes, tipos, comentários): inglês.
- **Um componente React por ficheiro.** Nunca componentes inline em páginas.
- **Sem bold:** `font-medium` é o peso máximo de ênfase.
- **Sem hex:** tokens OKLCH (do design mapeado no `05-system-architecture.md`).
- **Sem emojis na UI.**
- Páginas Inertia em `resources/js/Pages/`, componentes reutilizáveis em `resources/js/Components/`, componentes shadcn em `resources/js/Components/ui/`, tipos em `resources/js/types/`.
- **Controllers só com métodos RESTful.** O teste de arquitetura `arch()->preset()->laravel()` (em `tests/Unit/ArchTest.php`) exige que os métodos públicos de um controller tenham apenas nomes RESTful: `index`, `create`, `store`, `show`, `edit`, `update`, `destroy`. Qualquer ação que não seja RESTful (ex.: `subscribe`, `archive`, `reactivate`, `start`, `pause`) **não** é um método de um controller de recurso — é um **controller invocável** dedicado de ação única, com `__invoke()`, criado via `php artisan make:controller --invokable`. Convenção de nome: verbo + recurso (ex.: `SubscribeProController`, `StartProTrialController`, `ArchiveProjectController`). A rota aponta para a classe diretamente: `Route::post('billing/subscribe', SubscribeProController::class)`.

## Páginas públicas

Dois padrões de rendering, escolhidos por página conforme a arquitetura (`05`):
- **Blade SSR + ilhas React** — padrão `site-island.tsx` (sem Inertia), para HTML mínimo e SEO máximo (marketing/landing).
- **Inertia SSR** — para públicas com interatividade rica.

## i18n

- Sistema nativo do Laravel. Ficheiros em `lang/` (raiz, após `php artisan lang:publish` em Laravel 11+).
- Traduções oficiais pt-PT; strings do produto em `lang/pt.json` via `__('...')`.
- No frontend (Inertia/React), traduções partilhadas via Inertia ou helper — nada cravado.

## Nota

Se a arquitetura (`05-system-architecture.md`) descrever explicitamente uma stack diferente, segue-a. Caso contrário, tudo o que está aqui é dado como adquirido.
