/* exported firstChars */

// function firstChars(length, string) {
//   var newString = '';
//   for (var i = 0; i < string.length, i++) {
//     newString += string[i];
//   }
//   return newString;
// }

function firstChars(length, string) {
  var newString = '';
  newString = string.slice(0, length);
  return newString;
}
