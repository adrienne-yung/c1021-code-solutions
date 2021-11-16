/* exported getKeys */
/* Input: An object
Output: An array of the object's property keys
step1: Create a storage space for output
step2: grab keys within an object
step3: push keys into storage space
step4: return storage space value */

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
