const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

// 🎵 5-song playlist
const songs = [
  {
    title: "BELIEVER",
    artist: "Imagine Dragons",
    src: "Song1.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Imagine-Dragons-Believer-art.jpg/250px-Imagine-Dragons-Believer-art.jpg"
  },
  {
    title: "Night Changes",
    artist: "One Direction",
    src: "Night Changes.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4"
  },
  {
    title: "Lover",
    artist: "Taylor Swift",
    src: "Lover.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
  },
  {
    title: "Middle of The Night",
    artist: "Elley Duhé",
    src: "Midlle pf the night.mp3",
    cover: "https://a10.gaanacdn.com/gn_img/albums/D0PKLrWGl9/PKLqDdop3G/size_m.jpg"
  },
  {
    title: "Blue",
    artist: "Billie Eilish",
    src:"Blue.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273373c63a4666fb7193febc167"
  }
];

let currentSong = 0;

function loadSong(index) {
  const song = songs[index];
  title.innerText = song.title;
  artist.innerText = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
}

function playSong() {
  audio.play();
  playBtn.innerText = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.innerText = "▶️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  playSong();
});

// Auto-play next song when current ends
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// Initial song load
loadSong(currentSong);
