/* exported tail */
/* input : list of words
output: every word except for the first word
step1: Create a storage space for any letter that is not the first letter of the list of words
step2: Create a situation in which from the back of the list of words
step3: In the situation where you are at the position less than the length of the list of words
       keep going.
step4: give the result of returning every item but the first
step5: if there is nothing in the list of words, return nothing
step6: return the value of storage space */

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
