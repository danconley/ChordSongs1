import React from 'react';

// SongDetail: shows expanded info for a selected song
export default function SongDetail({ song, onBack, onToggleFavorite, isFavorited }) {
  if (!song) return null;
  return (
    <div className="song-detail">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>{song.title}</h2>
      <div className="song-artist">{song.artist}</div>
      <div className="song-chords">
        {song.chords.map((c) => (
          <span className="chord-badge" key={c}>{c}</span>
        ))}
      </div>
      <button
        className={"heart-btn detail" + (isFavorited ? " favorited" : "")}
        onClick={() => onToggleFavorite(song.id)}
        aria-label="Toggle Favorite"
      >
        {isFavorited ? '\u2665' : '\u2661'}
      </button>

      <div className="lyrics">
        {song.lyricsSnippet ? (
          <p>{song.lyricsSnippet}</p>
        ) : song.lyrics ? (
          <pre>{song.lyrics}</pre>
        ) : null}

        {song.structure && (
          <div className="structure">
            <h4>Structure</h4>
            <ol>
              {song.structure.map((part, idx) => (
                <li key={idx}>
                  <strong>{part.name}:</strong> {Array.isArray(part.chords) ? part.chords.join(' - ') : part.chords} {part.repeats ? `(x${part.repeats})` : ''}
                </li>
              ))}
            </ol>
          </div>
        )}

        {song.notes && (
          <div className="notes">
            <h4>Notes</h4>
            <p>{song.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
