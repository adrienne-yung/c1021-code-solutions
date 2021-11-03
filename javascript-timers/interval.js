// var header = document.querySelector('h1');
// function changeHeader() {
//   if (header.textContent === 4) {
//     header.textContent = 3;
//   } else if (header.textContent === 3) {
//     header.textContent = 2;
//   } else if (header.textContent === 2) {
//     header.textContent = 1;
//   } else {
//     header.textContent = 'Earth below us';
//   }
// }

// setInterval(changeHeader, 1000);

// var header = document.querySelector('h1');
// var interval = setInterval(function () {
//   if (header <= 4) {
//     header.textContent = 'Earth Below Us';
//     clearInterval(interval);
//   }
// }, 1000);

// var header = document.querySelector('h1');
// function countdown(seconds) {
//   var counter = seconds;
//   var interval = setInterval(() {
//     counter--;
//     if (counter < 0) {
//       clearInterval(interval);
//       header.textContent = "Earth Below Us"
//     }
//   }, 1000);
// }

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
