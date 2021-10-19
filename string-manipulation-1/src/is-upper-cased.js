/* exported isUpperCased */
/* input: word
output: if word is fully uppercased = true, if word is not fully uppercased = false
step1: return the value of "true" or "false" for word depending on whether or not the full word is fully capitalized. */

function isUpperCased(word) {
  return word === word.toUpperCase();
}
