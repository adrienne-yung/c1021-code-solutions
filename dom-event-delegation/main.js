var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', clickTaskList, false);
function clickTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  var taskListItem = document.querySelector('.task-list-item');
  var closestElement = $taskList.closest('.task-list-item');
  if (event.target.tagName === 'BUTTON') {
    console.log(closestElement);
    taskListItem.remove();
  }
}
