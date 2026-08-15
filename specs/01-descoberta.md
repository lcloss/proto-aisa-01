# Descoberta & Risco — AISA (Associação de Apoio Social Nossa Senhora da Assunção)

> Fase 1 do tronco. Cenário: **B — Site WordPress (institucional)** · Profundidade: leve.
> Baseado em `00-brief.md`, conversa de descoberta com o utilizador (2026-07-03) e pesquisa web.

## Parte I — Descoberta

### Problema / objectivo
> A AISA precisa de um site que **informe e credibilize** a instituição junto da comunidade de Alcabideche/Cascais, **capte utentes e inscrições** para as suas valências, **receba candidaturas** (emprego e voluntariado) e **apoie a recolha de donativos**.

A AISA é uma IPSS fundada em 1992, sediada na Malveira da Serra (Alcabideche, Cascais), que serve a população da Malveira da Serra e Janes nas áreas do envelhecimento, dependência e infância/juventude. O site actual (aisaipss.pt) está desalinhado dos objectivos institucionais e do público-alvo; não existe identidade visual construída além do logótipo, pelo que a marca será criada de raiz (fase 3, pipeline completo) e o conteúdo escrito do zero.

**Nota factual:** o brief referia o domínio `aisaspss.pt`, que não responde. O domínio actual correcto é **aisaipss.pt** — confirmado pelo utilizador.

### Público-alvo

#### Persona 1 — Filha/filho cuidador
- Contexto: 45-60 anos, activo profissionalmente, procura resposta (centro de dia, SAD ou ERPI) para um familiar idoso na zona de Alcabideche/Cascais.
- Dor / intenção: precisa de confiança, clareza sobre valências, vagas, comparticipações e um contacto fácil; compara instituições online antes de telefonar.
- O que faz hoje em alternativa: pesquisa no Google, compara SCMC, privados (Montepio, Cascais Care) e recomendações boca-a-boca; liga directamente para a AISA.

#### Persona 2 — Utente sénior autónomo
- Contexto: 65+, residente na Malveira da Serra/Janes, interessa-se pelas actividades do centro de dia e serviços (fisioterapia, convívio).
- Dor / intenção: quer perceber o que a AISA oferece, horários e como se inscrever; exige legibilidade alta, linguagem simples e telefone bem visível.
- O que faz hoje em alternativa: desloca-se presencialmente ou telefona; depende de familiares para consultar o site.

#### Persona 3 — Membro activo da comunidade (doador, voluntário, candidato)
- Contexto: particulares e empresas locais, paroquianos, candidatos a emprego no sector social.
- Dor / intenção: quer saber como apoiar (donativo, consignação de IRS, voluntariado) ou candidatar-se a uma vaga; procura transparência institucional.
- O que faz hoje em alternativa: contacto directo ou redes sociais (a página de Facebook da AISA está activa); vagas via portais de emprego.

### Âmbito
- **Tipo de site:** institucional (IPSS), WordPress.
- **Dimensão estimada:** ~15-25 páginas, monolingue (PT), sem loja.
- **Conteúdo nuclear:** instituição (quem somos, história, órgãos sociais), 4 valências — **ERPI (existe e funciona), centro de dia, SAD, apoio à infância/juventude** —, serviços complementares (fisioterapia, psicologia, terapia da fala), notícias/actividades, donativos (informativo: IBAN, MB Way, consignação de IRS — **sem pagamento online na v1**), candidaturas (emprego e voluntariado, com formulário), contactos/pedido de informação ou inscrição.

### Proposta de valor
A resposta social de proximidade da Malveira da Serra e Janes: a AISA cuida da comunidade da infância ao envelhecimento, com equipa local e acordos de comparticipação.

**Diferenciação:** proximidade territorial (única IPSS da sua zona de influência directa) + leque intergeracional (infância e seniores na mesma casa). *Hipótese a validar — a diferenciação assenta na geografia; fora da zona, a concorrência é mais forte.*

### Concorrência
| Concorrente | Mercado | Diferenciador | Sinais de estrutura/stack | Fonte |
|---|---|---|---|---|
| Santa Casa da Misericórdia de Cascais | PT — Cascais | Instituição grande e multi-área (social, educação, saúde, farmácia); notícias muito activas; campanha de consignação de IRS | WordPress, tema à medida ("st4rt3r_theme"), AIOSEO; agência Websystems | https://www.scmc.pt/ |
| Centro Paroquial do Estoril | PT — Estoril | IPSS paroquial com CTAs fortes de donativos/voluntariado, contadores de impacto, newsletter (Brevo) | WordPress + WPBakery (page builder), agência Pixelify | https://cpestoril.pt/ |
| Residências Montepio | PT — nacional (privado) | Rede premium de residências sénior; testemunhos, visitas virtuais, formulários com consentimento explícito | WordPress + Elementor, GTM/analytics; agência Digital Xperience | https://residenciasmontepio.pt/ |
| Cascais Care | PT — Cascais (privado) | SAD privado local, posicionamento comercial directo | Site próprio de serviços | https://apoiodomiciliario.com/ |

Nota de mercado: os três sites de referência do cliente são todos WordPress — é o padrão do sector. As IPSS vizinhas mais pequenas (ex.: AISI, Murches) têm presença web fraca ou inexistente, o que reforça a oportunidade de a AISA se destacar localmente com um site moderno e acessível.

### Modelo de negócio e restrições
- **Modelo:** institucional (IPSS) — acordos com a Segurança Social, mensalidades comparticipadas, donativos e consignação de IRS. O site não gera receita directa; gera contactos, candidaturas e confiança.
- **Orçamento/prazo:** orçamento por definir; prazo indicativo **1-2 meses** — mantido por decisão do utilizador e registado como risco (#4).
- **Quem mantém:** conteúdos — equipa da AISA (não técnica); manutenção técnica — **por definir** (risco #3).
- **Branding existente:** apenas o logótipo (`specs/logo-aisa.png`); identidade visual a criar de raiz (fase 3, pipeline completo).
- **Integrações obrigatórias:** nenhuma identificada nesta fase.
- **Conteúdo a migrar:** nenhum — tudo criado de novo. Avaliar redireccionamentos 301 do site actual (risco #8).
- **Infra:** domínio **aisaipss.pt** e hosting actuais mantêm-se; especificações desconhecidas — auditar antes da arquitectura (risco #5).

## Parte II — Risco

### Riscos kill-switch (top 3)
1. **RGPD nos formulários** — inscrições de utentes (dados potencialmente de saúde), candidaturas com CV e pedidos de contacto tratam dados pessoais. Sem base legal, minimização e retenção definidas, uma IPSS expõe-se a coima e dano reputacional grave. *Despiste imediato: inventariar os dados de cada formulário antes do desenvolvimento; a decisão "donativos informativos, sem pagamento online" já reduziu a superfície.*
2. **Manutenção sem plano técnico** — equipa não técnica + hosting desconhecido + WordPress (o CMS mais atacado do mundo). Sem plano de updates, backups testados e segurança, o site degrada-se até ao compromisso. *Despiste: fechar o modelo de manutenção (proposta: misto — AISA edita conteúdos, Closs Digital assume a técnica) antes do lançamento.*
3. **Conteúdo não entregue a tempo** — a AISA fornece material bruto e o prazo é 1-2 meses com pipeline de marca completo; se o conteúdo atrasar, o projecto pára. *Despiste: calendário de entregas e sessão de levantamento logo no arranque da fase de conteúdo.*

### Matriz de risco
| # | Risco | Categoria | Prob. | Impacto | Severidade | Mitigação |
|---|---|---|---|---|---|---|
| 1 | Conteúdo bruto da AISA atrasa a produção | Conteúdo & migração | 4 | 4 | 16 ⚠️ | Calendário de entregas, sessão de levantamento, redacção pela agência sobre material mínimo |
| 2 | RGPD: formulários com dados sensíveis sem enquadramento | Legal / RGPD | 3 | 5 | 15 ⚠️ | Minimização de dados, consentimento explícito, política de privacidade, prazos de retenção (CVs), avisos nos formulários |
| 3 | Ausência de plano de manutenção técnica pós-lançamento | Manutenção & operação | 4 | 4 | 16 ⚠️ | Contrato de manutenção (updates, backups testados, staging); formação da equipa AISA no backoffice |
| 4 | Prazo 1-2 meses incompatível com pipeline de marca completo | Custo | 4 | 3 | 12 | Paralelizar fases (marca ‖ arquitectura), gates de decisão rápidos, lançamento faseado |
| 5 | Hosting actual inadequado (PHP, SSL, backups, e-mail desconhecidos) | Alojamento & infra-estrutura | 3 | 4 | 12 | Auditoria de infra antes da fase de arquitectura; plano B de migração de hosting |
| 6 | Segurança WP: plugins vulneráveis, login exposto, sem WAF | Segurança WP | 3 | 4 | 12 | Mínimo de plugins, auditados e mantidos; 2FA; hardening; WAF/CDN |
| 7 | Performance fraca (imagens pesadas, hosting partilhado) | Performance | 3 | 3 | 9 | Optimização de imagens, caching, CDN, tema leve |
| 8 | Substituição do site sem 301 → perda de posicionamento local | Conteúdo & migração | 2 | 3 | 6 | Mapa de redireccionamentos do site actual antes do go-live |
| 9 | Page builder com lock-in dificulta manutenção futura | Técnico/WP | 2 | 3 | 6 | Blocos nativos (Gutenberg) e tema à medida leve, sem builder proprietário |
| 10 | Pressão futura para donativos online (gateway, custos, RGPD) | Dependências externas | 2 | 2 | 4 | V1 informativa (IBAN, MB Way, IRS) — decidido; reavaliar gateway apenas com procura demonstrada |

### Notas por categoria

#### Legal / RGPD
Dados tratados: identificação e contacto (formulários de contacto/inscrição), dados potencialmente relacionados com saúde e dependência (pedidos de admissão em ERPI/SAD/centro de dia), CVs e dados profissionais (candidaturas), dados de navegação (cookies/analytics). Base legal a definir por formulário (consentimento/diligências pré-contratuais); retenção limitada (CVs ≤ 1-2 anos com consentimento); alojamento e subcontratantes a confirmar na auditoria de infra; banner de consentimento de cookies obrigatório. PT: RGPD.

#### Mercado
Examinado — risco baixo, sem entrada na matriz: a AISA serve um território específico (Malveira da Serra/Janes) sem sobreposição directa; SCMC e CPE operam noutras zonas do concelho e o privado (Montepio, Cascais Care) serve outro segmento de preço. A geografia protege, mas também limita — ver hipóteses.

#### Custo
Sem orçamento definido, o risco material é o desalinhamento entre expectativa do cliente e o esforço do pipeline completo (marca + site + conteúdo). Apurar orçamento na proposta antes da fase 2.

## Hipóteses a validar
- [ ] Existe procura online real (pesquisas locais) por vagas em centro de dia/SAD/ERPI na zona de Alcabideche — valida o objectivo de captação de utentes.
- [ ] A comunidade responde a apelos de donativos/voluntariado feitos através do site (vs. canais presenciais e Facebook).
- [ ] A diferenciação "proximidade + intergeracional" sustenta-se fora da zona imediata de influência.

## Pressupostos e lacunas
- [ ] Orçamento do projecto — por apurar (afecta âmbito da fase 3 e risco #4).
- [ ] Especificações do hosting actual (fornecedor, PHP, SSL, backups, e-mail) — auditar antes da arquitectura.
- [ ] Modelo de manutenção técnica pós-lançamento — por fechar com o cliente (kill-switch #2).
- [ ] Detalhe das valências (capacidades, vagas, horários, comparticipações) — levantar na fase de conteúdo.
- [ ] Existência de relatórios e contas publicáveis (transparência para doadores/parceiros).
- [ ] Direitos e consentimentos das fotografias de utentes/crianças a usar no site.
