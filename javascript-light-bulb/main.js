var on = false;
var lightSwitch = document.querySelector('button');
var container = document.querySelector('.container');
lightSwitch.addEventListener('click', function light(event) {
  if (on === true) {
    lightSwitch.classList.add('lightOff');
    container.classList.remove('light-container');
    on = false;
  } else {
    lightSwitch.classList.remove('lightOff');
    container.classList.add('light-container');
    on = true;
  }
});
