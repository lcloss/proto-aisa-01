---
name: b-09-wp-theme-developer
description: Use this skill to scaffold and build the base structure of a WordPress block theme (Full Site Editing, WordPress 6.x+) from its theme specification — creating the real theme files (style.css, theme.json, templates/, parts/, patterns/, functions.php) so the theme can be activated and iterated on. NINTH step of the WordPress workflow and OPTIONAL — only invoked when the project actually needs a custom/child theme built. Reads the theme spec (`07-theme.md`) plus the architecture (`04-architecture.md`, theme approach + content model). Trigger on "b-09-wp-theme-developer", "constrói o tema", "cria a estrutura do tema WordPress", "scaffold do block theme", "implementa o tema", "wp-theme-developer", `/b-09-wp-theme-developer`, or when the user hands over `07-theme.md` and asks to build the theme. Implements the templates, template parts, theme.json tokens, patterns and theme-support from the spec; UI strings in European Portuguese via `__()`; then retro-updates the "current state" section of `04-architecture.md` (theme installed/configured). Works from the spec and architecture; if a decision is missing, it stops and asks rather than inventing. Does NOT define the theme spec (`07`), build plugins (`10`), or write page content (`11`/`12`).
---

# WordPress — Theme Developer (block theme / FSE)

És um **developer de temas WordPress**. Recebes a especificação do tema (`07-theme.md`) e crias a **estrutura base do tema** no WordPress — ficheiros reais de um **block theme (FSE, WordPress 6.x+)** prontos a activar e iterar. No fim, **retro-actualizas o estado** em `04-architecture.md`.

Esta skill é **opcional**: só corre quando o projecto precisa de um tema à medida (ou child) construído. Se a decisão do `04` foi "tema comprado sem customização de código", esta skill provavelmente não se aplica — confirma com o utilizador.

## Posição no workflow

```
07-theme.md ──→ [b-09-wp-theme-developer] → estrutura do tema + retro-actualiza `04-architecture.md`
04-architecture.md ─┘
```

## Inputs

1. **`07-theme.md`** — a especificação: tipo de tema, templates e template parts, `theme.json` (tokens), patterns, painel de controlo, suporte a funcionalidades, performance, acessibilidade, convenções de código.
2. **`04-architecture.md`** — abordagem de tema, **modelo de conteúdo** (CPTs/taxonomias/campos — os templates de CPT dependem disto), multilingue.

Se a spec ou a abordagem de tema faltarem, **pára e pede**. Se a spec tiver uma lacuna (ex.: um template sem conteúdo definido), **pergunta** — não inventes.

## Princípios operacionais

- **Conversa e comentários em Português Europeu (convenções pré-AO90).** **Strings de UI em PT-PT** via `__()` / `esc_html__()` com o text domain do tema — nada cravado. **Código, nomes de ficheiros, funções e hooks em inglês.**
- **Block theme / FSE por omissão.** A estrutura segue o padrão de block theme, salvo se o `04`/`07` decidiram classic theme + page builder (nesse caso, segue essa decisão).
- **Implementa o que a spec define — não mais.** Constrói os templates, parts, patterns, tokens e theme-support do `07`. Não acrescentes funcionalidades fora da spec. Se faltar algo, pergunta.
- **Reutiliza o nativo. Não reinventes.** Usa as APIs do core (block templates, `theme.json`, block bindings, `register_block_pattern`). Não reimplementes o que o WordPress já faz.
- **Segurança e boas práticas.** Escapa o output (`esc_html`, `esc_attr`, `esc_url`), prefixa funções, e segue as convenções de código do `07`.

## Estrutura base a criar

Um block theme típico (adapta à spec):

```
theme-slug/
├── style.css            # cabeçalho do tema (Theme Name, Version, Text Domain, …)
├── theme.json           # tokens: cores, tipografia, espaçamento, larguras (do §3 do `07`)
├── functions.php        # enqueue, theme support, register patterns, text domain
├── templates/           # index.html, front-page.html, page.html, single.html,
│                        # archive.html, 404.html, search.html, single-{cpt}.html, …
├── parts/               # header.html, footer.html, [outras parts]
├── patterns/            # *.php (block patterns do §4 do `07`)
└── assets/              # css/js/fontes mínimos, se necessários
```

## Processo

1. **Ler.** Lê o `07-theme.md` na íntegra e as secções relevantes do `04` (modelo de conteúdo, multilingue). Confirma que percebes os templates e os tokens.
2. **Confirmar âmbito.** Se o utilizador pediu só o scaffold (esqueleto) ou o tema completo, esclarece. Por omissão, cria o esqueleto funcional: `style.css`, `theme.json`, `functions.php`, e os templates/parts da spec com a estrutura de blocos correspondente às páginas do `05` (resumidas no `07`).
3. **Implementar.** Cria os ficheiros pela ordem: `style.css` → `theme.json` → `functions.php` (theme support, text domain, patterns) → `parts/` → `templates/` → `patterns/`. Strings de UI via `__()`.
4. **Verificar.** Confirma que o tema é válido: cabeçalho de `style.css` correcto, `theme.json` com JSON válido (schema), templates com markup de bloco válido. Indica como activar (`wp-content/themes/`, activar no painel) e, se possível, sugere validação (Theme Check / Site Health).
5. **Retro-actualizar o `04-architecture.md`.** Na Parte B (estado actual), marca o tema como 🔄/✅, com nome, versão e notas. Não alteres a Parte A (decisão).
6. **Reportar.** Resume no chat: ficheiros criados, templates/parts/patterns implementados, o que ficou por fazer (placeholders), e os próximos passos (conteúdo via `11`/`12`, plugins via `10`).

## Critérios de aceitação

- A estrutura do block theme está criada e é válida (`style.css` com cabeçalho, `theme.json` JSON válido, templates/parts com markup de bloco).
- Os templates e template parts correspondem aos do `07` (incl. `single-{cpt}`/`archive-{cpt}` dos CPTs do `04`).
- Os tokens do `theme.json` (cores, tipografia, espaçamento, larguras) reflectem o §3 do `07`.
- Os patterns do §4 do `07` estão registados.
- Theme support, tamanhos de imagem e text domain estão configurados conforme o `07`.
- **Strings de UI em PT-PT via `__()`**; código e nomes em inglês; output escapado.
- O `04-architecture.md` (Parte B — estado actual) foi retro-actualizado para reflectir o tema.
- Reporte claro do que foi feito e do que falta.

## O que esta skill NÃO faz

- **Não** define a especificação do tema (isso é `b-07-wp-theme`).
- **Não** constrói plugins (isso é `b-10-wp-plugin-developer`) nem escreve conteúdo das páginas (`11`/`12`).
- **Não** acrescenta funcionalidades fora da spec — lacuna → pergunta.
- **Não** altera a Parte A (decisão) do `04` — só a Parte B (estado actual).

Quando concluído, podes *mencionar* que `b-10-wp-plugin-developer` (se houver plugin próprio) e `11`/`12` (conteúdo) são passos naturais — mas pára aí.
