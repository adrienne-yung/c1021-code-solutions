/* exported getValue */
/* Input: Receive an object
Output: Show object's value
step1: Create a storage space for output
step2: Traverse through the object until finding desired value
step3: Push output into value storage space.
step4: Return output */

function getValue(object, key) {
  return object[key];
}
