/* exported initial */
/* input: array
output: every item in the array except for its last item
step1: Create a storage space for all items for an array except for its last
step2: Return the value of storage space */

function initial(array) {
  var initialResult = [];
  if (array.length !== 0) {
    for (var i = 0; i < array.length; i++) {
      initialResult += array[i];
    }
  } else {
    array = [];
  }
  return initialResult;
}
