var $openModalButton = document.querySelector('.open-modal-button');
var $popUp = document.querySelector('.pop-up');
$openModalButton.addEventListener('click', popUp);
function popUp(event) {
  if (event.target.matches('.open-modal-button')) {
    $popUp.className = 'pop-up active';
  } else {
    $popUp.className = 'pop-up';
  }
}
var $noButton = document.querySelector('.noButton');
$noButton.addEventListener('click', closePopUp);
function closePopUp(event) {
  if (event.target.matches('.noButton')) {
    $popUp.className = 'pop-up';
  }
}
