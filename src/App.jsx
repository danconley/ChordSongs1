import React, { useState, useEffect } from "react";
import "./styles.css";
import "./chord-diagrams.css";
import logo from "../chordsongs_bigger_trans.png";
import { SONGS } from "./songs";
import { ChordDiagrams } from "./ChordDiagrams";

const CHORDS = ["C", "G", "D", "Em", "Am", "F", "A", "E", "Dm"];

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
        return [];
    }
}

function setFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
}

export default function App() {
    const [selectedChords, setSelectedChords] = useState([]);
    const [favorites, setFavs] = useState(getFavorites());
    const [view, setView] = useState("main");
    const [activeSong, setActiveSong] = useState(null);
    const [discoverVisible, setDiscoverVisible] = useState(false);

    useEffect(() => {
        setFavorites(favorites);
    }, [favorites]);

    const toggleChord = (chord) => {
        setSelectedChords((prev) =>
            prev.includes(chord)
                ? prev.filter((c) => c !== chord)
                : prev.length < 4
                ? [...prev, chord]
                : prev
        );
    };

    const filteredSongs = SONGS.filter((song) =>
        selectedChords.length === 0
            ? false
            : song.chords.every((chord) => selectedChords.includes(chord))
    ).slice(0, 20);

    const isFavorite = (id) => favorites.includes(id);
    const toggleFavorite = (id) => {
        setFavs((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    const renderSongCard = (song) => (
        <div
            key={song.id}
            className="song-card"
            onClick={() => {
                setActiveSong(song);
                setView("detail");
            }}
        >
            <div className="song-title">{song.title}</div>
            <div className="song-artist">{song.artist}</div>
            { (song.lyricsSnippet || song.lyrics) && (
                <div className="song-snippet">{song.lyricsSnippet || String(song.lyrics).split('\n')[0]}</div>
            ) }
            <div className="song-chords">
                {song.chords.map((c) => (
                    <span className="chord-badge" key={c}>{c}</span>
                ))}
            </div>
            <button
                className={
                    "heart-btn" + (isFavorite(song.id) ? " favorited" : "")
                }
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(song.id);
                }}
                aria-label="Toggle Favorite"
            >
                {isFavorite(song.id) ? "♥" : "♡"}
            </button>
        </div>
    );

    return (
        <div className="app-bg">
            <header className="header">
                <img src={logo} alt="ChordSongs Logo" className="logo" />
                <h1>ChordSongs</h1>
                <button
                    className="tab-btn"
                    onClick={() => {
                        setView("main");
                        setDiscoverVisible(false);
                    }}
                >
                    Home
                </button>
                <button
                    className="tab-btn"
                    onClick={() => {
                        setView("main");
                        setDiscoverVisible(true);
                    }}
                >
                    Discover
                </button>
                <button
                    className="tab-btn"
                    onClick={() => {
                        setView("favorites");
                        setDiscoverVisible(false);
                    }}
                >
                    Favorites
                </button>
                <button
                    className="tab-btn"
                    onClick={() => {
                        setView("chords");
                        setDiscoverVisible(false);
                    }}
                >
                    Chord Diagrams
                </button>
            </header>

            {view === "main" && (
                <main>
                    {discoverVisible ? (
                        <>
                            <h2>All Available Songs</h2>
                            <div className="song-list">
                                {SONGS.map((song) => renderSongCard(song))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>Pick Your Chords</h2>
                            <div className="chord-picker">
                                <div className="chord-grid">
                                    {CHORDS.map((chord) => (
                                        <button
                                            key={chord}
                                            className={
                                                "chord-btn" +
                                                (selectedChords.includes(chord) ? " selected" : "")
                                            }
                                            onClick={() => toggleChord(chord)}
                                            disabled={
                                                !selectedChords.includes(chord) &&
                                                selectedChords.length >= 4
                                            }
                                        >
                                            {chord}
                                        </button>
                                    ))}
                                </div>
                                <div className="chord-count">
                                    {selectedChords.length === 0
                                        ? "Select 3–4 chords to get started!"
                                        : `${filteredSongs.length} song(s) found`}
                                </div>
                                <div className="song-list">
                                    {selectedChords.length === 0 ? (
                                        <div className="empty-state">Pick some chords above to discover songs you can play!</div>
                                    ) : filteredSongs.length === 0 ? (
                                        <div className="empty-state">
                                            No matches yet. Try adding or removing a chord!<br />
                                            <div style={{ marginTop: '1rem' }}>
                                                <b>Try these chord combos:</b>
                                                <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
                                                    {SONGS.slice(0, 5).map((song) => (
                                                        <li key={song.id} style={{ marginBottom: '0.5rem' }}>
                                                            <span style={{ fontWeight: 600 }}>{song.title}</span>: {song.chords.map((c) => (
                                                                <span className="chord-badge" key={c}>{c}</span>
                                                            ))}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        filteredSongs.map((song) => renderSongCard(song))
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </main>
            )}

            {view === "chords" && <ChordDiagrams />}

            {view === "detail" && activeSong && (
                <div className="song-detail">
                    <button className="back-btn" onClick={() => setView("main")}>← Back</button>
                    <h2>{activeSong.title}</h2>
                    <div className="song-artist">{activeSong.artist}</div>
                    <div className="song-chords">
                        {activeSong.chords.map((c) => (
                            <span className="chord-badge" key={c}>{c}</span>
                        ))}
                    </div>
                    <button
                        className={
                            "heart-btn detail" + (isFavorite(activeSong.id) ? " favorited" : "")
                        }
                        onClick={() => toggleFavorite(activeSong.id)}
                        aria-label="Toggle Favorite"
                    >
                        {isFavorite(activeSong.id) ? "♥" : "♡"}
                    </button>
                    <div className="lyrics">
                        {activeSong.lyricsSnippet ? (
                            <p>{activeSong.lyricsSnippet}</p>
                        ) : activeSong.lyrics ? (
                            <pre>{activeSong.lyrics}</pre>
                        ) : null}

                        {activeSong.structure && (
                            <div className="structure">
                                <h4>Structure</h4>
                                <ol>
                                    {activeSong.structure.map((part, idx) => (
                                        <li key={idx}>
                                            <strong>{part.name}:</strong> {Array.isArray(part.chords) ? part.chords.join(' - ') : part.chords} {part.repeats ? `(x${part.repeats})` : ''}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}

                        {activeSong.notes && (
                            <div className="notes">
                                <h4>Notes</h4>
                                <p>{activeSong.notes}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {view === "favorites" && (
                <main>
                    <h2>Your Favorites</h2>
                    <div className="song-list">
                        {favorites.length === 0 ? (
                            <div className="empty-state">No favorites yet. Discover songs and tap the heart to save them!</div>
                        ) : (
                            SONGS.filter((s) => favorites.includes(s.id)).map((song) => renderSongCard(song))
                        )}
                    </div>
                </main>
            )}
        </div>
    );
}