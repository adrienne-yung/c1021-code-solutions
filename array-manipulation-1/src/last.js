/* exported last */
/* input: array
output: last item of array
step1: Create a storage space for the last item of an array
step2: Create a storage space to access the last element
step3: Return the value of storage space */

function last(array) {
  var arrayIndex = array.length - 1;
  var lastElement = array[arrayIndex];
  return lastElement;
}
