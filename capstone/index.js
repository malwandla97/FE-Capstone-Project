const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const trackList = document.getElementById("track-list");
const audioPlayer = document.getElementById("audio-player");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const albumCover = document.getElementById("album-cover");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value;
  fetch(`https://api.deezer.com/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      trackList.innerHTML = "";
      data.data.forEach((track) => {
        const trackCard = document.createElement("div");
        trackCard.className = "p-4 border rounded shadow-sm";
        trackCard.innerHTML = `
          <img src="${track.album.cover_medium}" alt="Album Cover" class="w-full h-48 object-cover rounded">
          <h3 class="text-lg font-semibold mt-2">${track.title}</h3>
          <p class="text-sm text-gray-500">${track.artist.name}</p>
        `;
        trackCard.addEventListener("click", () => {
          trackTitle.textContent = track.title;
          trackArtist.textContent = track.artist.name;
          albumCover.src = track.album.cover_medium;
          audioPlayer.src = track.preview;
          audioPlayer.play();
        });
        trackList.appendChild(trackCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});