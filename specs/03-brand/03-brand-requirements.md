# Brand Requirements — AISA

> Passo 3 do pipeline de marca (fase 3 do tronco). Baseado em `01-brand-discussion.md`, `02-brand-strategy.md` e conversa com o utilizador (2026-07-03). Revisto em 2026-07-04: plataforma WordPress fixada; design system 100% personalizado (sem Tailwind, sem shadcn/ui); componentes de formulário obrigatórios.

## Síntese da marca
**Posicionamento:** A AISA é a IPSS de Malveira da Serra/Janes que acompanha as famílias da sua comunidade da infância ao envelhecimento, com o calor de quem conhece cada pessoa pelo nome e o rigor de uma instituição em quem se pode confiar.

**Personalidade:**
- **Próxima** — trata as pessoas pelo nome; comunicação pessoal, nunca genérica.
- **Calorosa** — linguagem que acolhe, não que informa.
- **Íntegra / de confiança** — transparente sobre o que faz e como usa o apoio recebido; nunca promete o que não cumpre.
- **Enraizada** — fala do território (Malveira da Serra/Janes, Cascais) como parte da identidade — "os nossos", não "os utentes".
- **Serena** — mesmo em temas sensíveis (velhice, doença, dependência), tom calmo, nunca alarmista.

Arquétipo: **o Cuidador (Caregiver)**.

**Tom de voz:** "tu" próximo e respeitoso em redes sociais/newsletter/conteúdo "sobre nós"; registo formal-caloroso ("você") em comunicações institucionais e administrativas (admissão, ofícios) — nunca frio ou burocrático, nunca alarmista mesmo em apelos/donativos.

- ✅ "Aqui, não és só mais um processo — és o Sr. António, que todos os dias vem tomar o pequeno-almoço connosco." ❌ "A AISA disponibiliza respostas sociais integradas nas valências de infância e terceira idade."
- ✅ "Estamos disponíveis para o acompanhar em cada etapa deste processo — pode contar connosco." ❌ "Solicita-se o preenchimento do formulário em anexo para efeitos de análise da candidatura."
- ✅ "O teu apoio ajuda a Dona Fernanda a continuar a ter as suas tardes de costura na AISA." ❌ "URGENTE: sem o teu donativo, não conseguimos continuar."

**Nome / Tagline:** AISA (Associação de Apoio Social Nossa Senhora da Assunção); tagline "Perto de si, a cuidar dos seus."

## Restrições e não-negociáveis
- **Nome:** AISA (Associação de Apoio Social Nossa Senhora da Assunção) — fixo, não se discute.
- **Logótipo existente:** manter **tal e qual** (`specs/logo-aisa.png`) — a identidade constrói-se à volta dele, não o substitui nem o redesenha.
- **Cores:** a paleta nova **parte obrigatoriamente das três cores do logótipo** — verde (≈#2E9A47), azul (≈#1B75BC), laranja (≈#E87722) — a harmonizar/disciplinar na fase 04, sem introduzir uma paleta que as ignore.
- **Sector sério/social:** tom digno em toda a identidade; qualquer fotografia de pessoas reais implica consentimentos (risco RGPD herdado da fase 1 — a identidade não pode assumir uso livre de imagens de utentes).
- **Acessibilidade:** público sénior com literacia digital limitada — legibilidade alta e contraste elevado são requisito de marca (não só de site); isto vincula directamente o gate WCAG AA da fase 05.
- **Língua:** Português Europeu (PT-PT) em toda a identidade e nos artefactos.
- **Plataforma:** o site será implementado em **WordPress** (cenário B do brief) — todos os artefactos técnicos da marca (tokens, componentes) têm de ser consumíveis por um tema WordPress próprio, sem passos de build obrigatórios.
- **Sem bibliotecas de UI externas:** o design system é **100% personalizado** — **não usar Tailwind CSS, shadcn/ui nem qualquer outra framework/biblioteca de UI externa**. Apenas HTML + CSS nativo (custom properties) construídos a partir dos tokens da marca.

> **Nota de requisitos:** a tensão entre o logótipo (traço simples, cor saturada) e a referência premium/clean admirada (Residências Montepio) não é um não-negociável em si — é o problema criativo central que a fase 04 tem de resolver dentro destas restrições. Fica registada aqui para que a fase 04 não a perca de vista, mas a resolução (como enquadrar o logo) não é decidida neste documento.

## Direcção geral acordada
**Centro de gravidade estético:** entre o sóbrio/institucional e o quente/humano, mais perto do registo premium/clean — sem nunca cair no frio ou corporativo, dado que a personalidade (Próxima, Calorosa) exige que o "clean" nunca leia como distante.

**Nível de abstracção:** literal — fotografia real de pessoas e lugares como elemento central da identidade, ao serviço da proximidade e da confiança (alinhado com a referência Residências Montepio).

**Admira:** os três sites de referência (scmc.pt, cpestoril.pt, residenciasmontepio.pt), sobretudo o registo premium/clean do Residências Montepio — fundos claros, fotografia cuidada, tipografia moderna.

**Rejeita:** o estilo "site de IPSS antigo" — menus densos, clip-art, cores saturadas sem disciplina, aspecto anos 2000.

**Estilo da casa:** moderno, atractivo, minimalista — mas sempre humano, nunca corporativo frio.

> **Nota de requisitos:** a escolha por um registo literal (fotografia real como protagonista) torna o não-negociável de RGPD/consentimentos (secção anterior) directamente accionável na fase 04 — o sistema tem de prever desde já uma estratégia de imagem sem depender de fotografia real disponível de imediato (ex.: guidelines de estilo fotográfico + alternativa gráfica disciplinada enquanto os consentimentos não existem).

## Requisitos da identidade visual (fase 04)
- **Logótipo:** o logótipo actual mantém-se tal e qual (traço + três cores) como marca principal — intocável. A fase 04 deve derivar dele: uma versão **monocromática** (para aplicações sem cor viável — ex.: gravação, sinalética) e uma versão **reduzida/ícone** (para favicon, redes sociais, espaços pequenos). Nenhuma variação pode alterar a forma do símbolo original.
- **Paleta (papéis):** primária, secundária(s), neutros e semânticas (sucesso/aviso/erro, se aplicável ao contexto institucional) — todas ancoradas nas três cores do logótipo (verde, azul, laranja), harmonizadas e disciplinadas; valores exactos a decidir em 04.
- **Tipografia (papéis):** display (títulos, tom caloroso mas contemporâneo) e corpo (legibilidade alta, público sénior) — sem tipo mono, não aplicável a este contexto.
- **Iconografia / imagética:** fotografia real de pessoas e lugares como elemento central; guidelines de estilo fotográfico a definir para garantir coerência e consentimento; iconografia de apoio (se necessária) deve ser discreta, nunca clip-art.
- **Aplicações a considerar:** website/digital, redes sociais, papelaria (cartão, ofícios), sinalética do edifício.
- **Critérios de aceitação:** a fase 04 tem de entregar o logótipo original + as duas variações exigidas; uma paleta de papéis coerente com as três cores herdadas; tipografia legível e contemporânea alinhada com o registo premium/clean sem frieza; direcção fotográfica definida; e uma demonstração visual nas quatro aplicações listadas — tudo num `04-brand-visual-identity.html` auto-contido.

## Requisitos do design system (fase 05)
- **Plataforma-alvo:** WordPress — os tokens e componentes destinam-se a um tema WordPress próprio; o consumo faz-se por CSS nativo (custom properties) enfileirado no tema e, opcionalmente, mapeado em `theme.json`. Sem passos de build obrigatórios.
- **Sem bibliotecas externas:** design system **100% personalizado** — proibido Tailwind CSS, shadcn/ui ou qualquer outra framework/biblioteca de UI. Todos os componentes construídos com HTML + CSS próprios a partir dos tokens.
- **Componentes obrigatórios:** cores de texto, títulos, botões, links, cards, badges/estados, e um conjunto completo de **componentes de formulário** (admissão, contacto): input de texto, textarea, select, checkbox, radio, fieldset/legend, indicação de campo obrigatório, texto de ajuda, estado de erro com mensagem — **demonstrados em HTML**, incluindo um formulário exemplo completo com conteúdo real da AISA.
- **Estados a mostrar:** hover, focus, disabled e erro (formulários) — sem loading assíncrono relevante para este contexto institucional.
- **Convenção de tokens:** OKLCH semântico por papel, **sem hex**, nomes semânticos (ex.: `--color-text-primary`, não `--verde-1`).
- **Modo:** **apenas modo claro** — sem dark mode, por decisão do utilizador, dado o público sénior valorizar previsibilidade e legibilidade acima de tudo.
- **Acessibilidade:** WCAG AA como gate obrigatório — particularmente crítico aqui, dado o público sénior.
- **Coerência com o negócio:** todos os componentes têm de reflectir a personalidade da marca (IPSS próxima, calorosa, íntegra, serena) e o público sénior — alvos de clique generosos, corpo de texto nunca abaixo de 16px, mensagens de erro acolhedoras (nunca alarmistas), exemplos com conteúdo real da AISA (valências, candidaturas, donativos).
- **Entregáveis:** `05-brand-design-system.html` de referência + tokens consumíveis (`tokens/base.css`, `tokens/base.json`) + guia de consumo WordPress (`tokens/wordpress.md`) + `check-contrast.mjs`.
- **Critérios de aceitação:** todos os componentes listados (incluindo o conjunto de formulário completo) renderizados em modo claro com os tokens reais; gate de contraste a passar em AA; nenhuma referência a modo escuro, Tailwind ou shadcn no sistema.

> **Nota de requisitos:** esta é uma divergência deliberada do padrão habitual do pipeline (que por omissão exige claro e escuro) — confirmada pelo utilizador nesta fase, não uma omissão.

## Requisitos do manual (fase 06)
- **Secções:** essência da marca, logótipo (usos correctos/incorrectos, respiro/clear-space, tamanho mínimo, as duas variações — monocromática e reduzida), cores reproduzíveis (HEX/RGB/CMYK), tipografia, tom de voz (com os pares ✅/❌ da síntese), aplicações.
- **Público:** cliente não-técnico (equipa da AISA) — sem jargão de código visível (nada de OKLCH, variáveis ou tokens no manual).
- **Formato:** HTML auto-contido, imprimível para PDF a partir do browser.
- **Aplicações exigidas:** digitais — website, redes sociais; offline/impressas — papelaria (cartão, ofícios), sinalética do edifício. (Alinhado com as aplicações já fixadas na fase 04 — sem introduzir novas.)
- **Critérios de aceitação:** o manual tem de mostrar o logótipo (incluindo as duas variações) em uso correcto/incorrecto; cores com valores reproduzíveis; tipografia aplicada; tom de voz com exemplos; e as quatro aplicações listadas demonstradas visualmente — tudo compreensível por alguém sem background técnico, e pronto a imprimir.
