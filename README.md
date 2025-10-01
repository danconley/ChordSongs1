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
- `lib/songs.js` — data source for songs (id, title, artist, chords, lyricsSnippet, structure, notes)

## Song data shape (in `lib/songs.js`)

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

- Add a small test that asserts each `SONGS` entry includes `id`, `title`, `chords`, and either `lyricsSnippet` or `lyrics` (file: `lib/songs.js`).
- Consider migrating to TypeScript for stronger types and developer tooling.
- Improve accessibility: ensure focus states, ARIA labels, and color contrast meet a11y standards.

## Contribution

If you want to contribute:

1. Fork the repo and create a feature branch.
2. Run the app locally and add a unit test for your change where appropriate.
3. Open a PR with a short description of changes.

If you'd like, I can add unit tests for `lib/songs.js` or migrate the project to TypeScript—tell me which and I'll implement it.
