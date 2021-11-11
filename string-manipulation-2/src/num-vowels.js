/* exported numVowels */
/* Input: Given a string of words
Output: Return the number of vowels in the string
step1: Create a storage space for the number of vowels
step2: Create a storage space to turn all words inside the string into uppercase letters
step3: Traverse through every word within the string
step4: In the condition that any of those letters are any of the upper cased vowels, add 1 to count
step5: Return output of your count storage space. */

function numVowels(string) {
var vowelCount = 0;
var upperCaseVowels = string.toUpperCase();
for (var i = 0; i < upperCaseVowels.length; i++) {
  if (upperCaseVowels[i] === 'A' || upperCaseVowels[i] === 'E' || upperCaseVowels[i] === 'I' || upperCaseVowels[i] === 'O' || upperCaseVowels[i] === 'U') {
    vowelCount++;
  }
 }
  return vowelCount;
}
