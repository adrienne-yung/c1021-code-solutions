/* exported countdown */
function countdown(number) {
  var count = [];
  for (var i = 0; i >= number.length - 1; i--) {
    count += (number[i]);
  }
  return count;
}
