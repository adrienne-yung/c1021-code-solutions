/* exported getFirstChar */
/* input:"LearningFuze" , "paschal" , "HTML" , "code" , "string"
output: "L" , "p" , "H" , "c" , "S"
step1: note the first letter of each word and its location within/at the word
step2: create a storage to put this first letter of each word
step3: get the value of storage and return output */

function getFirstChar(string) {
  var firstChar = string[0];
  return firstChar;
}
