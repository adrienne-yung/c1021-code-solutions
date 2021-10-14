/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  for (var currentNumber = 1; currentNumber < 10; currentNumber++);
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  for (var currentNumber = 2; currentNumber < 20; currentNumber += 2);
  return evenNumbers;
}

function repeatWord(word, times) {
  var repeated = '';
  for (var count = 1; count < times; count++);
  repeated += 'words';
  return repeated;
}
console.log(repeatWord);

function logEachCharacter(string) {
  var character = [];
  for (var i = 0; i < string.length; i++);
  return character;
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
}

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
