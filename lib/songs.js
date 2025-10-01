// SONGS array: each item should include at minimum:
// - id: unique number
// - title: string
// - artist: string
// - chords: array of chord names
// Optional fields used by the app:
// - lyricsSnippet: short non-copyrighted lyric excerpt
// - structure: array describing song sections (name, chords, repeats)
// - notes: performance/play tips
// Avoid storing full copyrighted lyrics in the repo; use snippets instead.
export const SONGS = [
  {
    id: 1,
    title: "Leaving on a Jet Plane",
    artist: "John Denver",
    chords: ["C", "G", "D"],
    lyricsSnippet: "All my bags are packed, I'm ready to go",
    structure: [
      { name: "Verse", chords: ["C", "G", "D"], repeats: 2 },
      { name: "Chorus", chords: ["G", "C", "D"], repeats: 2 }
    ],
    notes: "Easy three-chord song; capo optional. Good for beginners.",
    suggestion: ["C", "G", "D"],
  },
  {
    id: 2,
    title: "I'm Yours",
    artist: "Jason Mraz",
    chords: ["C", "G", "Am", "F"],
    lyricsSnippet: "Well you done done me and you bet I felt it",
    structure: [
      { name: "Verse", chords: ["C", "G", "Am", "F"], repeats: 4 },
      { name: "Chorus", chords: ["C", "G", "Am", "F"], repeats: 2 }
    ],
    notes: "Laid-back strum; good for island/reggae feel. Try syncopated strumming.",
    suggestion: ["C", "G", "Am", "F"],
  },
  {
    id: 3,
    title: "Three Little Birds",
    artist: "Bob Marley",
    chords: ["A", "D", "E"],
    lyricsSnippet: "Don't worry about a thing, 'cause every little thing is gonna be alright",
    structure: [
      { name: "Intro", chords: ["A", "D", "E"], repeats: 1 },
      { name: "Verse/Chorus", chords: ["A", "D", "E"], repeats: 4 }
    ],
    notes: "Upbeat reggae strum. Keep the rhythm light and bouncy.",
    suggestion: ["A", "D", "E"],
  },
  {
    id: 4,
    title: "Brown Eyed Girl",
    artist: "Van Morrison",
    chords: ["G", "C", "D", "Em"],
    lyricsSnippet: "Hey, where did we go? Days when the rains came.",
    structure: [
      { name: "Intro", chords: ["G", "C", "G", "D"], repeats: 1 },
      { name: "Verse", chords: ["G", "C", "G", "D"], repeats: 2 },
      { name: "Chorus", chords: ["G", "C", "D", "Em"], repeats: 2 }
    ],
    notes: "Classic pop groove; try bright strumming and a jangly tone.",
    suggestion: ["G", "C", "D", "Em"],
  },
  {
    id: 5,
    title: "Sweet Home Alabama",
    artist: "Lynyrd Skynyrd",
    chords: ["D", "C", "G"],
    lyricsSnippet: "Big wheels keep on turning, carry me home to see my kin",
    structure: [
      { name: "Intro/Riff", chords: ["D", "C", "G"], repeats: 4 },
      { name: "Verse", chords: ["D", "C", "G"], repeats: 3 }
    ],
    notes: "Drive the groove with the signature riff; palm mute for texture.",
    suggestion: ["D", "C", "G"],
  },
  {
    id: 6,
    title: "Let It Be",
    artist: "The Beatles",
    chords: ["C", "G", "Am", "F"],
    lyricsSnippet: "Speaking words of wisdom, let it be",
    structure: [
      { name: "Verse", chords: ["C", "G", "Am", "F"], repeats: 2 },
      { name: "Chorus", chords: ["C", "G", "F", "C"], repeats: 2 }
    ],
    notes: "Gentle piano/strum arrangement works well. Keep dynamics simple.",
    suggestion: ["C", "G", "Am", "F"],
  },
  {
    id: 7,
    title: "Stand By Me",
    artist: "Ben E. King",
    chords: ["C", "Am", "F", "G"],
    lyricsSnippet: "When the night has come and the land is dark",
    structure: [
      { name: "Verse", chords: ["C", "Am", "F", "G"], repeats: 2 },
      { name: "Chorus", chords: ["C", "Am", "F", "G"], repeats: 2 }
    ],
    notes: "Slow groove; focus on steady bass and simple arpeggio or strum.",
    suggestion: ["C", "Am", "F", "G"],
  },
  {
    id: 8,
    title: "Sweet Caroline",
    artist: "Neil Diamond",
    chords: ["D", "C", "G"],
    lyricsSnippet: "Where it began, I can't begin to knowin'",
    structure: [
      { name: "Verse", chords: ["D", "C", "G"], repeats: 2 },
      { name: "Chorus", chords: ["G", "D", "C"], repeats: 2 }
    ],
    notes: "Big singalong chorus; emphasize dynamics leading into the chorus.",
    suggestion: ["D", "C", "G"],
  },
  {
    id: 9,
    title: "Wonderwall",
    artist: "Oasis",
    chords: ["Em", "G", "D", "A"],
    lyricsSnippet: "Today is gonna be the day that they're gonna throw it back to you",
    structure: [
      { name: "Intro", chords: ["Em", "G", "D", "A"], repeats: 1 },
      { name: "Verse/Chorus", chords: ["Em", "G", "D", "A"], repeats: 4 }
    ],
    notes: "Strumming with a steady pulse; consider capo to match original key.",
    suggestion: ["Em", "G", "D", "A"],
  },
  {
    id: 10,
    title: "Hey There Delilah",
    artist: "Plain White T's",
    chords: ["D", "F", "G", "A"],
    lyricsSnippet: "Hey there Delilah, what's it like in New York City?",
    structure: [
      { name: "Intro/Verse", chords: ["D", "F", "G", "A"], repeats: 2 },
      { name: "Chorus", chords: ["D", "F", "G", "A"], repeats: 2 }
    ],
    notes: "Fingerpicked patterns work nicely; keep it intimate and light.",
    suggestion: ["D", "F", "G", "A"],
  },
  {
    id: 11,
    title: "Knockin' on Heaven's Door",
    artist: "Bob Dylan",
    chords: ["G", "D", "Am", "C"],
    lyricsSnippet: "Mama, take this badge off of me, I can't use it anymore",
    structure: [
      { name: "Verse", chords: ["G", "D", "Am", "C"], repeats: 3 },
      { name: "Chorus", chords: ["G", "D", "C"], repeats: 2 }
    ],
    notes: "Simple strummed progression; great for singalongs.",
    suggestion: ["G", "D", "Am", "C"],
  },
  {
    id: 12,
    title: "Sweet Dreams (Are Made of This)",
    artist: "Eurythmics",
    chords: ["Am", "F", "E"],
    lyricsSnippet: "Sweet dreams are made of this, who am I to disagree?",
    structure: [
      { name: "Intro/Riff", chords: ["Am", "F", "E"], repeats: 4 },
      { name: "Verse", chords: ["Am", "F", "E"], repeats: 3 }
    ],
    notes: "Synthy riff can be adapted to guitar; try octave hooks for flavor.",
    suggestion: ["Am", "F", "E"],
  },
  {
    id: 13,
    title: "With or Without You",
    artist: "U2",
    chords: ["D", "A", "Em", "G"],
    lyricsSnippet: "See the stone set in your eyes, see the thorn twist in your side",
    structure: [
      { name: "Intro", chords: ["D", "A", "Em", "G"], repeats: 1 },
      { name: "Verse/Chorus", chords: ["D", "A", "Em", "G"], repeats: 4 }
    ],
    notes: "Use ambient delay and gradual build for the classic U2 sound.",
    suggestion: ["D", "A", "Em", "G"],
  },
  {
    id: 14,
    title: "Ring of Fire",
    artist: "Johnny Cash",
    chords: ["G", "C", "D"],
    lyricsSnippet: "Love is a burning thing and it makes a fiery ring",
    structure: [
      { name: "Intro", chords: ["G", "C", "D"], repeats: 1 },
      { name: "Verse/Chorus", chords: ["G", "C", "D"], repeats: 4 }
    ],
    notes: "Trumpet-like rhythm can be mimicked on guitar with muted strums.",
    suggestion: ["G", "C", "D"],
  },
  {
    id: 15,
    title: "Time After Time",
    artist: "Cyndi Lauper",
    chords: ["C", "G", "Am", "F"],
    lyricsSnippet: "If you're lost you can look and you will find me, time after time",
    structure: [
      { name: "Verse", chords: ["C", "G", "Am", "F"], repeats: 2 },
      { name: "Chorus", chords: ["C", "G", "Am", "F"], repeats: 2 }
    ],
    notes: "Soft, intimate arrangement; try fingerpicking for verses.",
    suggestion: ["C", "G", "Am", "F"],
  },
  {
    id: 16,
    title: "Every Rose Has Its Thorn",
    artist: "Poison",
    chords: ["G", "C", "D", "Em"],
    lyricsSnippet: "We both lie silently still in the dead of the night",
    structure: [
      { name: "Intro/Verse", chords: ["G", "C", "D", "Em"], repeats: 2 },
      { name: "Chorus", chords: ["G", "C", "D", "Em"], repeats: 2 }
    ],
    notes: "Slow ballad; clean tone and sparse picking complement the melody.",
    suggestion: ["G", "C", "D", "Em"],
  },
  {
    id: 17,
    title: "Redemption Song",
    artist: "Bob Marley",
    chords: ["G", "Em", "C", "Am"],
    lyricsSnippet: "Old pirates, yes, they rob I; sold I to the merchant ships",
    structure: [
      { name: "Intro/Verse", chords: ["G", "Em", "C", "Am"], repeats: 3 },
      { name: "Bridge", chords: ["C", "G", "Am"], repeats: 1 }
    ],
    notes: "Fingerstyle or light strum works well; consider capo to match vocal range.",
    suggestion: ["G", "Em", "C", "Am"],
  },
  {
    id: 18,
    title: "Blowin' in the Wind",
    artist: "Bob Dylan",
    chords: ["D", "G", "A"],
    lyricsSnippet: "How many roads must a man walk down?",
    structure: [
      { name: "Verse", chords: ["D", "G", "A"], repeats: 3 },
      { name: "Chorus", chords: ["D", "G", "A"], repeats: 1 }
    ],
    notes: "Simple folk strum; good for singalongs and open mic sets.",
    suggestion: ["D", "G", "A"],
  },
  {
    id: 19,
    title: "Love Me Do",
    artist: "The Beatles",
    chords: ["G", "C", "D"],
    lyricsSnippet: "Love, love me do; you know I love you",
    structure: [
      { name: "Intro/Verse", chords: ["G", "C", "D"], repeats: 2 },
      { name: "Bridge", chords: ["C", "D", "G"], repeats: 1 }
    ],
    notes: "Great beginner song; simple down-strums keep the momentum.",
    suggestion: ["G", "C", "D"],
  },
  {
    id: 20,
    title: "Take Me Home, Country Roads",
    artist: "John Denver",
    chords: ["G", "Em", "D", "C"],
    lyricsSnippet: "Almost heaven, West Virginia; country roads, take me home",
    structure: [
      { name: "Intro", chords: ["G", "Em", "D", "C"], repeats: 1 },
      { name: "Verse/Chorus", chords: ["G", "Em", "D", "C"], repeats: 4 }
    ],
    notes: "Open, folky strum; harmonies work well on the chorus.",
    suggestion: ["G", "Em", "D", "C"],
  },
];
