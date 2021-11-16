/* exported swapChars */
/* Input: Given a string of words
Output: swap X with Y and return the string of words with the changes
step1: Create a storage space for your output
step2: Break down your word into individual letters
step3: Create a storage space to hold the value of X
step4: Create a storage space to hold the value of Y
step5: Change the value of the X to Y
step6: Change the value of Y to X
step7: Join together the letters again to create the word with changes, and store it in your output storage space
step8: Return the value of your storage space */

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var array = string.split('');
  var first = array[firstIndex];
  var second = array[secondIndex];
  array[firstIndex] = second;
  array[secondIndex] = first;
  newString = array.join('');
  return newString;
}
