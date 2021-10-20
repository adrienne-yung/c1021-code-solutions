/* var lightbulb = document.querySelector('lightbulb');
var background = document.querySelector('container');
lightbulb.addEventListener('click', function() {
  if (turnOn)
} else {
  (turnOff)
} */

/* var lightbulbButton = document.querySelector('.lightbulbButton');
var container = document.querySelector('.container');
lightbulbButton.onclick = function () {
  container.className.toggle('on');
} */

/* var on = 0;
lightbulb.addEventListener ('click', function light(on) {
  if (on === 0) {
    document.getElementsByClassName('.lightbulb .lightbulbButton::after');
    on = 1;
  } else (on === 1) {
    document.getElementsByClassName('.lightbulb .lightbulbButton::before ');
    on = 0;
  }
} */
var on = false;
var lightSwitch = document.querySelector('button');
// declare var named container
var container = document.querySelector('.container');
lightSwitch.addEventListener('click', function light(event) {
  if (on === true) {
    lightSwitch.classList.add('lightOff');
    // remove light-continer class from container
    container.classList.remove('light-container');
    on = false;
  } else {
    lightSwitch.classList.remove('lightOff');
    // add light-container class to container
    container.classList.add('light-container');
    on = true;
  }
});
