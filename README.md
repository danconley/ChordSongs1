# ChordSongs (React + Vite)

Small single-page React app to browse simple song chord charts and chord diagrams.

## Highlights

- Split `App.jsx` into smaller components: `SongCard.jsx`, `SongDetail.jsx`, and `Header.jsx`.
- Chord diagrams view (`ChordDiagrams.jsx`) now uses a stable 3x3 grid.
- `lib/songs.js` provides compact song metadata (snippets, structure, notes) rather than full lyrics.

## Quick start

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project layout (important files)

- `src/App.jsx` — main application state and view switching
- `src/Header.jsx` — top navigation
- `src/SongCard.jsx` — compact song list item
- `src/SongDetail.jsx` — expanded song view (structure, notes)
- `src/ChordDiagrams.jsx` + `src/chord-diagrams.css` — chord diagram visuals
- `lib/songs.ts` — typed data source for songs (id, title, artist, chords, lyricsSnippet, structure, notes)

## Song data shape (in `lib/songs.ts`)

- `id`: number (unique)
- `title`: string
- `artist`: string
- `chords`: string[] (e.g., ["C","G","Am"])
- `lyricsSnippet`: short non-copyrighted lyric excerpt (optional)
- `structure`: [{ name, chords, repeats }] (optional)
- `notes`: string (optional)

### Rationale for snippets

To avoid storing copyrighted lyrics in the repo and to keep the app focused on chord learning, songs store concise snippets and a simple structure. Link to licensed lyrics externally if needed.

## Development suggestions

- Add a small test that asserts each `SONGS` entry includes `id`, `title`, `chords`, and either `lyricsSnippet` or `lyrics` (file: `lib/songs.ts`).
- Consider migrating to TypeScript for stronger types and developer tooling.
- Improve accessibility: ensure focus states, ARIA labels, and color contrast meet a11y standards.

## Contribution

If you want to contribute:

1. Fork the repo and create a feature branch.
2. Run the app locally and add a unit test for your change where appropriate.
3. Open a PR with a short description of changes.

If you'd like, I can add unit tests for `lib/songs.ts` or continue migrating the project to TypeScript—tell me which and I'll implement it.

CI
--

This project includes a basic GitHub Actions workflow that runs typechecking, tests, and a production build on push/PR to main. See `.github/workflows/ci.yml`.

## Suggested TODOs

If you're continuing work on this project, here is a prioritized list of small-to-medium tasks that will improve stability, DX, and test coverage. Each item is intentionally scoped to be fast to implement and low-risk.

1. Add CI that runs typecheck + tests
	- Create a GitHub Actions workflow that runs `npm ci`, `npm run typecheck`, and `npm test` on pull requests and pushes to `main`.
	- Acceptance: workflow runs on PR and shows green for existing tests.

2. Add component tests for UI pieces
	- Add React Testing Library + vitest DOM tests for `SongCard` and `SongDetail` (happy path + one edge case each).
	- Acceptance: tests render components, simulate click events, and assert DOM changes.

3. Normalize `Song.structure` shape and remove runtime unions
	- Migrate `structure[].chords` to always be `string[]`. Convert any string values to arrays in `lib/songs.ts` and update type definitions.
	- Acceptance: no runtime casts remain in components that render `structure`.

4. Add a small end-to-end smoke test (optional)
	- Use Playwright or a lightweight headless browser check to confirm the app loads and the chord diagrams page renders without errors.
	- Acceptance: headless run returns 200 and finds the `.chord-diagrams-grid` element.

5. Improve path alias consistency
	- Make `@/lib/*` work reliably for TypeScript and Vite; update imports to use the alias across the codebase for clarity.
	- Acceptance: `tsc --noEmit` passes with alias imports; Vite dev server runs without module resolution warnings.

6. Add a CONTRIBUTING.md and small dev notes
	- Document how to run tests, typecheck, and start the dev server. Include a checklist for PRs.

7. Accessibility quick wins
	- Add ARIA labels to interactive controls, verify color contrast, and ensure tab focus order is logical.
	- Acceptance: basic a11y audit finds no keyboard focus traps and color contrast >= 4.5:1 for body copy.

If you want, I can implement items 1–3 in that order (CI → component tests → structure normalization). Tell me which ones to start and I'll create a focused todo and implement it.

Image cropping helper
---------------------

If you want a pre-cropped header image (trimmed top & bottom), there's a tiny Node script included at `scripts/crop-image.js`. It uses Jimp to crop the central 80% of the image vertically and writes `public/chordsongs_cropped.png`.

To run it locally:

```bash
npm install jimp --legacy-peer-deps
node scripts/crop-image.js
```

This container couldn't install system-level image tools, so the script is provided to run on your machine or CI.

New header assets
-----------------

This repo now contains cropped header images in `src/assets`:

- `src/assets/chordsongs_cropped.png` (140×48)
- `src/assets/chordsongs_cropped@2x.png` (280×96)

The header component (`src/Header.tsx`) has been updated to use these images with srcset for high-DPI screens. The CSS class `.header-logo` controls sizing and cropping; adjust `object-position` in `src/styles.css` to fine-tune the visible area.
