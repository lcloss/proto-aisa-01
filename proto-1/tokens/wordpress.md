# AISA — Consumo dos tokens num tema WordPress

Como usar os tokens do AISA (`base.css`) num tema WordPress próprio, **sem
bibliotecas externas** — sem Tailwind, sem shadcn/ui, sem frameworks de UI.
Apenas CSS nativo (custom properties) e os componentes do design system
(`05-brand-design-system.html`).

> Regra de ouro: `base.css` é a **fonte da verdade única**. O tema não redefine
> nenhum valor de cor/tipo/raio/sombra — consome as variáveis `--color-*`,
> `--text-*`, `--space-*`, etc. por referência.

## 1. Enfileirar os tokens no tema

Copia `tokens/base.css` para o tema (ex.: `assets/css/base.css`) e enfileira-o
**antes** da folha de estilos do tema:

```php
// functions.php
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'aisa-tokens',
        get_theme_file_uri( 'assets/css/base.css' ),
        array(),
        wp_get_theme()->get( 'Version' )
    );
    wp_enqueue_style(
        'aisa-theme',
        get_stylesheet_uri(),
        array( 'aisa-tokens' ), // depende dos tokens
        wp_get_theme()->get( 'Version' )
    );
} );
```

Para o editor de blocos ver as mesmas cores/tipos que o front-end:

```php
add_action( 'after_setup_theme', function () {
    add_theme_support( 'editor-styles' );
    add_editor_style( array( 'assets/css/base.css', 'assets/css/components.css' ) );
} );
```

## 2. `theme.json` (opcional, para a paleta do editor)

O `theme.json` serve apenas para expor a paleta ao editor de blocos — os
valores **apontam para as variáveis do base**, não os duplicam:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "color": {
      "defaultPalette": false,
      "palette": [
        { "slug": "primary",    "name": "Azul Confiança",  "color": "var(--color-primary)" },
        { "slug": "accent",     "name": "Laranja Próximo", "color": "var(--color-accent)" },
        { "slug": "background", "name": "Fundo",           "color": "var(--color-background)" },
        { "slug": "surface",    "name": "Superfície",      "color": "var(--color-surface)" },
        { "slug": "foreground", "name": "Texto",           "color": "var(--color-foreground)" }
      ]
    },
    "typography": {
      "fontFamilies": [
        { "slug": "display", "name": "Fraunces (títulos)",              "fontFamily": "var(--font-display)" },
        { "slug": "body",    "name": "Atkinson Hyperlegible (corpo)",   "fontFamily": "var(--font-body)" }
      ]
    }
  }
}
```

> **Nota:** o verde da marca (`--color-brand-green`) é decorativo — nunca
> carrega texto; por isso não entra na paleta do editor, para ninguém o
> aplicar a texto por engano.

## 3. Componentes (CSS próprio do tema)

As classes de componentes vivem numa folha do tema (ex.:
`assets/css/components.css`), copiadas/adaptadas do bloco `<style>` de
`05-brand-design-system.html`: `.btn` (+ variantes), `.card`, `.badge`,
`.alert`, e os componentes de formulário (`.field`, `.input`, `.textarea`,
`.select`, `.check-row`, fieldsets, estados de erro).

```css
/* exemplo — botão primário do tema, só com tokens */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
}
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:focus-visible { outline: none; box-shadow: var(--focus-ring); }
```

## 4. Formulários no WordPress

Os formulários de admissão/contacto usam a marcação e as classes demonstradas
na secção **Formulários** de `05-brand-design-system.html`. Se a fase de
plugins (b-08) escolher um plugin de formulários, o CSS do tema deve
sobrepor-se aos estilos do plugin para que os campos usem os tokens
(`--color-input`, `--focus-ring`, estados de erro com `--color-destructive`)
— o aspecto final tem de ser indistinguível do design system.

## 5. Validação

Antes de entregar qualquer alteração de cor, corre o gate de contraste:

```bash
node scripts/check-contrast.mjs --tokens tokens/base.css
node scripts/check-contrast.mjs pairs.json
```
