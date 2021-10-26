/* exported includesSeven */
/* input: given a list of numbers
output: true or false, depending whether list of numbers contains 7
step1: Create a storage space for your output
step2: traverse through your list of numbers to keep checking each value.
step3: Create a condition in which the value you are searching for in your list is 7.
step4: when traversing through your list of numbers, if the condition is met where 7 is found, output is true.
step5: when traversing through your list of numbers, if the condition is not met, output is false.
step6: return your output as either true or false */

function includesSeven(array) {
  var output = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      output = true;
      break;
    }
  }
  return output;
}
