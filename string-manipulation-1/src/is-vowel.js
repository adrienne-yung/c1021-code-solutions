/* exported isVowel */
/* input: letter
output: true if letter is a vowel, false if letter is not a vowel
step1: return value of "true" if value is a vowel, return value of "false" if letter is not a vowel. */

function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    return true;
  } else {
    return false;
  }
}
