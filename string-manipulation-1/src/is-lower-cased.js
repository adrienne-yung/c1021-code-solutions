/* exported isLowerCased */
/* input: word
output: "true" if word is fully lowercased, false if word is not fully lowercased.
step1: return value of "true" or "false" depending whether or not word is fully lowercased. */

function isLowerCased(word) {
  return word === word.toLowerCase();
}
