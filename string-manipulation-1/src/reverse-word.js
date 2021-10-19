/* exported reverseWord */
/* input: 'word'
output: 'drow'
step1: reverse letters in each word and store
step2: join back each letter into a word
step3: return the value of word */

function reverseWord(word) {
  var reverseWordResult = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWordResult += word[i];
  }
  return reverseWordResult;
}
