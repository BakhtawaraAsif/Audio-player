
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPause");
const stopButton = document.getElementById("stop");
const nextButton = document.getElementById("next");
const trackInfo = document.getElementById("trackInfo");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Play";
    } else {
        audio.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = "Play";
    isPlaying = false;
});

nextButton.addEventListener("click", () => {
    trackInfo.textContent = "Track: Another Awesome Song";
    audio.src = "audio/another_song.mp3";
    if (isPlaying) {
        audio.play();
    }
});
