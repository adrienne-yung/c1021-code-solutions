/* exported tail */
/* input : list of words
output: every word except for the first word
step1: Create a storage space for any letter that is not the first letter of the list of words
step2: return the value of storage space */

function tail(array) {
  var output = [];
  if (array.length !== 0) {
    for (var i = 1; i < array.length; i++) {
      output[i - 1] = array[i];
    }
  } else {
    array = [];
  }
  return output;
}
