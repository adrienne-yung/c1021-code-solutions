/* exported ransomCase */
/* Input: A string
Output: A string with every other letter capitalized
step1: Create a storage space for value
step2: Traverse through the word
step3: If the word is not even, uppercase it, store
step4: If the word is even, lowercase it, store
step5: Return the storage space value as output */

function ransomCase(string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      word += string[i].toUpperCase();
    } else {
      word += string[i].toLowerCase();
    }
  }
  return word;
}
