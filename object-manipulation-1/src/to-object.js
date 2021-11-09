/* exported toObject */
/* Input: An object
Output: An object with one property consisted of passed keyValuePair
step1: */

function toObject(keyValuePair) {
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[property] = value;
  return object;
}
