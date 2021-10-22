/* input: webpage with 3 tabs to be clicked upon
output: upon clicking one of the three tabs, other two tabs are inactive.
step1: grab the container that is holding your tabs and tab contentand store their value
step2: give your tabs and tab content each a different value and store
step3: create a situation that allows you to click on the tab
step4: if you click on a certain tab and verify, the other tabs will not be active.
step5: in the situation that you clicked a tab, provide a path that allows you to take the
       tab content value along with it
step6: create a situation that allows a selected tab w/ its content will be on display but
       other tab and their contents will stay hidden. */

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', switchTab);
function switchTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = ' tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var e = 0; e < $view.length; e++) {
      if ($view[e].getAttribute('data-view') === dataView) {
        $view[e].className = 'view';
      } else {
        $view[e].className = 'view hidden';
      }
    }
  }
}
