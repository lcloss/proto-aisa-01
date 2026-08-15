#!/usr/bin/env node
/**
 * check-contrast.mjs — WCAG AA contrast validation for OKLCH design tokens.
 *
 * Self-contained: no external dependencies. Converts OKLCH → sRGB internally
 * (OKLCH → OKLab → linear sRGB → gamma sRGB), computes WCAG 2.x relative
 * luminance and contrast ratios, and checks declared text-on-surface pairs
 * against AA thresholds (4.5:1 normal text, 3:1 large text / UI components).
 *
 * This runs at GENERATION TIME as a gate — it is the non-visual counterpart to
 * the live page's runtime contrast read-out. If any required pair fails AA, the
 * script exits non-zero so the skill can stop and fix the palette before
 * delivering. The numbers here should match what the browser paints, since both
 * sides start from the same OKLCH token values.
 *
 * USAGE:
 *   node check-contrast.mjs <pairs.json>
 *   node check-contrast.mjs --tokens tokens/base.css   (auto-pairs *-foreground)
 *
 * pairs.json shape:
 *   {
 *     "pairs": [
 *       { "name": "texto sobre superfície",
 *         "fg": "oklch(0.21 0.02 264)", "bg": "oklch(0.98 0 0)",
 *         "large": false },
 *       ...
 *     ]
 *   }
 *
 * You may pass colours either as full `oklch(L C H)` strings or as the bare
 * triple "L C H" (L in 0..1, C ≥ 0, H in degrees). Alpha is ignored for the
 * ratio (WCAG contrast assumes the text is composited onto the surface).
 */

import { readFileSync } from "node:fs";

// ---------- colour conversion: OKLCH -> sRGB ----------

function parseOklch(input) {
  if (typeof input !== "string") throw new Error(`colour must be a string: ${input}`);
  let s = input.trim();
  const m = s.match(/^oklch\(\s*([^)]+)\)$/i);
  if (m) s = m[1];
  // split on whitespace and/or slash (drop any alpha after '/')
  s = s.split("/")[0].trim();
  const parts = s.split(/[\s,]+/).filter(Boolean);
  if (parts.length < 3) throw new Error(`cannot parse OKLCH from "${input}"`);
  const L = parseNumber(parts[0], { pctOf: 1 });
  const C = parseNumber(parts[1], { pctOf: 0.4 });
  const H = parts[2] === "none" ? 0 : parseFloat(parts[2]);
  return { L, C, H };
}

function parseNumber(tok, { pctOf }) {
  if (tok === "none") return 0;
  if (tok.endsWith("%")) return (parseFloat(tok) / 100) * pctOf;
  return parseFloat(tok);
}

function oklchToOklab({ L, C, H }) {
  const h = (H * Math.PI) / 180;
  return { L, a: C * Math.cos(h), b: C * Math.sin(h) };
}

function oklabToLinearSrgb({ L, a, b }) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  return {
    r: +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    g: -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    b: -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  };
}

function gammaEncode(c) {
  const abs = Math.abs(c);
  const v = abs <= 0.0031308 ? 12.92 * abs : 1.055 * abs ** (1 / 2.4) - 0.055;
  return Math.sign(c) * v;
}

function clamp01(x) {
  return Math.min(1, Math.max(0, x));
}

/** OKLCH string -> { r,g,b } in 0..1 sRGB gamma space (gamut-clamped). */
function oklchToSrgb(input) {
  const lin = oklabToLinearSrgb(oklchToOklab(parseOklch(input)));
  return {
    r: clamp01(gammaEncode(lin.r)),
    g: clamp01(gammaEncode(lin.g)),
    b: clamp01(gammaEncode(lin.b)),
  };
}

// ---------- WCAG luminance + contrast ----------

function channelLuminance(c) {
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance({ r, g, b }) {
  return (
    0.2126 * channelLuminance(r) +
    0.7152 * channelLuminance(g) +
    0.0722 * channelLuminance(b)
  );
}

function contrastRatio(fg, bg) {
  const L1 = relativeLuminance(oklchToSrgb(fg));
  const L2 = relativeLuminance(oklchToSrgb(bg));
  const [hi, lo] = L1 >= L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}

// ---------- token extraction (optional --tokens mode) ----------

function extractTokens(css) {
  // grabs `--name: oklch(...);` declarations into a map
  const map = {};
  const re = /(--[\w-]+)\s*:\s*(oklch\([^;]+\)|[\d.]+\s+[\d.]+\s+[-\d.]+)\s*;/gi;
  let m;
  while ((m = re.exec(css)) !== null) map[m[1]] = m[2].trim();
  return map;
}

function autoPairs(tokens) {
  // Pair every `--color-X-foreground` with `--color-X`, and every
  // `--color-foreground`/`--color-X` text token with `--color-surface`/`--color-background`.
  const pairs = [];
  for (const key of Object.keys(tokens)) {
    const fgMatch = key.match(/^(--color-.+)-foreground$/);
    if (fgMatch && tokens[fgMatch[1]]) {
      pairs.push({
        name: `${fgMatch[1]}-foreground sobre ${fgMatch[1]}`,
        fg: tokens[key],
        bg: tokens[fgMatch[1]],
        large: false,
      });
    }
  }
  return pairs;
}

// ---------- runner ----------

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("usage: node check-contrast.mjs <pairs.json> | --tokens base.css");
    process.exit(2);
  }

  let pairs = [];
  if (args[0] === "--tokens") {
    const css = readFileSync(args[1], "utf8");
    pairs = autoPairs(extractTokens(css));
    if (pairs.length === 0) {
      console.error("No `*-foreground` token pairs found to check.");
      process.exit(2);
    }
  } else {
    const cfg = JSON.parse(readFileSync(args[0], "utf8"));
    pairs = cfg.pairs || [];
  }

  let failures = 0;
  const rows = [];
  for (const p of pairs) {
    const ratio = contrastRatio(p.fg, p.bg);
    const threshold = p.large ? 3.0 : 4.5;
    const pass = ratio >= threshold;
    if (!pass) failures++;
    rows.push({
      name: p.name || `${p.fg} / ${p.bg}`,
      ratio: ratio.toFixed(2),
      threshold: threshold.toFixed(1),
      status: pass ? "AA ✓" : "FAIL ✗",
    });
  }

  const w = Math.max(...rows.map((r) => r.name.length), 4);
  console.log(`${"par".padEnd(w)}  rácio   mín    estado`);
  console.log(`${"-".repeat(w)}  -----   ----   ------`);
  for (const r of rows) {
    console.log(`${r.name.padEnd(w)}  ${r.ratio.padStart(5)}  ${r.threshold.padStart(4)}   ${r.status}`);
  }

  if (failures > 0) {
    console.error(`\n${failures} par(es) abaixo de AA. Ajusta o L (lightness) OKLCH e repete.`);
    process.exit(1);
  }
  console.log("\nTodos os pares cumprem WCAG AA.");
}

main();
