function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var seconds = convertMinutesToSeconds(5);
console.log('seconds result:', seconds);

function greet(name) {
  return 'Hey,' + ' ' + name;
}

var name = greet('Beavis');
console.log(name);

function getArea(width, height) {
  return width * height;
}

var number = getArea(17, 42);
console.log('number is:', number);

var person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName(person);

console.log('getFirstNameResult:', getFirstNameResult);

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

function getLastElement(array) {
  return array[3];
}

console.log('getLastElementResult:', getLastElementResult);
