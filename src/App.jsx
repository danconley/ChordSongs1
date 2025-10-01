import React, { useState, useEffect } from "react";
import "./styles.css";
import "./chord-diagrams.css";
import logo from "../chordsongs_bigger_trans.png";
import { SONGS } from "@/lib/songs";
import { ChordDiagrams } from "./ChordDiagrams";
import SongCard from "./SongCard";
import SongDetail from "./SongDetail";
import Header from "./Header";

// Common chord set shown in the chord picker. Keep this in sync with `SONGS` suggestions in `lib/songs.js`.
const CHORDS = ["C", "G", "D", "Em", "Am", "F", "A", "E", "Dm"];

// Read favorites from localStorage. Return an array of song ids.
function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
        return [];
    }
}

// Persist favorites to localStorage. Called from an effect below.
function setFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
}

// Main application component. Manages view state, selected chords, and favorites.
export default function App() {
    const [selectedChords, setSelectedChords] = useState([]);
    const [favorites, setFavs] = useState(getFavorites());
    const [view, setView] = useState("main");
    const [activeSong, setActiveSong] = useState(null);
    const [discoverVisible, setDiscoverVisible] = useState(false);

    // Persist favorites when they change. Using a separate helper keeps side-effects contained.
    useEffect(() => {
        setFavorites(favorites);
    }, [favorites]);

    // Toggle chord selection; limit to up to 4 chords for filtering.
    const toggleChord = (chord) => {
        setSelectedChords((prev) =>
            prev.includes(chord)
                ? prev.filter((c) => c !== chord)
                : prev.length < 4
                ? [...prev, chord]
                : prev
        );
    };

    // Filter songs that contain all selected chords.
    // Note: when no chords selected, we return an empty list (encourage selection).
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

    // Render a compact card for each song used in lists.
    // Shows title, artist, a short snippet, chord badges, and favorite button.
    const renderSongCard = (song) => (
        <SongCard
            key={song.id}
            song={song}
            onSelect={(s) => { setActiveSong(s); setView('detail'); }}
            onToggleFavorite={toggleFavorite}
            isFavorited={isFavorite(song.id)}
        />
    );

    return (
        <div className="app-bg">
            <Header
                onHome={() => { setView('main'); setDiscoverVisible(false); }}
                onDiscover={() => { setView('main'); setDiscoverVisible(true); }}
                onFavorites={() => { setView('favorites'); setDiscoverVisible(false); }}
                onChords={() => { setView('chords'); setDiscoverVisible(false); }}
            />

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
                <SongDetail
                    song={activeSong}
                    onBack={() => setView('main')}
                    onToggleFavorite={toggleFavorite}
                    isFavorited={isFavorite(activeSong.id)}
                />
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