/* exported oddOrEven */
/* input: a list of numbers
output: values of even or odd of the numbers given within a list
step1: Create a storage place for your output
step2: Traverse through your list of numbers and evaluate them as odd or even.
step3: Make a condition in which if the number is even, they will be labeled as "even"
step4: Make a condition in whcih if the number is odd, they will be labeled as "odd"
step5: return values of even and odd into the same array in the same order. */

function oddOrEven(numbers) {
  var output = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      i = 'even';
    } else {
      i = 'odd';
    }
  }
  return output;
}
