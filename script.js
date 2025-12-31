const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    src: "music/song1.mp3"
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    src: "music/song2.mp3"
  }
];

let current = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");

function loadSong() {
  audio.src = songs[current].src;
  title.textContent = songs[current].title;
  artist.textContent = songs[current].artist;
}
loadSong();

function togglePlay() {
  audio.paused ? audio.play() : audio.pause();
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong();
  audio.play();
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
