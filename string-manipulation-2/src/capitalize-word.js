/* exported capitalizeWord */
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
