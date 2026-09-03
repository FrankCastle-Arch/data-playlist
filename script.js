let button = document.getElementById("song-button");


async function loadSongs() {
	let response = await fetch("https://student-data-api.danielle-eversonriley.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
	let data = await response.json();
	let songs = data.records;
	let song = songs[index];


	document.getElementById("track-name").textContent = song["Track Name"];
	document.getElementById("track-facts").textContent = "#" + song.Position + " — " + song.Artist;

}

button.addEventListener("click", function () {
  loadSongs();
});
