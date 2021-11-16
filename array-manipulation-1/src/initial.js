/* exported initial */
/* input: array
output: every item in the array except for its last item
step1: Create a storage space for all items for an array except for its last
step2: Create a situation in which if you the length of the list is not 0:
step3: traverse through the list of words
step4: store values of every item but the last
step5: if the list of words is empty, return nothing
step2: Return the value of storage space */

function initial(array) {
  var initialResult = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialResult.push(array[i]);
  }
  return initialResult;
}
