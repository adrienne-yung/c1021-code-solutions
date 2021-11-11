/* exported firstChars */
/* Input: Given a string of words
Output: Remove words/letters after a given character
step1: Create a storage space for new string
step2: Make the value of your new storage space equivalent to given length
step3: Return your output */

function firstChars(length, string) {
  var newString = '';
  newString = string.slice(0, length);
  return newString;
}
