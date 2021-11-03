/* exported reverse */
/* input: array
output: reverse display of list
step1: Create a storage space for reversed list
step2: Create situation that the length of a list is not 0
step3: Continue to pass through the list from the back if the
        list length has not reached 0
step4: if the list is empty, return empty
step5: store values into storage space
step6: return values */

function reverse(array) {
  var reverseArrayResult = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArrayResult.push(array[i]);
  }
  return reverseArrayResult;
}
