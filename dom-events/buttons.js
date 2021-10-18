var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $handleMouseover = document.querySelector('.hover-button');
$handleMouseover.addEventListener('mouseover', handleMouseover);
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event-target:', event.target);
}

var $handleDoubleClick = document.querySelector('.double-click-button');
$handleDoubleClick.addEventListener('dblclick', handleDoubleClick);
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
