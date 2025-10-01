import React from 'react';
import { Song } from '../lib/songs';

type SongCardProps = {
  song: Song;
  onSelect: (s: Song) => void;
  onToggleFavorite: (id: number) => void;
  isFavorited?: boolean;
};

export default function SongCard({ song, onSelect, onToggleFavorite, isFavorited }: SongCardProps) {
  return (
    <div className="song-card" onClick={() => onSelect(song)}>
      <div className="song-title">{song.title}</div>
      <div className="song-artist">{song.artist}</div>
      {(song.lyricsSnippet || (song as any).lyrics) && (
        <div className="song-snippet">{song.lyricsSnippet || String((song as any).lyrics).split('\n')[0]}</div>
      )}
      <div className="song-chords">
        {song.chords.map((c: string) => (
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
