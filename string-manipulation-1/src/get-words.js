/* exported getWords */
/* input: receive group of words
output: make group of words into a list
step1:  divide each group of words into a list of words
step2: if there are no words in the supposed group of words, then don't return
step3: return values */

function getWords(string) {
  var array = string.split(' ');
  if (string === '') {
    return [];
  } else {
    array = string.split(' ');
  }
  return array;
}
