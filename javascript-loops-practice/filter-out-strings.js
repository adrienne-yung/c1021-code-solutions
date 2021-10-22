/* exported filterOutStrings */
/* Input: receive an list of values
Output: a new list of values only containing values that are not strings
step1: Create a storage space for new list
step2: Cycle through each value item of the list until list is over
step3: If the type of value is a 'string' or a group of words, expel it from the list
step4: return the value of the new list in the storage space. */

function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}
