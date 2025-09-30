# ChordSongs - Guitar Learning App

ChordSongs helps beginner guitar players discover real songs they can play using only 3-4 chords they already know.

**Experience Qualities**:
1. **Approachable** - Removes intimidation from learning guitar by focusing on achievable songs
2. **Practical** - Provides immediate value with real songs and chord charts 
3. **Encouraging** - Builds confidence by showing what's possible with limited chords

**Complexity Level**: Light Application (multiple features with basic state)
- Chord selection, song filtering, song display, and favorites management with local persistence

## Essential Features

**Chord Picker**
- Functionality: Visual chord selector with common guitar chords (C, G, D, Em, Am, F, etc.). Avoid more complex chords like 7th, etc.
- Purpose: Constrains input to valid chords and prevents typos
- Trigger: User clicks chord buttons to build their chord set
- Progression: Select chords → see count update → view matching songs
- Success criteria: Users can select 3-4 chords and see selections clearly

**Song Discovery**
- Functionality: Filter static song database by selected chords, display up to 20 matches
- Purpose: Shows achievable songs based on user's current skill level
- Trigger: Automatic filtering as chords are selected
- Progression: Chord selection → instant song list update → browse results
- Success criteria: Relevant songs appear immediately, clear song information displayed

**Song Detail View**
- Functionality: Display lyrics with chord notations above relevant words
- Purpose: Provides playable sheet music for the selected song
- Trigger: Click on song from results list
- Progression: Click song → view chord chart → play along
- Success criteria: Clear chord placement, readable lyrics, easy navigation back

**Favorites System**
- Functionality: Save/unsave songs locally with heart icon toggle
- Purpose: Allows users to build a personal songbook
- Trigger: Click heart icon on any song
- Progression: Heart click → visual feedback → persist locally → access favorites view
- Success criteria: Favorites persist between sessions, clear visual state

## Edge Case Handling

- **No chord selection**: Show helpful prompt to select chords
- **No matching songs**: Display encouraging message with chord suggestions  
- **Invalid chord combinations**: Gracefully handle edge cases in filtering
- **Empty favorites**: Show inspirational empty state with discovery suggestions

## Design Direction

The design should feel warm and encouraging like a friendly guitar teacher, with a clean, uncluttered interface that prioritizes readability and reduces cognitive load for beginners.

## Color Selection

Complementary color scheme using soft blue and warm sand tones to create a calming, approachable feeling that reduces learning anxiety.

- **Primary Color**: Soft Blue (oklch(0.65 0.15 220)) - Communicates trust and calm learning
- **Secondary Colors**: Warm Sand (oklch(0.85 0.05 45)) - Provides warmth and approachability
- **Accent Color**: Coral Highlight (oklch(0.72 0.15 35)) - For favorites and important CTAs
- **Foreground/Background Pairings**:
  - Background (Cream #FDFCFA): Dark Blue text (oklch(0.25 0.1 220)) - Ratio 6.2:1 ✓
  - Primary (Soft Blue): White text (oklch(0.98 0 0)) - Ratio 5.1:1 ✓  
  - Secondary (Warm Sand): Dark Blue text (oklch(0.25 0.1 220)) - Ratio 8.3:1 ✓
  - Accent (Coral): White text (oklch(0.98 0 0)) - Ratio 4.9:1 ✓

## Font Selection

Clean, friendly sans-serif that maintains excellent readability for chord charts and lyrics while feeling approachable rather than technical.

- **Typographic Hierarchy**:
  - H1 (App Title): Inter Bold/32px/tight spacing
  - H2 (Song Titles): Inter Semibold/24px/normal spacing  
  - H3 (Section Headers): Inter Medium/18px/normal spacing
  - Body (Lyrics/UI): Inter Regular/16px/relaxed line height
  - Chords (Chord Names): Inter Bold/14px/tight spacing

## App Logo
Use file chordsongs_bigger_trans.png in the banner / header of the app page.
Use file chordsongs_original.png for the app logo

## Animations

Subtle, purposeful animations that provide gentle feedback and guide attention without overwhelming beginners who need to focus on learning.

- **Purposeful Meaning**: Smooth transitions communicate state changes clearly, heart animations reward positive actions
- **Hierarchy of Movement**: Chord selection gets immediate feedback, song transitions are smooth, favorites get satisfying micro-interactions

## Component Selection

- **Components**: Cards for songs, Buttons for chord selection, Tabs for navigation, Badge for chord indicators, Heart icon for favorites
- **Customizations**: Custom chord button grid layout, song card with chord preview, lyrics display with chord positioning
- **States**: Selected chords (highlighted), favorited songs (filled heart), active song (distinct card state)
- **Icon Selection**: Heart for favorites, music note for songs, guitar pick for chords, arrow-left for navigation
- **Spacing**: Consistent 4/6/8 spacing scale, generous padding for touch targets
- **Mobile**: Responsive chord grid, stacked layout for song details, thumb-friendly button sizes