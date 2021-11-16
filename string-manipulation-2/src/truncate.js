/* exported truncate */
/* Input: A list of words
Output: A shortened version of a string, plus "..."
step1: Create a storage space for string
step2: Travel through the string of words
step3: Upon hitting desired length within the list of words, other words
       will be replaced by "..."
step4: Store this value in previously made storage space
step5: Return value as output */

function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
