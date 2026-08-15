# Mapeamento do design externo

O design chega como ficheiros HTML produzidos fora deste workflow: tipicamente `brand-manual.html` (cliente, sem jargão) e `brand-design-system.html` (técnico, com tokens reais). O `brand-design-system.html` é a fonte primária dos valores; o `brand-manual.html` ajuda no contexto e nos princípios.

O objetivo desta etapa **não é redesenhar** nada — é **traduzir** o que já está decidido para as convenções do projeto, de forma que o developer não tenha de reinterpretar.

## Antes de extrair: confirma que tens os valores, não só os nomes

O `brand-design-system.html` é frequentemente uma *living page* que **consome** os tokens via `var(--color-*)` mas **define-os noutro lado** — tipicamente num CSS externo importado (`<link rel="stylesheet" href="tokens/base.css">`, um `@import`, ou um `<link>` para um ficheiro de tokens). Nesse caso, o HTML dá-te os **nomes semânticos** e a tipografia (inline ou nas tags de fonte), mas **não os valores OKLCH, escalas de espaçamento ou raios** — esses estão no ficheiro importado.

**Verifica sempre os `<link>`, `@import` e referências a `.css` do HTML.** Se os valores dos tokens vierem de um ficheiro externo que **não te foi fornecido**, **pára e pede esse ficheiro** (ex: "preciso do `tokens/base.css` — o design system importa de lá os valores OKLCH e as escalas"). Não fixes tokens no `05-system-architecture.md` a partir só dos nomes: sem os valores, estarias a inventar. Em alternativa, o Luciano pode colar os valores dos tokens diretamente no chat.

## O que extrair

### Cores
O `brand-design-system.html` traz os tokens, idealmente já em OKLCH. Extrai:
- Os **valores OKLCH** de cada cor.
- Os **nomes semânticos** (primary, secondary, accent, background, foreground, muted, destructive, etc.).
- O comportamento em **dark mode** (se o design system o define).

Traduz para a camada `@theme` do TailwindCSS v4 e mapeia para as variáveis que o shadcn/ui espera (`--background`, `--foreground`, `--primary`, `--primary-foreground`, `--border`, `--ring`, etc.).

**Nunca hex em projeto novo** — se o ficheiro de design trouxer hex, converte para OKLCH e regista a conversão.

### Tipografia
- Famílias (e se são self-hosted — ex: Inter, Outfit como variable fonts).
- Escala tipográfica (tamanhos e a sua aplicação: h1…h6, body, small).
- Pesos disponíveis. **Lembrete de convenção:** sem bold; `font-medium` é o peso máximo de ênfase.

### Componentes
Para cada componente que o design mostra (botões, cards, inputs, badges, etc.):
- Que componente **shadcn/ui** corresponde.
- Se precisa de **customização** sobre o default do shadcn (variantes, raios, sombras).
- Componentes do design que **não têm** equivalente shadcn direto — assinala como "componente custom a construir".

### Princípios visuais
- Escala de espaçamento.
- Raios de canto (`--radius`).
- Sombras / elevação.
- Densidade, alinhamento, e quaisquer princípios que o manual enuncie.

## Formato do mapeamento no Gate 2

Apresenta de forma legível (não despejes HTML). Sugestão:

- **Cores:** tabela `nome semântico → valor OKLCH → variável shadcn`.
- **Tipografia:** famílias + escala + pesos.
- **Componentes shadcn a instalar:** lista de `npx shadcn@latest add <component>`.
- **Componentes custom:** lista do que não existe no shadcn.
- **Lacunas:** onde o design externo não cobre uma necessidade da UI prevista pelo PRD, e a tua proposta para resolver.

## O que vai para o `05-system-architecture.md`

Depois de confirmado no Gate 2, o mapeamento entra no `05-system-architecture.md` (secção de design) como **fonte única** para o developer: os tokens OKLCH, a config `@theme`, o inventário de componentes shadcn, e a lista de componentes custom. As specs de implementação (07) referenciam esta secção em vez de repetir valores.

## Se faltar o design system técnico

Se só existir `brand-manual.html` (sem o design system com tokens), os valores exatos podem não estar presentes. Nesse caso, extrai o que o manual dá (cores nominais, tipografia, princípios) e **assinala no Gate 2** que os valores OKLCH precisam de ser confirmados — não inventes precisão que o input não tem.
