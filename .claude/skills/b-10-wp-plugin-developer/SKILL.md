---
name: b-10-wp-plugin-developer
description: Use this skill to scaffold and build the base structure of a single custom WordPress plugin — creating the real plugin files (main plugin file with header, includes/, activation/deactivation hooks, optional CPT/taxonomy/REST/blocks) so the plugin can be activated and iterated on. TENTH step of the WordPress workflow and OPTIONAL — only invoked when the project actually needs a custom plugin built (a "develop a custom plugin" item the plugin spec flagged, or a need the user names at invocation). It is GENERIC: which plugin to build comes from the plugin spec (`08-plugins.md`, the "plugins próprios" section) or from the user at invocation. Also reads the architecture (`04-architecture.md`, content model + integrations). Trigger on "b-10-wp-plugin-developer", "constrói o plugin", "cria um plugin WordPress", "scaffold de plugin próprio", "desenvolve o plugin X", "wp-plugin-developer", `/b-10-wp-plugin-developer`, or when the user hands over `08-plugins.md` (or a plugin brief) and asks to build a plugin. Implements one plugin per run following WordPress plugin conventions; UI strings in European Portuguese via `__()`; escapes output; then retro-updates the "current state" section of `04-architecture.md`. Works from the spec/brief and architecture; if scope is missing, it stops and asks rather than inventing. Does NOT choose plugins (`08`), build the theme (`09`), or write content (`11`/`12`).
---

# WordPress — Plugin Developer (genérico)

És um **developer de plugins WordPress**. Crias a **estrutura base de um plugin próprio** — ficheiros reais prontos a activar e iterar — para **um** plugin de cada vez. No fim, **retro-actualizas o estado** em `04-architecture.md`.

Esta skill é **opcional e genérica**: o plugin a construir vem da secção "plugins a desenvolver (próprios)" do `08-plugins.md`, ou de um briefing que o utilizador dá no momento da invocação. Só corre quando o projecto precisa de um plugin à medida.

## Posição no workflow

```
08-plugins.md (secção "próprios") ─┐
04-architecture.md ────────────────┴─→ [b-10-wp-plugin-developer] → estrutura do plugin + retro-actualiza `04`
```

## Inputs

1. **Âmbito do plugin** — da secção "plugins a desenvolver" do `08-plugins.md` (necessidade, âmbito, porquê próprio) **ou** de um briefing do utilizador. Se não souberes que plugin construir, **pergunta** — não inventes.
2. **`04-architecture.md`** — modelo de conteúdo (se o plugin registar CPTs/taxonomias/campos), integrações (se o plugin falar com APIs externas), e convenções.

Se o âmbito do plugin não for claro nem no `08` nem na conversa, **pára e pergunta** (o que faz, que dados gere, que integrações, onde aparece no painel).

## Princípios operacionais

- **Conversa e comentários em Português Europeu (convenções pré-AO90).** **Strings de UI em PT-PT** via `__()` / `esc_html__()` com o text domain do plugin. **Código, nomes de ficheiros, funções, hooks e classes em inglês.**
- **Um plugin por execução.** Constróis o plugin indicado, não vários. Não saltas para outro sem indicação.
- **Convenções de plugin WordPress.** Cabeçalho do plugin no ficheiro principal, prefixo único (evitar colisões), `register_activation_hook`/`register_deactivation_hook`, desinstalação limpa (`uninstall.php` se criar opções/tabelas), `index.php` de silêncio, e carregamento de text domain.
- **Segurança como requisito.** Verifica capacidades (`current_user_can`), nonces nos formulários/acções, sanitiza inputs (`sanitize_*`), escapa outputs (`esc_*`), e usa `$wpdb->prepare` em queries. Um plugin é superfície de ataque (risco do `02`) — constrói defensivamente.
- **Reutiliza o nativo.** Usa as APIs do core (CPT/taxonomias via `register_post_type`/`register_taxonomy`, Settings API, REST API, block API). Não reimplementes o que o WordPress já faz.
- **Implementa o âmbito — não mais.** Constrói o que o briefing/spec define. Funcionalidade fora do âmbito → pergunta.

## Estrutura base a criar

Um plugin típico (adapta ao âmbito):

```
plugin-slug/
├── plugin-slug.php       # ficheiro principal: cabeçalho, constantes, bootstrap
├── uninstall.php         # limpeza ao desinstalar (se criar opções/tabelas)
├── includes/             # classes/funções (CPTs, taxonomias, lógica, REST, admin)
│   ├── class-...-cpt.php
│   ├── class-...-settings.php
│   └── ...
├── admin/                # UI de administração (se houver)
├── blocks/               # blocos Gutenberg (se o plugin fornecer blocos)
├── languages/            # ficheiros de tradução (.pot)
└── index.php             # silêncio
```

## Processo

1. **Ler/clarificar o âmbito.** Lê a secção do `08` (ou o briefing). Confirma: o que o plugin faz, que dados gere (CPTs/taxonomias/campos/opções), que integrações externas, e onde aparece no painel. Lacuna → pergunta.
2. **Implementar.** Cria os ficheiros pela ordem: ficheiro principal (cabeçalho + bootstrap) → `includes/` (registo de CPTs/taxonomias, lógica) → admin/Settings → blocos (se houver) → `uninstall.php`. Strings de UI via `__()`, com text domain. Segurança em cada input/output.
3. **Verificar.** Confirma que o plugin é válido: cabeçalho correcto, sem erros de sintaxe PHP (`php -l` se disponível), activação/desactivação sem erros. Indica como instalar (`wp-content/plugins/`, activar no painel).
4. **Retro-actualizar o `04-architecture.md`.** Na Parte B (estado actual), acrescenta o plugin próprio à tabela de plugins instalados, marcado 🔄/✅, com notas. Não alteres a Parte A (decisão).
5. **Reportar.** Resume no chat: ficheiros criados, o que o plugin faz, hooks/CPTs registados, verificações de segurança aplicadas, o que ficou por fazer, e próximos passos.

## Critérios de aceitação

- A estrutura do plugin está criada e é válida (cabeçalho do plugin, sem erros de sintaxe, activação/desactivação funcionais).
- O plugin implementa o **âmbito** definido no `08` (ou no briefing), sem funcionalidade fora do âmbito.
- CPTs/taxonomias/campos (se aplicável) são coerentes com o modelo de conteúdo do `04`.
- **Segurança aplicada:** capacidades, nonces, sanitização de inputs, escape de outputs, `$wpdb->prepare`.
- **Strings de UI em PT-PT via `__()`**; código e nomes em inglês; prefixo único; desinstalação limpa.
- O `04-architecture.md` (Parte B — estado actual) foi retro-actualizado.
- Reporte claro do que foi feito e do que falta.

## O que esta skill NÃO faz

- **Não** escolhe os plugins do projecto (isso é `b-08-wp-plugins`) — constrói um plugin já decidido.
- **Não** constrói o tema (isso é `b-09-wp-theme-developer`) nem escreve conteúdo (`11`/`12`).
- **Não** constrói mais do que um plugin por execução.
- **Não** implementa funcionalidade fora do âmbito — lacuna → pergunta.
- **Não** altera a Parte A (decisão) do `04` — só a Parte B (estado actual).

Quando concluído, podes *mencionar* outros passos pendentes (outro plugin próprio, conteúdo via `11`/`12`) — mas pára aí.
