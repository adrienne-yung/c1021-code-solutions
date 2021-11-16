/* exported compact */
/* input: list of words
output: list of words removed of null, undefined, negative values, and false
step1: Create a storage space for list of words.
step2: Create a situation in which you can remove all unwanted features
step3: Traverse through the list of words if you have not finished the list of words
step4: Store new set of list of words
step5: Return values in storage space. */

function compact(array) {
  var values = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] !== false) && (array[i] !== '') && (array[i] !== null) && (array[i] !== undefined) && (Number.isNaN(array[i]) !== true) && (array[i] !== 0)) {
      values.push(array[i]);
    }
  }
  return values;
}
