// ===== PLAYER PAGE LOGIC =====

let currentProgress = appState.progress || 0;
let isPlaying = appState.isPlaying || false;

function renderPlayer() {
  const track = appState.queue[appState.currentTrackIndex];
  if (!track) return;

  // Update DOM
  document.getElementById('trackTitle').textContent = track.title;
  document.getElementById('trackArtist').textContent = track.artist;
  document.getElementById('trackAlbum').textContent = `${track.album} · ${track.year}`;
  document.getElementById('vinylTitle').textContent = track.title.toUpperCase();
  document.getElementById('totalTime').textContent = track.duration;
  document.getElementById('sidebarTitle').textContent = track.title;
  document.getElementById('sidebarArtist').textContent = track.artist;

  // Vinyl color
  const label = document.querySelector('.vinyl-label');
  label.style.background = `linear-gradient(135deg, ${track.color}, ${track.color}88)`;

  // Glow color
  const glow = document.getElementById('albumGlow');
  glow.style.background = `radial-gradient(circle, ${track.color}22, transparent 70%)`;

  // Sidebar cover color
  const cover = document.getElementById('sidebarCover');
  cover.style.background = `linear-gradient(135deg, ${track.color}, ${track.color}66)`;

  // Like button
  const likeBtn = document.getElementById('likeBtn');
  likeBtn.textContent = track.liked ? '♥' : '♡';
  likeBtn.classList.toggle('liked', track.liked);

  // Up Next
  renderUpNext();

  // Update vinyl spinning state
  const vinyl = document.getElementById('vinylDisk');
  vinyl.classList.toggle('spinning', isPlaying);
}

function renderUpNext() {
  const container = document.getElementById('nextTracks');
  const startIdx = (appState.currentTrackIndex + 1) % appState.queue.length;
  const nextFive = [];
  for (let i = 0; i < 5; i++) {
    nextFive.push(appState.queue[(startIdx + i) % appState.queue.length]);
  }

  container.innerHTML = nextFive.map(track => `
    <div class="next-track-card" onclick="jumpToTrack(${appState.queue.indexOf(track)})">
      <div class="next-track-cover">${track.emoji}</div>
      <div class="next-track-title">${track.title}</div>
      <div class="next-track-artist">${track.artist}</div>
    </div>
  `).join('');
}

function togglePlay() {
  isPlaying = !isPlaying;
  appState.isPlaying = isPlaying;
  const btn = document.getElementById('playPauseBtn');
  btn.textContent = isPlaying ? '⏸' : '▶';
  const vinyl = document.getElementById('vinylDisk');
  vinyl.classList.toggle('spinning', isPlaying);

  if (isPlaying) {
    startProgress();
  } else {
    stopProgress();
  }
  saveState();
}

function startProgress() {
  stopProgress();
  const track = appState.queue[appState.currentTrackIndex];
  if (!track) return;
  appState.progressTimer = setInterval(() => {
    currentProgress += (100 / track.durationSec) * 0.1;
    if (currentProgress >= 100) {
      currentProgress = 0;
      nextTrack();
      return;
    }
    updateProgressUI();
    appState.progress = currentProgress;
  }, 100);
}

function stopProgress() {
  if (appState.progressTimer) {
    clearInterval(appState.progressTimer);
    appState.progressTimer = null;
  }
}

function updateProgressUI() {
  const fill = document.getElementById('progressFill');
  const thumb = document.getElementById('progressThumb');
  if (fill) fill.style.width = currentProgress + '%';
  if (thumb) thumb.style.left = `calc(${currentProgress}% - 6px)`;

  // Update current time
  const track = appState.queue[appState.currentTrackIndex];
  if (track) {
    const elapsed = Math.floor((currentProgress / 100) * track.durationSec);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const el = document.getElementById('currentTime');
    if (el) el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}

function seek(event) {
  const bar = document.getElementById('progressBar');
  const rect = bar.getBoundingClientRect();
  currentProgress = ((event.clientX - rect.left) / rect.width) * 100;
  currentProgress = Math.max(0, Math.min(100, currentProgress));
  appState.progress = currentProgress;
  updateProgressUI();
}

function prevTrack() {
  if (currentProgress > 10) {
    currentProgress = 0;
    updateProgressUI();
    return;
  }
  appState.currentTrackIndex = (appState.currentTrackIndex - 1 + appState.queue.length) % appState.queue.length;
  currentProgress = 0;
  renderPlayer();
  if (isPlaying) startProgress();
  saveState();
}

function nextTrack() {
  if (appState.repeatMode === 2) {
    currentProgress = 0;
    updateProgressUI();
    if (isPlaying) startProgress();
    return;
  }
  if (appState.isShuffle) {
    appState.currentTrackIndex = Math.floor(Math.random() * appState.queue.length);
  } else {
    appState.currentTrackIndex = (appState.currentTrackIndex + 1) % appState.queue.length;
  }
  currentProgress = 0;
  renderPlayer();
  if (isPlaying) startProgress();
  saveState();
}

function jumpToTrack(index) {
  appState.currentTrackIndex = index;
  currentProgress = 0;
  renderPlayer();
  if (!isPlaying) {
    isPlaying = true;
    appState.isPlaying = true;
    document.getElementById('playPauseBtn').textContent = '⏸';
    document.getElementById('vinylDisk').classList.add('spinning');
  }
  startProgress();
  saveState();
}

function toggleShuffle() {
  appState.isShuffle = !appState.isShuffle;
  document.getElementById('shuffleBtn').classList.toggle('active', appState.isShuffle);
  saveState();
}

function toggleRepeat() {
  appState.repeatMode = (appState.repeatMode + 1) % 3;
  const btn = document.getElementById('repeatBtn');
  const modes = ['↺', '↻', '↻¹'];
  btn.textContent = modes[appState.repeatMode];
  btn.classList.toggle('active', appState.repeatMode > 0);
  saveState();
}

function setVolume(event) {
  const bar = document.getElementById('volumeBar');
  const rect = bar.getBoundingClientRect();
  appState.volume = (event.clientX - rect.left) / rect.width;
  appState.volume = Math.max(0, Math.min(1, appState.volume));
  document.getElementById('volumeFill').style.width = (appState.volume * 100) + '%';
  saveState();
}

function toggleLike() {
  const track = appState.queue[appState.currentTrackIndex];
  if (!track) return;
  track.liked = !track.liked;
  const origTrack = TRACKS.find(t => t.id === track.id);
  if (origTrack) origTrack.liked = track.liked;
  renderPlayer();
  saveState();
}

function addToPlaylist() {
  alert(`"${appState.queue[appState.currentTrackIndex].title}" — Choose a playlist in the Playlists tab!`);
}

function shareTrack() {
  const track = appState.queue[appState.currentTrackIndex];
  if (navigator.share) {
    navigator.share({ title: track.title, text: `Listening to ${track.title} by ${track.artist} on SONIX` });
  } else {
    alert(`Copied: "${track.title}" by ${track.artist}`);
  }
}

// ===== AUDIO VISUALIZER =====
function initVisualizer() {
  const canvas = document.getElementById('visualizer');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth - 220;
    canvas.height = 80;
  }
  resize();
  window.addEventListener('resize', resize);

  const bars = 64;
  const heights = Array.from({ length: bars }, () => Math.random() * 40 + 5);
  const targets = Array.from({ length: bars }, () => Math.random() * 40 + 5);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barW = canvas.width / bars;

    for (let i = 0; i < bars; i++) {
      if (isPlaying) {
        targets[i] = Math.random() * 60 + 5;
      }
      heights[i] += (targets[i] - heights[i]) * 0.15;

      const h = heights[i];
      const x = i * barW;
      const alpha = isPlaying ? 0.6 : 0.2;

      ctx.fillStyle = `rgba(232, 255, 71, ${alpha})`;
      ctx.fillRect(x + 1, canvas.height - h, barW - 2, h);
    }

    requestAnimationFrame(draw);
  }
  draw();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderPlayer();
  initVisualizer();

  // Set initial button states
  document.getElementById('shuffleBtn').classList.toggle('active', appState.isShuffle);
  document.getElementById('repeatBtn').classList.toggle('active', appState.repeatMode > 0);
  document.getElementById('volumeFill').style.width = (appState.volume * 100) + '%';
  const modes = ['↺', '↻', '↻¹'];
  document.getElementById('repeatBtn').textContent = modes[appState.repeatMode];

  if (isPlaying) {
    document.getElementById('playPauseBtn').textContent = '⏸';
    startProgress();
  }

  currentProgress = appState.progress || 0;
  updateProgressUI();
});
