# Requisitos de fundação — i18n e páginas de erro

Dois requisitos transversais que **toda** a arquitetura tem de respeitar. As **decisões** fixam-se aqui, no `05-system-architecture.md`; a **implementação** materializa-se numa implementação de fundação cedo no plano do project manager (07) — tipicamente a primeira fase (`07-01-*`). Lê este ficheiro na Etapa 2, ao desenhar as decisões transversais.

---

## 1. Multi-idioma (i18n) de raiz

A aplicação tem de suportar múltiplos idiomas **desde o início**, não como acrescento posterior. O `04-seo.md` define o âmbito i18n a nível de SEO (PT/BR, hreflang, URLs); aqui garante-se a **fundação técnica** no Laravel.

### Decisões a fixar no `05-system-architecture.md`

- **Sistema de localização nativo do Laravel.** Usar `__()` / `trans()` e ficheiros de tradução; nada de strings cravadas no código (backend ou frontend).
- **Locale por omissão e locales suportados** — derivar do `04-seo.md`. Por omissão, PT como base.
- **Ficheiros de tradução do Laravel publicados e traduzidos para Português (pt-PT).**

### Tarefa concreta (entra na implementação de fundação, criada pelo PM)

1. **Publicar os ficheiros de tradução do Laravel:**
   ```
   php artisan lang:publish
   ```
   ⚠️ Em Laravel 11/12/13 este comando publica para `./lang` na **raiz do projecto** (não `resources/lang`). O developer deve trabalhar em `lang/`.

2. **Traduções oficiais pt-PT.** Os ficheiros publicados (`auth.php`, `validation.php`, `passwords.php`, `pagination.php`) vêm em inglês. Obter as traduções oficiais pt-PT — tipicamente via o pacote da comunidade `laravel-lang/lang`:
   ```
   composer require --dev laravel-lang/lang
   php artisan lang:add pt_PT
   php artisan lang:update
   ```
   (ou copiar manualmente os ficheiros pt-PT mantidos pela comunidade).

3. **Strings da aplicação:** `lang/pt.json` (ou `lang/pt_PT.json`) para as strings próprias do produto via `__('...')`. Subdirectórios `lang/{locale}/` para os ficheiros de grupo.

4. **Frontend (Inertia/React):** passar as traduções necessárias para o lado React (via partilha Inertia ou um helper de `trans`), para que a SPA não tenha strings cravadas.

### Critérios de aceitação (a herdar na implementação)

- `php artisan lang:publish` corrido; diretório `lang/` existe.
- Mensagens de validação e autenticação aparecem em Português correcto.
- Nenhuma string visível ao utilizador está cravada no código — todas passam por `__()` / sistema de tradução.
- Trocar o locale da app reflecte-se nas mensagens nativas do Laravel.

---

## 2. Páginas de erro

A aplicação tem de ter páginas de erro próprias, alinhadas com o design system, para os códigos HTTP principais. A **implementação** entra cedo no plano do PM (fundação), não fica para o fim.

### Códigos a cobrir (mínimo)

- **404** — Not Found · **403** — Forbidden · **413** — Payload Too Large · **419** — Page Expired (CSRF/sessão) · **429** — Too Many Requests · **500** — Server Error · **503** — Service Unavailable

Ajustar a lista ao produto: um SaaS com uploads pesados dá destaque ao 413; um com APIs públicas, ao 429.

### Decisões a fixar no `05-system-architecture.md`

- **Mecanismo:** views Blade em `resources/views/errors/{code}.blade.php` (o Laravel resolve-as automaticamente). Publicar os stubs com:
  ```
  php artisan vendor:publish --tag=laravel-errors
  ```
- **Design:** cada página usa os tokens e o layout do design system (cores, tipografia, logótipo) — não as páginas genéricas do Laravel.
- **i18n:** o texto das páginas de erro também passa pelo sistema de tradução (liga-se ao requisito 1).
- **413 em particular:** rever os limites de upload (`post_max_size`, `upload_max_filesize`, validação Laravel) e garantir que o utilizador recebe a página/mensagem em vez de um erro cru do servidor.

### Critérios de aceitação (a herdar na implementação)

- Cada código listado tem uma view própria em `resources/views/errors/`.
- As páginas usam o design system (não o estilo por omissão do Laravel).
- O texto está traduzido (PT por omissão).
- Forçar cada erro (rota inexistente → 404; upload grande → 413; etc.) mostra a página personalizada.
