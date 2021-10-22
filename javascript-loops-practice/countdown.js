/* exported countdown */
/* input: list of numbers (ex. 1, 2, 3, 4, 5, ...)
output: list of numbers counted down (ex. 10, 9, 8, 7, ...)
step1: Create a storage space to store your countdown numbers.
step2: Continue to count down backwords with the list of numbers until the list is over and store those in the storage space.
step3: Return the value of storage space as your output in a form of an array. */

function countdown(number) {
  var count = [];
  for (var i = number.length - 1; i >= 0; i--) {
    count += number[i];
  }
  return count;
}
