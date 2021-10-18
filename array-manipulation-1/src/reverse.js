/* exported reverse */
/* input: array
output: reverse display of array list
step1: */

function reverse(array) {
  var reverseArrayResult = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArrayResult += array[i];
    if (array === []) {
      return [];
    } else {
      reverseArrayResult = array.split(' ');
    }
  }
  return reverseArrayResult;
}
