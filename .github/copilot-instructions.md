# Bingo Mixer AI Coding Instructions

## Mandatory development checklist
- [ ] `npm install`
- [ ] `npm run lint`
- [ ] `npm run test`
- [ ] `npm run build`
- [ ] `npm run dev` and verify `http://localhost:5173/`

## Core project facts
- React + TypeScript + Vite app.
- No `tailwind.config.js`; Tailwind v4 is configured via `src/index.css` with `@import 'tailwindcss'` and `@theme` tokens.
- `vite.config.ts` uses `VITE_REPO_NAME` to set `base` for GitHub Pages.

## What to change where
- `src/App.tsx` selects between `StartScreen` and `GameScreen`.
- `src/hooks/useBingoGame.ts` holds game state, persistence, and action handlers.
- `src/utils/bingoLogic.ts` contains game rules: board generation, toggling, and bingo detection.
- UI components live in `src/components/`; keep state logic out of presentational components.

## Testing and conventions
- Use `vitest` with jsdom; setup file is `src/test/setup.ts`.
- Main test coverage is `src/utils/bingoLogic.test.ts`.
- ESLint config is in `eslint.config.js`; follow existing TS/React hook style.

## Agent and workflow notes
- This repo includes custom agent docs in `.github/agents/` and workshop guidance in `workshop/04-multi-agent.md`.
- Prefer small, incremental changes with tests after each update.
- For UI work, keep state in `useBingoGame`; for rules work, update `bingoLogic.ts` and tests together.
