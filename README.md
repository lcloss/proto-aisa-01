# AISA — Website institucional

Projecto de website para a **AISA — Associação de Apoio Social Nossa Senhora da Assunção**, uma
IPSS fundada em 1992, sediada na Malveira da Serra (Alcabideche, Cascais). O projecto substitui o
site actual (`aisaipss.pt`) por um site novo, com identidade visual criada de raiz e conteúdo
alinhado com o público real da instituição.

> Este repositório é uma instalação WordPress. Todo o trabalho de planeamento, descoberta,
> marketing, marca e protótipo do projecto AISA vive em [`specs/`](specs/) — o resto da árvore
> (`wp-admin/`, `wp-content/`, etc.) é o core do WordPress.

## Cenário e âmbito

- **Cenário:** B — site institucional WordPress (sem loja, sem contas de utilizador).
- **Público:** famílias cuidadoras, utentes sénior autónomos e comunidade (doadores, voluntários,
  candidatos a emprego) da zona da Malveira da Serra e Janes.
- **Valências a apresentar:** ERPI, Centro de Dia, Apoio Domiciliário (SAD), Infância e Juventude,
  mais serviços complementares (fisioterapia, psicologia, terapia da fala).
- **Fora de âmbito na v1:** pagamento online de donativos (apenas informativo — IBAN, MB Way,
  consignação de IRS).

## Workflow

O projecto segue o tronco comum de fases da Closs Digital (skill `core-00-intake` e seguintes).
Estado actual (ver `specs/00-brief.md` para o roteiro detalhado):

| # | Fase | Estado |
|---|---|---|
| 0 | Intake | ✅ `00-brief.md` |
| 1 | Descoberta & Risco | ✅ `01-descoberta.md` — pressupostos por validar com o cliente |
| 2 | Marketing | ✅ `02-marketing.md` — idem |
| 3 | Identidade Visual | ✅ até ao design system; falta o manual de marca (`06-brand-manual`) |
| 4 | SEO & Conteúdo | ☐ não iniciado |
| 5-6 | Ramo B (tema/plugins WordPress) | ☐ não iniciado |

As fases 1-3 foram percorridas com pressupostos da agência, sem entrevista directa ao cliente.
`specs/00-questionario-cliente.md` foi preparado para validar esses pressupostos numa reunião com a
AISA, apoiado por `specs/prototipo-home.html`.

## Estrutura de `specs/`

```
specs/
├── 00-brief.md                    Classificação do projecto e roteiro de fases
├── 00-questionario-cliente.md     Guião de entrevista para validar pressupostos com o cliente
├── 01-descoberta.md               Descoberta (personas, proposta de valor, concorrência) e matriz de risco
├── 02-marketing.md                Posicionamento, canais, plano de lançamento, KPIs
├── 03-brand/                      Discussão, estratégia e requisitos da marca
├── 04-brand-visual-identity.html  Identidade visual (logótipo, paleta, tipografia, aplicações)
├── 05-brand-design-system.html    Design system técnico (tokens, componentes, formulários)
├── prototipo-home.html            Protótipo HTML da homepage, para a reunião com o cliente
├── tokens/                        Tokens de design consumíveis (base.css, base.json, guia WordPress)
├── img/                           Logótipo e activos gráficos da marca
├── scripts/                       Utilitários (ex.: check-contrast.mjs — gate WCAG AA)
└── pairs.json
```

## Marca

- **Logótipo:** mantém-se tal e qual (`specs/img/logo-aisa.png`) — não-negociável; a identidade
  visual constrói-se à volta dele.
- **Paleta:** ancorada nas três cores do logótipo — verde `#2E9A47`, azul `#1B75BC`, laranja
  `#E87722` — harmonizadas em OKLCH.
- **Tipografia:** `Fraunces` (títulos) + `Atkinson Hyperlegible` (corpo, alta legibilidade —
  público sénior).
- **Tom de voz:** próximo e caloroso ("tu"), nunca alarmista; registo visual premium/clean sem cair
  no frio institucional. Ver `specs/03-brand/03-brand-requirements.md` para os requisitos completos.
- **Modo:** apenas modo claro (decisão deliberada, dado o público sénior).

## Ver o protótipo localmente

`specs/prototipo-home.html` é auto-contido e consome `specs/tokens/base.css` e
`specs/img/logo-aisa.png` por caminho relativo. Para o ver correctamente (fontes e caminhos
relativos), serve a pasta `specs/` num servidor local em vez de abrir o ficheiro directamente:

```
cd specs
python -m http.server 8791
# depois abrir http://localhost:8791/prototipo-home.html
```

## Próximos passos

1. Reunião com o cliente usando `specs/00-questionario-cliente.md` (mostrar o protótipo depois do
   bloco 3 — marca).
2. Actualizar `01-descoberta.md`, `02-marketing.md` e `03-brand/03-brand-requirements.md` com as
   correcções da reunião.
3. Fechar o manual de marca (`06-brand-manual`).
4. Avançar para `04-seo.md` e depois para o ramo B (arquitectura, requisitos, tema e plugins
   WordPress).
