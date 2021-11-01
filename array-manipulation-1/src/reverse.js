/* exported reverse */
/* input: array
output: reverse display of array list
step1: */

function reverse(array) {
  var reverseArrayResult = [];
  if (array.length !== 0) {
    for (var i = array.length - 1; i >= 0; i--) {
      reverseArrayResult += array[i];
    }
  } else {
    array = [];
  }
  return reverseArrayResult;
}
