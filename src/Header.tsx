import React from 'react';
import logo from '../chordsongs_bigger_trans.png';

type HeaderProps = {
  onHome: () => void;
  onDiscover: () => void;
  onFavorites: () => void;
  onChords: () => void;
};

export default function Header({ onHome, onDiscover, onFavorites, onChords }: HeaderProps) {
  return (
    <header className="header">
      <img src={logo} alt="ChordSongs Logo" className="logo header-logo" />
      <h1>ChordSongs</h1>
      <button className="tab-btn" onClick={onHome}>Home</button>
      <button className="tab-btn" onClick={onDiscover}>Discover</button>
      <button className="tab-btn" onClick={onFavorites}>Favorites</button>
      <button className="tab-btn" onClick={onChords}>Chord Diagrams</button>
    </header>
  );
}
