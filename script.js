let songButton = document.getElementById("song-button");
let nextButton = document.getElementById("next-button");
let prevButton = document.getElementById("prev-button");
let songs = [];
let index = 0;

async function loadSongs() {
    let response = await fetch("https://student-data-api.danielle-eversonriley.workers.dev/api/v1/datasets/viral-50-usa/records?limit=50");
    let data = await response.json();
    songs = data.records;
	index = 0;
    showSong();
}

function showSong() {
    let song = songs[index];
	let namel = document.getElementById("track-name");
	namel.textContent = song["Track Name"];
    document.getElementById("track-facts").textContent = song.Artist;

    
	namel.classList.remove("track-updated");
    void namel.offsetWidth;
    namel.classList.add("track-updated");
}

function showNextSong() {
    index = (index + 1) % songs.length; 
    showSong();
}

function showPrevSong() {
    index = (index - 1 + songs.length) % songs.length; 
    showSong();
}

songButton.addEventListener("click", function () {
    loadSongs();
});

nextButton.addEventListener("click", function () {
    if (songs.length === 0) return; 
    showNextSong();
});

prevButton.addEventListener("click", function () {
    if (songs.length === 0) return; 
    showPrevSong();
});