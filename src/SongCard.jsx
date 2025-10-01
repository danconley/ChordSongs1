import React from 'react';

// SongCard: compact card used in lists. Props: song, onSelect, onToggleFavorite, isFavorited
export default function SongCard({ song, onSelect, onToggleFavorite, isFavorited }) {
  return (
    <div className="song-card" onClick={() => onSelect(song)}>
      <div className="song-title">{song.title}</div>
      <div className="song-artist">{song.artist}</div>
      {(song.lyricsSnippet || song.lyrics) && (
        <div className="song-snippet">{song.lyricsSnippet || String(song.lyrics).split('\n')[0]}</div>
      )}
      <div className="song-chords">
        {song.chords.map((c) => (
          <span className="chord-badge" key={c}>{c}</span>
        ))}
      </div>
      <button
        className={"heart-btn" + (isFavorited ? " favorited" : "")}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(song.id);
        }}
        aria-label="Toggle Favorite"
      >
        {isFavorited ? '\u2665' : '\u2661'}
      </button>
    </div>
  );
}
