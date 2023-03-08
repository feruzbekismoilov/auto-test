

const startingMinutes = 10;
let time = startingMinutes * 60;
const coundownEl = document.getElementById('coundown');
setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    coundownEl.textContent= `${minutes}:${seconds}`;
    time--;
}