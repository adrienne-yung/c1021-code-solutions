/* exported reverseWord */
/* input: 'word'
output: 'drow'
step1: Create storage for output
step2: Return value of output */

function reverseWord(word) {
  var output = word.split('').reverse().join('');
  return output;
}
