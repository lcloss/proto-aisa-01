---
name: pest-path-coverage-tests
description: Use this skill to analyse a Pest coverage report line for a PHP file and write tests for the uncovered code paths. Trigger on "pest-path-coverage-tests", `/pest-path-coverage-tests`, when the user pastes a Pest coverage report line (e.g. "app/Actions/Admin/ComputePlatformMetrics.php ..... 75%"), or asks to cover the missing paths / uncovered lines of a class with Pest tests. Reads the target PHP file, and for EACH public method produces a review table (Path | Description | Covered? | Existing test | New test needed?). It STOPS after the table and waits for user feedback — it does NOT write any test yet. After the user reviews the table and confirms, it generates ONLY the tests marked "New test needed", never regenerating tests that already exist. Works from the file on disk plus the coverage percentage/missed-lines the report gives; if the file path or existing test location is unclear, it stops and asks.
---

# Pest Path Coverage Tests

You analyse a **Pest coverage report** for one PHP class and drive it to full coverage by writing tests **only for the paths that are missing**. You work in **two gates**: first you produce a review **table** and stop; only after the user confirms do you write the new tests.

Never write or regenerate a test that already exists. Never write code in the first gate.

## Input

The user gives you a **coverage report line** (or block) for one file, e.g.:

```
C:\var\www\Laravel\project\app\Actions\Admin\ComputePlatformMetrics.php ......... 75%
```

From this you extract:

1. **The file path** — the class to analyse. Read it from disk.
2. **The coverage percentage** — the current overall coverage.
3. **Missed line numbers**, if the report lists them (Pest/Xdebug can print `pa104` or `104..112` style hints, or the user may paste the “uncovered lines” list). Use them to decide which paths are covered.

If the file path does not resolve on disk, or you cannot tell where its tests live, **stop and ask** — do not guess a path.

## Definitions

- **Public method** = a `public function` on the class (skip `__construct` unless it has branching logic worth testing). For invokable classes, `__invoke` is the method.
- **Path** = a distinct execution route through a method: each branch of an `if/elseif/else`, each `match`/`switch` arm, each loop body vs. empty-loop case, each early `return`/`throw`/guard clause, and each caught-exception branch. A method with no branching has exactly one path (the happy path).
- **Covered?** = whether that path is exercised by an existing test. Judge from the missed-line numbers when given; otherwise from reading the existing tests.

## Process

### Gate 1 — Analyse and tabulate (NO code)

1. **Read the target file** in full. List its public methods in source order.
2. **Locate existing tests.** Search the test suite (typically `tests/Feature` and `tests/Unit`) for tests that reference this class, its methods, or its route/action. Read the ones you find.
3. **Enumerate the paths** of every public method per the definition above. Give each a short, stable identifier (e.g. `handle: metrics cache hit`, `handle: cache miss → recompute`).
4. **Map coverage.** For each path, decide Covered?, and if covered, name the existing test that covers it.
5. **Emit ONE table per public method**, plus a one-line note of the reported coverage %. Use exactly these columns:

   ```
   ### `methodName()`

   | Path | Description | Covered? | Existing test | New test needed? |
   |------|-------------|----------|---------------|------------------|
   ```

   - **Path** — the identifier.
   - **Description** — what the path does / what condition triggers it.
   - **Covered?** — ✅ Yes / ❌ No (from missed lines or existing tests).
   - **Existing test** — the test name + file that covers it, or `—`.
   - **New test needed?** — ✅ Yes only when it is NOT covered and IS worth testing; `—` otherwise.

6. **STOP.** End the turn with a short prompt asking the user to review the tables and confirm which rows to generate. Write **no test code** in this gate.

### Gate 2 — Generate the missing tests

Only after the user has seen the table and confirmed (they may add, remove, or amend rows):

1. Generate tests **only for rows marked "New test needed? ✅"** (as amended by the user).
2. **Do not regenerate existing tests.** Add new `it(...)`/`test(...)` cases to the existing test file for this class when one exists; create a new test file only if none exists, following the suite's location and naming conventions.
3. Match the project's Pest conventions — datasets, `beforeEach`, factories, helpers, and the existing arrange/act/assert style already used in neighbouring tests. Reuse existing factories and helpers; do not invent new infrastructure.
4. Name each new test after the path it covers so the mapping back to the table is obvious.
5. If a path cannot be tested without a decision you cannot infer (missing factory, unclear expected value, external dependency), **stop and ask** rather than inventing behaviour.
6. After writing, run the suite for the affected file if the environment allows (e.g. `php artisan test --filter=...` or `./vendor/bin/pest path`), and report the result. Optionally re-run coverage for the file to confirm the paths are now green.

## Rules

- Two gates, always. The table comes first; code only after confirmation.
- Only public methods get their own table; private/protected methods are covered indirectly through the public paths that reach them.
- Never delete or rewrite a passing existing test.
- Keep new tests focused: one path per test where practical.
- Report honestly — if you could not fully verify coverage from the report, say so in the table (e.g. Covered? = “❓ unclear”).
