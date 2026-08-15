# Brief — AISA (Associação de Apoio Social Nossa Senhora da Assunção)

> Fase 0 do tronco. Gerado por core-00-intake em 2026-07-03.

## Classificação
- **Cenário:** B — WordPress (site institucional)
- **Nota de híbrido:** nenhuma — sem componente de e-commerce/subscrições identificada nesta fase.
- **Cliente:** AISA — Associação de Apoio Social Nossa Senhora da Assunção (IPSS)
- **Prazo / orçamento aproximados:** ainda não definidos

## Resumo do pedido
A AISA já tem website (https://aisaspss.pt) mas quer um site novo, mais moderno, mais alinhado com os seus objectivos institucionais e, sobretudo, mais adequado ao seu público-alvo. Não existe identidade visual construída — apenas o logótipo (`specs/img/logo-aisa.png`), pelo que a identidade visual terá de ser criada de raiz. O cliente indicou três sites de referência do sector social/apoio à terceira idade em Portugal: scmc.pt, cpestoril.pt e residenciasmontepio.pt.

## Material disponível
- **Marca:** apenas o logótipo (`specs/img/logo-aisa.png`) — sem manual de marca, paleta, tipografia ou tom de voz definidos.
- **Conteúdo:** nada a reaproveitar do site actual — conteúdo será criado do zero na fase de descoberta/conteúdo.
- **Acessos/infra:** ainda não fornecidos (domínio/hosting a confirmar mais tarde).
- **Referências visuais/funcionais indicadas pelo cliente:**
  - https://www.scmc.pt/
  - https://cpestoril.pt/
  - https://residenciasmontepio.pt/

## Roteiro do projecto
| # | Fase | Skill | Profundidade | Estado |
|---|---|---|---|---|
| 1 | Descoberta & Risco | core-01-descoberta | Leve | ☑ `01-descoberta.md` — pressupostos por validar com o cliente (ver `00-questionario-cliente.md`) |
| 2 | Marketing | core-02-marketing | Leve | ☑ `02-marketing.md` — idem |
| 3 | Identidade Visual | Pipeline brand completo: 01-brand-idea-discussion → 02-brand-strategist → 03-brand-requirements → 04-brand-visual-identity → 05-brand-design-system → 06-brand-manual | Completo | ☑ até `05-brand-design-system.html`; falta **06-brand-manual** |
| 4 | SEO & Conteúdo | core-04-seo | Completo | ☐ não iniciado |
| 5-6 | Ramo B (WordPress) | b-04-wp-architecture → b-05-wp-requirements → b-06-wp-seo-checklist → b-07-wp-theme → b-08-wp-plugins (+ b-09/b-10 se aplicável) | Template + conteúdo | ☐ não iniciado — `specs/prototipo-home.html` é um protótipo de reunião, não o ramo B |

**Nota de processo (2026-08-15):** as fases 1-3 foram percorridas com pressupostos da agência, sem
entrevista directa ao cliente. `00-questionario-cliente.md` foi produzido a posteriori para validar
esses pressupostos numa reunião com a AISA, apoiado por `prototipo-home.html`. Depois da reunião,
actualizar `01-descoberta.md`, `02-marketing.md` e `03-brand/03-brand-requirements.md` com as
correcções antes de avançar para `04-seo.md`.

**Desvios à matriz e porquê:**
- Fase 3 (Identidade Visual) subida de "Express" (padrão para cenário B) para **Completo**: a AISA não tem identidade visual construída, só o logótipo — é necessário o pipeline completo de marca (posicionamento, requisitos, identidade visual, design system, manual) em vez do atalho express.

## Questões em aberto para a fase 1
- [ ] Público-alvo detalhado do site (utentes/famílias, doadores, voluntários, parceiros institucionais?) e prioridades entre eles.
- [ ] Respostas sociais / valências da AISA a apresentar no site (ex.: lar, apoio domiciliário, centro de dia, etc.) — levantar junto do cliente.
- [ ] Objectivos funcionais do site novo (informar, captar donativos, recrutar voluntários, divulgar vagas, formulários de contacto/inscrição?).
- [ ] Prazo e orçamento aproximados — ainda não definidos, a apurar na descoberta.
- [ ] Domínio/hosting: manter aisaspss.pt ou migrar? Acessos técnicos actuais.
- [ ] Conteúdo textual e fotográfico: quem produz (equipa da AISA, agência, ambos)?
