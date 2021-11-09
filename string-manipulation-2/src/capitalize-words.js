/* exported capitalizeWords */
/* Input: A String
Output: A string with every word Capitalized
step1: Create a storage value for output
step2: Traverse through string of words
step3: If a new word is found, capitalize the first letter of each word
step4: Lowercase every word that is not the first letter
step5: Return storage space as value. */

function capitalizeWords(string) {
  var newArray = string.split(' ');
  var responseArray = []
  for (var i = 0; i < newArray.length; i++) {
    upperCaseLetter = newArray[i][0].toUpperCase()
    newWord = upperCaseLetter + newArray[i].substring(1, newArray[i].length).toLowerCase()
    responseArray.push(newWord)
  }
  return responseArray.join(' ')
}
