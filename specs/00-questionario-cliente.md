# Questionário de entrevista ao cliente — AISA

> Fase 0 do tronco (produzido a posteriori, em revisão — 2026-08-15). As fases 1-3 já foram
> percorridas com **pressupostos da agência**, sem entrevista directa ao cliente. Este guião não
> parte do zero: confirma ou corrige o que já está escrito em `01-descoberta.md`, `02-marketing.md`
> e `specs/03-brand/*`. Cada pergunta mostra o pressuposto assumido — o cliente confirma ou corrige.
> Preenche com as respostas da AISA antes de avançar para `04-seo.md` e para o ramo B (WordPress).

## Como usar este guião na reunião
- Percorre secção a secção; onde há "✅ assumido:", lê o pressuposto em voz alta e pede confirmação
  ou correcção — não reabras a pergunta do zero.
- As perguntas sem "✅ assumido" são lacunas reais (ver `01-descoberta.md` § Pressupostos e lacunas,
  `02-marketing.md` § Pressupostos) — aqui é preciso resposta nova.
- Mostra o protótipo (`specs/prototipo-home.html`) depois do bloco 3 (marca) — a reacção do cliente
  ao protótipo é o teste mais directo dos pressupostos de posicionamento e identidade visual.

## 1. Descoberta — confirmar o essencial
| Pergunta | Pressuposto / porquê |
|---|---|
| O domínio actual é `aisaipss.pt` (não `aisaspss.pt`, que não responde)? | ✅ assumido: confirmado numa conversa anterior — reconfirmar por segurança. |
| A missão é "informar e credibilizar a instituição, captar utentes, receber candidaturas (emprego/voluntariado) e apoiar a recolha de donativos"? | ✅ assumido — é a espinha dorsal de todo o site. Falta algum objectivo (ex.: reportar transparência financeira, apresentar parceiros)? |
| As valências a apresentar são: ERPI, centro de dia, SAD e apoio à infância/juventude, mais serviços complementares (fisioterapia, psicologia, terapia da fala)? | ✅ assumido — confirmar nomes oficiais, capacidades, vagas actuais e horários de cada valência (por levantar em conteúdo). |
| As três personas fixadas — (1) filho/a cuidador de idoso, (2) utente sénior autónomo, (3) comunidade (doador/voluntário/candidato) — cobrem o público real? Falta alguma (ex.: assistente social que encaminha, parceiro institucional, Segurança Social)? | ✅ assumido — validar prioridade relativa entre elas. |
| Existem relatórios de contas ou relatório de actividades publicáveis, para transparência junto de doadores? | Lacuna nova — pedido de material. |
| Há fotografias de utentes/crianças com consentimento já dado para uso público (site, redes)? Ou parte-se do zero? | Lacuna nova, crítica — condiciona a direcção fotográfica da fase 04 (ver bloco 3). |
| Prazo e orçamento aproximados — mantém-se "1-2 meses" e orçamento por definir? | Lacuna nova — o prazo foi registado como risco (#4 na matriz), a confirmar se ainda é rígido. |
| Domínio/hosting actuais: quem gere, que fornecedor, é para manter ou mudar? | Lacuna nova — condiciona a arquitectura (ramo B). |
| Quem produz o conteúdo textual e fotográfico final — equipa da AISA, a agência, ou os dois? | Lacuna nova — risco #1 (conteúdo atrasa produção) depende disto. |
| Quem faz a manutenção técnica pós-lançamento (updates, backups, segurança)? | Lacuna nova — risco #2 (kill-switch). |

## 2. Marketing — confirmar posicionamento e canais
| Pergunta | Pressuposto / porquê |
|---|---|
| A mensagem central proposta é **"Perto de si, a cuidar dos seus — da infância ao envelhecimento"**. Soa à AISA? | ✅ assumido — é o eixo de toda a comunicação; se não ressoar, tudo a jusante muda. |
| A diferenciação assenta em "proximidade territorial (única IPSS da zona) + leque intergeracional (infância e seniores na mesma casa)". Reconhecem-se nisto, ou há outra vantagem mais forte (ex.: equipa, instalações, parcerias)? | ✅ assumido — hipótese por validar (`01-descoberta.md`). |
| O site tem donativos apenas informativos (IBAN, MB Way, consignação de IRS), sem pagamento online na v1. Mantém-se? | ✅ assumido — decisão que reduz risco RGPD/PCI; confirmar se há pressão para gateway já. |
| A AISA tem ficha no Google Business Profile? Está reclamada/actualizada? | Lacuna nova — condiciona o canal SEO local prioritário. |
| Existe lista de e-mails/contactos (doadores, famílias, voluntários) para eventualmente usar em newsletter? | Lacuna nova. |
| A AISA é elegível/está registada no TechSoup Portugal ou Google para Nonprofits (para o Google Ad Grants proposto em `02-marketing.md`)? | Lacuna nova — a proposta de Ads é apenas uma sugestão para o cliente decidir. |
| Quem gere hoje a página de Facebook e responderia por GBP/redes após o lançamento? | Lacuna nova — alinhar com quem faz manutenção (bloco 1). |

## 3. Marca — reagir ao trabalho já feito
> Pressupostos já fixados em `03-brand-requirements.md` — o logótipo mantém-se tal e qual, a paleta
> parte das três cores do logótipo (verde #2E9A47, azul #1B75BC, laranja #E87722), tom de voz "tu"
> próximo/caloroso, registo visual premium-clean mas nunca frio, fotografia real como elemento
> central. **Mostra o protótipo aqui.**

| Pergunta | Pressuposto / porquê |
|---|---|
| Ao ver o protótipo: a identidade visual (cores, tipografia, tom) parece-vos a AISA, ou sente-se "genérica"/"não é a nossa cara"? | Teste directo de `04-brand-visual-identity.html` — pergunta aberta, deixar reagir primeiro sem sugestionar. |
| O logótipo mantém-se exactamente como está hoje (`img/logo-aisa.png`) — confirmam que não querem redesenho, só aplicações novas (mono, ícone)? | ✅ assumido — não-negociável fixado; confirmar que continua a ser vontade do cliente. |
| O tom de voz "próximo, caloroso, nunca alarmista mesmo em apelos a donativos" reflecte como a equipa fala hoje com famílias e comunidade? | ✅ assumido — testar com os pares ✅/❌ do `03-brand-requirements.md` (ex.: "o Sr. António" vs. linguagem de processo). |
| Têm marca gráfica/cores a evitar (ex.: associação a outra instituição, cor usada por concorrente próximo)? | Restrição nova, não levantada ainda. |
| Além do site, onde mais vai aparecer esta identidade a curto prazo (papelaria, sinalética, viaturas, uniformes)? | Confirma o âmbito de aplicações da fase 04/06 — hoje limitado a digital + papelaria + sinalética. |

## 4. Reacção ao protótipo (registar durante a reunião)
- [ ] Primeira impressão (sem prompting) — o que dizem antes de qualquer pergunta dirigida.
- [ ] Alguma secção/valência em falta ou com prioridade errada na hierarquia da homepage?
- [ ] O CTA de donativos/candidaturas está no sítio certo, com o tom certo?
- [ ] Alguma objecção a fotografia genérica de referência usada no protótipo (recordar: fotografia real depende de consentimentos — ver bloco 1).

## Notas de preenchimento
Perguntas marcadas "✅ assumido" já têm resposta de trabalho nos artefactos existentes
(`01-descoberta.md`, `02-marketing.md`, `specs/03-brand/03-brand-requirements.md`) — a reunião serve
para as **confirmar ou corrigir**, não para as descobrir de raiz. Após a reunião, actualizar esses
três ficheiros com as correcções antes de avançar para `04-seo.md`.
