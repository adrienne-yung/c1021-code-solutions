/* exported findIndex */
/* input: receive a list of values
output: find the location of the value within the list
step1: Create a storage space for the output
step2: Traverse through the list of values in search of the value wanted
step3: When traversing through the list and you encounter the desired value, stop searching.
step4: if you can not find the desired value, return " -1 "
step5: Return the value -1 or the desired value. */

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
