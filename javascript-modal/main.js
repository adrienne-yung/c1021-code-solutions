var $openModalButton = document.querySelector('.open-modal-button');
var $modalWindow = document.querySelector('.modal');
$openModalButton.addEventListener('click', openModalBox);
function openModalBox(event) {
  if (event.target.matches('.open-modal-button')) {
    $modalWindow.className = ' modal active';
  } else {
    $modalWindow.className = 'modal';
  }
}
var noButton = document.querySelector('.noButton');
noButton.addEventListener('click', clickNoButton);
function clickNoButton(event) {
  if (event.target.matches('.noButton')) {
    $modalWindow.className = 'modal';
  } else {
    $modalWindow.ClassName = 'modal active';
  }
}
