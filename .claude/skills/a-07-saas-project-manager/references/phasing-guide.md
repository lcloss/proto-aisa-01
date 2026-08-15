# Guia de fatiamento em implementações

Esta skill divide o projeto em **implementações** — fatias verticais entregáveis, nomeadas `07-FF-II-slug.md`. Este ficheiro descreve o que isso significa, com exemplos e anti-padrões.

## Fatia vertical vs camada horizontal

Uma **fatia vertical** atravessa todas as camadas para entregar **uma capacidade de utilizador completa**: base de dados → backend → frontend → testes. Ao fim de uma implementação, há algo que um utilizador consegue *fazer* (ou, na fundação, uma capacidade técnica verificável de ponta a ponta).

Uma **camada horizontal** entrega uma camada técnica inteira sem valor isolado: "todas as migrations", "todos os controllers", "todo o frontend". É um anti-padrão — deixa o projeto sem nada testável até ao fim.

**Exemplo (SaaS de gestão de condomínios):**

✅ Implementações verticais:
- `07-01-01-system-base` — base do projeto: configuração, convenções, layout autenticado mínimo.
- `07-01-02-i18n-error-pages` — i18n (lang:publish, pt-PT) + páginas de erro alinhadas ao design system. Fundação verificável.
- `07-02-01-auth-tenant` — autenticação (Fortify, já existe) + criar/entrar num tenant + dashboard isolado vazio. **Slice mínima de ponta a ponta.**
- `07-03-01-units-crud` — CRUD de frações com permilagem: migration + modelo + policy + rotas Inertia + páginas React + testes Pest.
- `07-03-02-quotas-generation` — geração de quotas a partir da permilagem: lógica + UI + testes da regra.

❌ Camadas horizontais:
- `07-01-01` — Todas as migrations e modelos do projeto.
- `07-02-01` — Todos os controllers e rotas.

## A fase 01 é a fundação; a primeira capacidade aparece cedo

A **fase 01 (FF=01)** materializa as decisões de fundação da arquitetura (`05-system-architecture.md`): base do sistema, instalação de pacotes, i18n, páginas de erro. Dobra o setup aqui. **Não** faças uma implementação "setup" solta e sem fim verificável — cada implementação de fundação tem critérios de aceitação concretos (ex.: as páginas de erro mostram o design system; as mensagens de validação aparecem em pt-PT). A **primeira slice com capacidade de utilizador** (tipicamente auth + tenant) deve surgir logo na fase seguinte.

## Peças que já são mecânica do starter kit

O backlog (`06-requirements.md`) por vezes implica fundações técnicas — **isolamento multi-tenant / global scopes / RBAC / autenticação**. Estas **já existem no starter kit** (ver a arquitetura e as suas convenções): a mecânica de scoping, autorização e auth não se reimplementa.

Não transformes isso numa implementação horizontal isolada ("implementação: isolamento multi-tenant"). Em vez disso, **dobra-o numa slice vertical real** — a implementação de auth+tenant entrega registo/login + criação/entrada no tenant + dashboard isolado, e os critérios de isolamento (ex.: testes Pest que provam que um tenant não vê dados de outro) **entram como critérios e testes dessa implementação**.

A exceção é se a arquitetura descrever uma stack **sem** multitenancy no starter kit — aí o isolamento é trabalho real e pode justificar implementação própria.

## Critérios de uma boa implementação

Cada `07-FF-II` deve ser:
- **Entregável** — produz valor observável (ou capacidade técnica verificável, na fundação).
- **Testável** — critérios de aceitação verificáveis, derivados dos Gherkin do `06-requirements.md`.
- **Independente quanto possível** — depende só de implementações anteriores (FF/II menores), nunca de futuras.
- **Do tamanho certo** — nem trivial, nem a misturar várias capacidades não relacionadas. Se entrega duas capacidades não relacionadas, parte em duas (incrementa II).

## Ordenação (fases FF e sequência II)

1. **Dependências primeiro.** Uma implementação que precisa de uma entidade vem depois da que a cria (II maior, ou fase FF posterior).
2. **Fundação primeiro (FF=01).** Base, pacotes, i18n, páginas de erro.
3. **Valor primeiro, dentro do MVP.** Entre implementações independentes, ordena pela que entrega mais valor / desbloqueia mais.
4. **MVP antes de pós-MVP.** Tudo o que o `06` marca como pós-MVP vem depois, em fases FF posteriores.

## Mapear backlog → implementações

Os épicos e user stories do `06-requirements.md` são a matéria-prima. Um épico raramente é uma implementação 1:1 — agrupa as stories que juntas formam uma slice vertical entregável, e parte épicos grandes em várias implementações sequenciais (II). Cada implementação declara que stories cobre (IDs `E#-US#`), e usa os Gherkin como base direta dos critérios de aceitação. **Não re-planeies stories já ✅ no `06`.**

## Anti-padrões a evitar

- **Implementação "setup".** Configuração sem fim verificável. Dá-lhe critérios de aceitação concretos ou dobra-a noutra.
- **Implementação horizontal.** Já descrito acima.
- **Implementação gigante.** Mais de uma capacidade não relacionada. Parte (incrementa II).
- **Dependência para a frente.** Precisa de algo que só uma implementação posterior cria. Reordena.
- **Duplicar o starter kit.** Re-planear auth/multitenancy/RBAC que já existem.
- **Implementação sem testes possíveis.** Se não consegues escrever critérios verificáveis, está mal desenhada.
