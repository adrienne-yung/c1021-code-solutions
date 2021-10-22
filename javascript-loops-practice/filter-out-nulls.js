/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    values.filter(typeof values[i] !== 'undefined');
    array.push(values[i]);
  }
}
