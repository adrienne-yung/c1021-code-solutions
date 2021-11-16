/* exported capitalizeWord */
/* Input: A single word with random letters capitalized
Output: Single word with only the first letter capitalized, unless the word is
        JavaScript, must be spelled JavaScript
step1: Create a storage space for the first letter of each word and capitalize it
step2: Create a storage space for the remaining letters of the word
step3: Traverse through the word and lowercase everything that isn't the first letter
step4: In the situation that the word is a variation of the word "JavaScript", value must
       properly spell "JavaScript". Store all values
step5: Return all values of storage spaces. */

function capitalizeWord(word) {
  var firstChar = word[0].toUpperCase();
  var remainingLetters = '';
  for (var i = 1; i <= word.length - 1; i++) {
    remainingLetters += word[i].toLowerCase();
  }
  var wholeWord = firstChar + remainingLetters;
  if (wholeWord === 'Javascript') {
     wholeWord = 'JavaScript';
  }
  return wholeWord;
}
