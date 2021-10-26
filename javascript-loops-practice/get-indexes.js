/* exported getIndexes */
/* input: receive a list
output: return the positions of each value in the list
step1: Create a storage space for output
step2: Traverse through list until its end
step3: Create a situation in which each value you pass through in the array, you locate its position in the list
step4: Positions are store into the output
step5: Output is returned */

function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
