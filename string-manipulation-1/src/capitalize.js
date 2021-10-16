/* exported capitalize */
/* input: "a" , "link" , "tO" , "ThE" , "pAst"
output: "A" , "Link" , "To" , "The" , "Past"
step1: Note each letter of a word to see which letters are capitalized and non-capitalized.
step2: Create a storage space for the first letter the word
step3: Create a storage space for any other letter than is not the first letter of the word.
step4: Capitalize and store first letter
step5: For every letter after the first leter, add current letter to remaining letters non-capitalized, then store.
step6: give back first letter with remaining letters */

function capitalize(word) {
  var firstChar = word[0].toUpperCase();
  var remainingLetters = '';
  for (var i = 1; i <= word.length - 1; i++) {
    remainingLetters = word[i].toLowerCase();
  }
  return firstChar + remainingLetters;
}
