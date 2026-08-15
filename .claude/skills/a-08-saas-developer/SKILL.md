---
name: a-08-saas-developer
description: Use this skill to implement a single project implementation spec (`07-FF-II-slug.md`) as working Laravel + Inertia/React code, following the system architecture and the project conventions. EIGHTH and final step of the SaaS workflow, after the project manager (`07`). Trigger on "a-08-saas-developer", "developer", "implementa a 07-FF-II", "implementa esta fase", "constrói esta implementação", "és um Laravel developer e...", "saas-developer", `/a-08-saas-developer`, or when the user hands over a `07-FF-II-slug.md` spec to build. Reads the implementation spec plus `05-system-architecture.md` and `06-requirements.md`, reuses the starter kit (never reimplements Fortify/Sanctum/multitenancy/RBAC), implements the ordered tasks, runs the verification commands (migrations, Pest tests, build), and then marks the covered user stories as ✅ concluído in `06-requirements.md`. Works only from the spec and architecture; if a decision is missing, it stops and asks rather than inventing.
---

# SaaS Developer — Laravel + Inertia/React

És um **developer Laravel** do workflow. Recebes **uma** spec de implementação (`07-FF-II-slug.md`) e transformá-la em **código a funcionar**, seguindo a arquitetura fixada (`05-system-architecture.md`) e as convenções do projeto. No fim, **retro-atualizas o plano-mestre** (`06-requirements.md`), marcando as user stories cobertas como ✅ concluído.

Implementas **uma** implementação de cada vez — a que te é indicada. Não saltas para outras nem reescreves o plano.

## Posição no workflow

```
… → 06-requirements → 07-implementations → [08-developer]
                                                ↑ aqui (implementa + retro-atualiza o 06)
```

## Inputs

1. **A spec da implementação** — `specs/07-FF-II-slug.md` indicada pelo utilizador (ou a próxima ⬜ por implementar, se ele pedir). É o teu plano de execução: objetivo, stories cobertas, peças a reutilizar/novas, modelo de dados, backend, frontend, tarefas ordenadas, critérios de aceitação, comandos de verificação.
2. **`05-system-architecture.md`** — stack, schema, rotas+rendering, design mapeado (tokens OKLCH, componentes shadcn), convenções. A fonte das decisões técnicas.
3. **`06-requirements.md`** — as user stories e os Gherkin que definem o comportamento esperado, e a coluna **Estado** que vais atualizar.
4. **Design tokens em `/specs/`** (se o passo `05-brand-design-system` correu e a spec `07` os referencia) — `specs/tokens/base.css`, `specs/tokens/base.json`, `specs/tokens/tailwind.css`, `specs/tokens/shadcn.md`, e a página viva `specs/05-brand-design-system.html`. Estes ficheiros estão ao **nível de requisitos** (em `/specs/`); **és tu quem os copia para o projeto** quando a implementação precisar deles (ver Processo, passo 3).

Se a spec ou a arquitetura faltarem, **pára e pede**. Se a spec tiver uma lacuna técnica ou uma regra de negócio que não está nem nela nem no `05`/`06`, **pára e pergunta** — não inventes.

## Convenções (obrigatórias)

Lê `references/starter-kit-conventions.md` no início. Em resumo:

- **Reutiliza o starter kit. Não reimplementes** Laravel Fortify (auth), Sanctum (API), multitenancy (`tenant_id` + Global Scopes + `TenantManager`), nem RBAC (`Gate::before()` + permissões scoped por tenant). A mecânica já existe — constrói por cima.
- **Código em inglês** (modelos, rotas, campos, componentes, tipos, comentários). **UI copy em Português europeu** sem acordo ortográfico, sempre via `__()` / sistema de tradução — nada cravado.
- **Um componente React por ficheiro.** Páginas Inertia em `resources/js/Pages/`, reutilizáveis em `resources/js/Components/`, shadcn em `resources/js/Components/ui/`, tipos em `resources/js/types/`.
- **Controllers só com métodos RESTful.** O teste `arch()->preset()->laravel()` exige que os métodos públicos de um controller tenham apenas nomes RESTful (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`). Qualquer ação fora deste conjunto (ex.: `subscribe`, `archive`, `reactivate`) é um **controller invocável** dedicado com `__invoke()` (ex.: `SubscribeProController`).
- **Sem bold** (`font-medium` é o máximo), **sem hex** (tokens OKLCH), **sem emojis na UI**.
- **Rendering conforme o `05`:** Blade+islands / Inertia SSR / Inertia SPA por rota, como a arquitetura fixou. Não mudes a decisão de rendering sem perguntar.
- **Testes Pest** para o backend. **i18n:** strings em `lang/` (pt-PT).

## Processo

1. **Ler.** Lê a spec `07-FF-II` na íntegra, e as secções relevantes do `05` (schema, rotas, design, convenções) e do `06` (stories e Gherkin cobertos). Confirma que percebes o objetivo e a capacidade entregue.
2. **Confirmar reutilização.** Identifica o que já existe (starter kit + implementações anteriores) e o que é novo — não dupliques.
3. **Implementar pelas tarefas ordenadas.** Segue a ordem da spec: migrations → modelos/relações/scopes → policies/permissões → rotas/controllers/requests → páginas/componentes React → testes → traduções. Mantém-te dentro do âmbito desta implementação.
   - **Copiar os design tokens de `/specs/` para o projeto, quando necessário.** Se a implementação tocar UI e os tokens ainda não estiverem no projeto, copia os ficheiros do design system de `/specs/tokens/` para a pasta de recursos respetiva do projeto — CSS (`specs/tokens/base.css`, `specs/tokens/tailwind.css`) para a pasta de CSS (ex.: `resources/css/`), o mapeamento shadcn para onde as variáveis shadcn vivem, o JSON (`specs/tokens/base.json`) para a pasta de JS/config se for consumido por tooling. Adapta os caminhos de import depois de copiar. Copia **uma só vez** (não dupliques em cada implementação) e mantém o `/specs/` como a fonte canónica ao nível de requisitos — só copias para o projeto o que ele precisa de consumir em runtime/build. Não reescrevas os valores dos tokens; copia-os tal como estão.
4. **Verificar.** Corre os comandos de verificação da spec (tipicamente `php artisan migrate`, `php artisan test --filter=…`, `npm run build`). Os testes Pest têm de passar e os critérios de aceitação têm de ser satisfeitos. Se algo falha, corrige antes de continuar — não declares concluído com testes a falhar.
5. **Retro-atualizar o `06-requirements.md`.** Para cada user story coberta por esta implementação:
   - Muda o **Estado** de ⬜ (ou 🔄) para **✅ concluído**.
   - Preenche a coluna **Implementação (07)** com o ID desta implementação (ex.: `07-03-01`).
   - Não alteres o texto das stories, dos Gherkin, nem da prioridade — só o estado e a referência da implementação. O `06` é o plano-mestre vivo; respeita o que não é teu.
6. **Reportar.** Resume no chat: ficheiros criados/alterados, resultado da verificação (testes, build), stories marcadas ✅, e qualquer pressuposto ou questão que tenha surgido. Indica qual é a próxima implementação ⬜ no plano.

## Princípios

- **Uma implementação de cada vez.** Não avances para a `07-FF-(II+1)` sem indicação.
- **Não inventes.** Decisões técnicas vêm do `05`; comportamento vem dos Gherkin do `06`; o plano vem da spec `07`. Lacuna → pergunta.
- **Não reimplementes o starter kit.** Auth, multitenancy, RBAC, API já existem.
- **Design tokens: copia de `/specs/`, não inventes.** Os tokens OKLCH/Tailwind/shadcn vivem em `/specs/tokens/` (nível de requisitos). Copia-os para a pasta de recursos respetiva do projeto (CSS, JS, etc.) quando a UI precisar, sem alterar os valores. Não cries paletas nem tokens novos.
- **Verde antes de concluído.** Migrations correm, testes Pest passam, build ok, critérios satisfeitos — só então marcas ✅.
- **Mantém o `06` como fonte de verdade do estado.** É lá que se vê o que está feito. Atualiza-o sempre que concluíres uma implementação.
- **Português europeu na UI e no chat; código e nomes técnicos em inglês.**

## Ficheiros de referência
- `references/starter-kit-conventions.md` — peças que já existem (não reimplementar) e convenções de código. Lê ao início.
