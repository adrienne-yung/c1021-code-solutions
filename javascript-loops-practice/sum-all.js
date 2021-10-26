/* exported sumAll */
/* input: given an array of numbers
output: retrieve the sum of all the numbers in the array
step1: Create a storage space for your output
step2: Traverse through the array to retrieve all the numbers in the array
step3: Create an expression that makes you add all of the values together
step4: Return the sum of the numbers in the array as output */

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
