var header = document.querySelector('h1');
var seconds = 4;
var timerId = null;
function countdown() {
  seconds--;
  if (seconds > 0) {
    header.textContent = seconds;
  } else {
    header.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}

timerId = setInterval(countdown, 1000);
