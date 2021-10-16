/* exported getLastChar */
/* input: "LearningFuze" , "paschal" , "HTML" , "code" , "String"
output: "e" , "l" , "L" , "e" , "g"
step1: Note the last letter of each word
step2: Create a storage for each last letter noted
step3: get the value of storage and return output */

function getLastChar(string) {
  var lastCharIndex = string.length - 1;
  var lastChar = string[lastCharIndex];
  return lastChar;
}
