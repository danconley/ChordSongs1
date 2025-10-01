import React from 'react';

// Small set of chord diagrams used for the Chord Diagrams view.
// Each diagram describes frets (0=open, null=muted), finger numbers and an optional startFret.
export const CHORD_DIAGRAMS = {
    "C": {
        frets: [0, 1, 0, 2, 3, 0], // from thickest to thinnest string
        fingers: [0, 1, 0, 2, 3, 0], // 0 means open string
        startFret: 1,
    },
    "G": {
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, 0, 0, 0, 3],
        startFret: 1,
    },
    "D": {
        frets: [null, null, 0, 2, 3, 2],
        fingers: [0, 0, 0, 2, 3, 1],
        startFret: 1,
    },
    "Em": {
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 2, 3, 0, 0, 0],
        startFret: 1,
    },
    "Am": {
        frets: [null, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        startFret: 1,
    },
    "F": {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        startFret: 1,
    },
    "A": {
        frets: [null, 0, 2, 2, 2, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        startFret: 1,
    },
    "E": {
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        startFret: 1,
    },
    "Dm": {
        frets: [null, null, 0, 2, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        startFret: 1,
    },
};

export function ChordDiagram({ name, diagram }) {
    // Props: name (string), diagram (object with frets/fingers/startFret)
    const stringCount = 6;
    const fretCount = 5;
    
    return (
        <div className="chord-diagram">
            <h3>{name}</h3>
            {/* Inline SVG used to draw a compact fretboard representation */}
            <svg width="140" height="150" viewBox="0 0 140 150">
                {/* Fretboard background */}
                <rect x="20" y="10" width="120" height="120" fill="#f8d7a0"/>
                
                {/* Vertical lines (strings) */}
                {[...Array(stringCount)].map((_, i) => (
                    <line
                        key={`string-${i}`}
                        x1={30 + i * 20}
                        y1="10"
                        x2={30 + i * 20}
                        y2="130"
                        stroke="black"
                        strokeWidth="1"
                    />
                ))}
                
                {/* Horizontal lines (frets) */}
                {[...Array(fretCount + 1)].map((_, i) => (
                    <line
                        key={`fret-${i}`}
                        x1="20"
                        y1={10 + i * 24}
                        x2="140"
                        y2={10 + i * 24}
                        stroke="black"
                        strokeWidth={i === 0 ? "4" : "1"}
                    />
                ))}
                
                {/* Finger positions */}
                {diagram.frets.map((fret, stringIndex) => {
                    if (fret === null) {
                        // Draw X for muted strings
                        return (
                            <g key={`mute-${stringIndex}`}>
                                <line
                                    x1={25 + stringIndex * 20}
                                    y1="0"
                                    x2={35 + stringIndex * 20}
                                    y2="10"
                                    stroke="black"
                                    strokeWidth="2"
                                />
                                <line
                                    x1={35 + stringIndex * 20}
                                    y1="0"
                                    x2={25 + stringIndex * 20}
                                    y2="10"
                                    stroke="black"
                                    strokeWidth="2"
                                />
                            </g>
                        );
                    }
                    
                    if (fret === 0) {
                        // Draw O for open strings
                        return (
                            <circle
                                key={`open-${stringIndex}`}
                                cx={30 + stringIndex * 20}
                                cy="5"
                                r="4"
                                fill="none"
                                stroke="black"
                                strokeWidth="1"
                            />
                        );
                    }
                    
                    // Draw finger position dots
                    return (
                        <circle
                            key={`finger-${stringIndex}`}
                            cx={30 + stringIndex * 20}
                            cy={22 + (fret - 1) * 24}
                            r="8"
                            fill="black"
                        />
                    );
                })}

                {/* Finger numbers */}
                {diagram.fingers.map((finger, stringIndex) => {
                    if (finger > 0 && diagram.frets[stringIndex] > 0) {
                        return (
                            <text
                                key={`text-${stringIndex}`}
                                x={30 + stringIndex * 20}
                                y={26 + (diagram.frets[stringIndex] - 1) * 24}
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                            >
                                {finger}
                            </text>
                        );
                    }
                    return null;
                })}
            </svg>
        </div>
    );
}

export function ChordDiagrams() {
    return (
        <div className="chord-diagrams-page">
            <h2>Guitar Chord Diagrams</h2>
            <div className="chord-diagrams-grid">
                {Object.entries(CHORD_DIAGRAMS).map(([name, diagram]) => (
                    <ChordDiagram key={name} name={name} diagram={diagram} />
                ))}
            </div>
        </div>
    );
}