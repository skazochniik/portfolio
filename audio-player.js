const audio = document.getElementById("customAudio");
const audioBtn = document.getElementById("audioBtn");
const audioTrack = document.getElementById("audioTrack");
const audioProgress = document.getElementById("audioProgress");
const audioCurrent = document.getElementById("audioCurrent");
const audioDuration = document.getElementById("audioDuration");

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}


audioDuration.textContent = "1:40";

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = "Pause";
  } else {
    audio.pause();
    audioBtn.textContent = "Play";
  }
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  audioProgress.style.width = `${percent}%`;
  audioCurrent.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("ended", () => {
  audioBtn.textContent = "Play";
});

audioTrack.addEventListener("click", (e) => {
  const rect = audioTrack.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const newTime = (clickX / width) * audio.duration;
  audio.currentTime = newTime;
});