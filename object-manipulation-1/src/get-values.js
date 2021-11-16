/* exported getValues */
/* Input: An object
Output: An array of the object's property values
step1: Create a storage space for values
step2: Grab the keys within an object
step3: Grab the values of each key
step4: Return the values of each key */

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
