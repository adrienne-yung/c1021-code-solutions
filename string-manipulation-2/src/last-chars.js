/* exported lastChars */
/* Input: Given a string of words
Output: Return the last set of characters for X numbers
step1: Create a storage space for your output value
step2: Cut off everything that you don't need starting from the end (counting back) and store
step3: Return the output value of your storage space. */

function lastChars(length, string) {
  var newString = '';
  newString = string.slice(-length, string.length)
  return newString;
}
