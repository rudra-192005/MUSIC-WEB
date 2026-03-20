// ===== SONIX MUSIC APP — SHARED DATA =====

const TRACKS = [
  {
    id: 1,
    title: "Midnight Drive",
    artist: "NEON PULSE",
    album: "Chromatic Nights",
    year: 2024,
    duration: "3:42",
    durationSec: 222,
    genre: "Synthwave",
    emoji: "🌙",
    color: "#e8ff47",
    bg: "linear-gradient(135deg, #1a2a0a, #0d1a1a)",
    liked: false,
  },
  {
    id: 2,
    title: "Electric Soul",
    artist: "CHROME WAVE",
    album: "Parallels",
    year: 2024,
    duration: "4:15",
    durationSec: 255,
    genre: "Electronic",
    emoji: "⚡",
    color: "#47c8ff",
    bg: "linear-gradient(135deg, #0a1a2a, #0d0d1a)",
    liked: true,
  },
  {
    id: 3,
    title: "Solar Drift",
    artist: "ORBIT SOUND",
    album: "Cosmos",
    year: 2023,
    duration: "5:02",
    durationSec: 302,
    genre: "Ambient",
    emoji: "☀️",
    color: "#ff9947",
    bg: "linear-gradient(135deg, #2a1a0a, #1a0d0d)",
    liked: false,
  },
  {
    id: 4,
    title: "Neon Bloom",
    artist: "FLORA X",
    album: "Overgrown",
    year: 2024,
    duration: "3:28",
    durationSec: 208,
    genre: "Synthpop",
    emoji: "🌸",
    color: "#ff47c8",
    bg: "linear-gradient(135deg, #2a0a1a, #1a0d1a)",
    liked: false,
  },
  {
    id: 5,
    title: "Glass Rain",
    artist: "VAPOR ECHO",
    album: "Dissolution",
    year: 2023,
    duration: "6:18",
    durationSec: 378,
    genre: "Ambient",
    emoji: "🌧️",
    color: "#a0a8ff",
    bg: "linear-gradient(135deg, #0a0a2a, #0d0a1a)",
    liked: true,
  },
  {
    id: 6,
    title: "Pulse Code",
    artist: "SYNTAX ERR",
    album: "Debug Mode",
    year: 2024,
    duration: "4:33",
    durationSec: 273,
    genre: "Electronic",
    emoji: "💻",
    color: "#47ffb8",
    bg: "linear-gradient(135deg, #0a2a1a, #0d1a1a)",
    liked: false,
  },
  {
    id: 7,
    title: "Retrograde",
    artist: "NEON PULSE",
    album: "Chromatic Nights",
    year: 2024,
    duration: "3:55",
    durationSec: 235,
    genre: "Synthwave",
    emoji: "📼",
    color: "#e8ff47",
    bg: "linear-gradient(135deg, #1a2a0a, #0d1a1a)",
    liked: false,
  },
  {
    id: 8,
    title: "Aurora Kiss",
    artist: "DREAMSCAPE",
    album: "Northern Light",
    year: 2023,
    duration: "5:44",
    durationSec: 344,
    genre: "Dream Pop",
    emoji: "🌌",
    color: "#c8a0ff",
    bg: "linear-gradient(135deg, #1a0a2a, #0d0d1a)",
    liked: true,
  },
  {
    id: 9,
    title: "Infrared",
    artist: "CHROME WAVE",
    album: "Parallels",
    year: 2024,
    duration: "4:07",
    durationSec: 247,
    genre: "Electronic",
    emoji: "🔴",
    color: "#ff4e6a",
    bg: "linear-gradient(135deg, #2a0a0a, #1a0a0d)",
    liked: false,
  },
  {
    id: 10,
    title: "Deep Frequency",
    artist: "BASSLINE",
    album: "Underground",
    year: 2024,
    duration: "7:01",
    durationSec: 421,
    genre: "Techno",
    emoji: "🔊",
    color: "#ff8c47",
    bg: "linear-gradient(135deg, #1a0a00, #0d0800)",
    liked: false,
  },
  {
    id: 11,
    title: "Ether Walk",
    artist: "ORBIT SOUND",
    album: "Cosmos",
    year: 2023,
    duration: "4:52",
    durationSec: 292,
    genre: "Ambient",
    emoji: "🪐",
    color: "#47c8ff",
    bg: "linear-gradient(135deg, #0a1a2a, #0d0d1a)",
    liked: true,
  },
  {
    id: 12,
    title: "Binary Sunset",
    artist: "SYNTAX ERR",
    album: "Debug Mode",
    year: 2024,
    duration: "3:17",
    durationSec: 197,
    genre: "Electronic",
    emoji: "🌅",
    color: "#ffcc47",
    bg: "linear-gradient(135deg, #1a1200, #0d0d00)",
    liked: false,
  },
];

const PLAYLISTS = [
  {
    id: 1,
    name: "Late Night Drives",
    description: "Dark synthwave for empty roads",
    trackIds: [1, 7, 3, 8],
    color: "#e8ff47",
    tag: "Synthwave",
    tagColor: "rgba(232,255,71,0.15)",
    tagTextColor: "#e8ff47",
  },
  {
    id: 2,
    name: "Focus Mode",
    description: "Ambient flows for deep work",
    trackIds: [3, 5, 8, 11],
    color: "#47c8ff",
    tag: "Ambient",
    tagColor: "rgba(71,200,255,0.15)",
    tagTextColor: "#47c8ff",
  },
  {
    id: 3,
    name: "Club Energy",
    description: "Heavy beats for maximum output",
    trackIds: [2, 6, 9, 10, 12],
    color: "#ff4e6a",
    tag: "Electronic",
    tagColor: "rgba(255,78,106,0.15)",
    tagTextColor: "#ff4e6a",
  },
  {
    id: 4,
    name: "Dream State",
    description: "Drifting through clouds",
    trackIds: [4, 8, 5, 11],
    color: "#c8a0ff",
    tag: "Dream Pop",
    tagColor: "rgba(200,160,255,0.15)",
    tagTextColor: "#c8a0ff",
  },
  {
    id: 5,
    name: "My Favorites",
    description: "All the songs I love",
    trackIds: [2, 5, 8, 11],
    color: "#ff9947",
    tag: "Mixed",
    tagColor: "rgba(255,153,71,0.15)",
    tagTextColor: "#ff9947",
  },
  {
    id: 6,
    name: "New Discoveries",
    description: "Recent finds and gems",
    trackIds: [6, 9, 12, 10],
    color: "#47ffb8",
    tag: "Fresh",
    tagColor: "rgba(71,255,184,0.15)",
    tagTextColor: "#47ffb8",
  },
];

const USER = {
  name: "Alex Rivera",
  handle: "@alexbeats",
  avatar: "🎧",
  joined: "March 2022",
  totalPlays: 8472,
  hoursListened: 412,
  likedSongs: 89,
  playlists: 6,
  topArtists: [
    { name: "NEON PULSE", plays: 284, emoji: "🌙", color: "#e8ff47" },
    { name: "CHROME WAVE", plays: 201, emoji: "⚡", color: "#47c8ff" },
    { name: "ORBIT SOUND", plays: 178, emoji: "🪐", color: "#ff9947" },
    { name: "DREAMSCAPE", plays: 156, emoji: "🌌", color: "#c8a0ff" },
    { name: "VAPOR ECHO", plays: 134, emoji: "🌧️", color: "#a0a8ff" },
  ],
  genreBreakdown: [
    { genre: "Synthwave", pct: 38, color: "#e8ff47" },
    { genre: "Electronic", pct: 28, color: "#47c8ff" },
    { genre: "Ambient", pct: 18, color: "#ff9947" },
    { genre: "Dream Pop", pct: 10, color: "#c8a0ff" },
    { genre: "Techno", pct: 6, color: "#ff4e6a" },
  ],
  recentActivity: [
    { text: "Liked <strong>Glass Rain</strong> by VAPOR ECHO", time: "2h ago", color: "#ff4e6a" },
    { text: "Added <strong>Midnight Drive</strong> to Late Night Drives", time: "5h ago", color: "#e8ff47" },
    { text: "Followed <strong>CHROME WAVE</strong>", time: "Yesterday", color: "#47c8ff" },
    { text: "Created playlist <strong>Dream State</strong>", time: "2 days ago", color: "#c8a0ff" },
    { text: "Liked <strong>Aurora Kiss</strong> by DREAMSCAPE", time: "3 days ago", color: "#ff4e6a" },
  ],
};

// App State
const appState = {
  currentTrackIndex: 0,
  queue: [...TRACKS],
  isPlaying: false,
  isShuffle: false,
  repeatMode: 0, // 0=off, 1=all, 2=one
  volume: 0.7,
  progress: 0,
  progressTimer: null,
};

// Get track by ID
function getTrack(id) {
  return TRACKS.find(t => t.id === id);
}

// Save/load state from localStorage
function saveState() {
  try {
    localStorage.setItem('sonix_state', JSON.stringify({
      currentTrackIndex: appState.currentTrackIndex,
      isPlaying: appState.isPlaying,
      isShuffle: appState.isShuffle,
      repeatMode: appState.repeatMode,
      volume: appState.volume,
      progress: appState.progress,
    }));
    localStorage.setItem('sonix_playlists', JSON.stringify(PLAYLISTS));
    localStorage.setItem('sonix_liked', JSON.stringify(TRACKS.map(t => ({ id: t.id, liked: t.liked }))));
  } catch(e) {}
}

function loadState() {
  try {
    const s = localStorage.getItem('sonix_state');
    if (s) {
      const parsed = JSON.parse(s);
      Object.assign(appState, parsed);
    }
    const liked = localStorage.getItem('sonix_liked');
    if (liked) {
      JSON.parse(liked).forEach(item => {
        const t = TRACKS.find(t => t.id === item.id);
        if (t) t.liked = item.liked;
      });
    }
  } catch(e) {}
}

loadState();
