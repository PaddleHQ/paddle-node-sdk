# AGENTS.md

## Cursor Cloud specific instructions

This repository is the **Paddle Node.js SDK** (`@paddle/paddle-node-sdk`) — a server-side
TypeScript client library for Paddle Billing. It is a **library, not a running service**:
there is no server, database, container, or long-running process. It has zero runtime
dependencies and talks to Paddle's hosted REST API only when a consumer app makes live calls.

- Package manager: **pnpm** (v10, matching CI). Node **>= 20** (`engines`).
- The update script runs `pnpm install`, so dependencies are already installed at session start.

### Standard commands (defined in `package.json`)
- Build: `pnpm build` (compiles ESM + CJS + types into `dist/`)
- Test: `pnpm test` (Jest; all HTTP is mocked, no network/API key needed)
- Test typecheck: `pnpm typecheck:tests`
- Lint: `pnpm lint` — Format: `pnpm prettier` (`:fix` variants auto-fix)

CI mirrors these in `.github/workflows/build-test.yml` (build + test on Node 20/22/24) and
`.github/workflows/linting.yml` (lint + prettier).

### Non-obvious gotchas
- **`src/version.ts` is generated and gitignored.** The `prebuild` step
  (`scripts/update-env-vars.js`) writes it from the package version. It does NOT end with a
  trailing newline, so running `pnpm lint` *after* a build reports one `@stylistic/eol-last`
  error on `src/version.ts`. This is not a source-code problem: in CI the lint job runs on a
  fresh checkout (no build), so the file is absent and lint passes. To reproduce a clean lint
  locally, run lint on a fresh tree or `rm -f src/version.ts` before `pnpm lint`.
- `pnpm lint` prints a harmless deprecation warning about the `@stylistic` `recommended-flat`
  config; it does not affect the exit code.
- There is no application to "run". To smoke-test the built SDK, exercise a core feature
  offline — e.g. verify a webhook signature: `h1 = HMAC-SHA256("<ts>:<body>", secret)` in the
  header `ts=<unix_ts>;h1=<hash>`, then `await paddle.webhooks.unmarshal(body, secret, sig)`.
  Note the validator rejects signatures whose `ts` is more than 5 seconds old, so sign with a
  current timestamp.
