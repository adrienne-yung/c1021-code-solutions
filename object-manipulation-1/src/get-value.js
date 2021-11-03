/* exported getValue */
function getValue(object) {
  var value = '';
  for (var i = 0; i < length; i++) {
    value += Object.entries(object[i]);
  }
  return value;
}
