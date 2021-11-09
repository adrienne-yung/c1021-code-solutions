/* exported toObject */
/* Input: An object
Output: An object with one property consisted of passed keyValuePair
step1: Create a storage space for property
step2: Create a storage space for value
step3: Create a storage space for new object
step4: Assign value to a property and make everything into an object
step5: Return object */

function toObject(keyValuePair) {
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[property] = value;
  return object;
}
