var student = {
  firstName: 'Adrienne',
  lastName: 'Yung',
  age: 24
};
console.log(student);

var fullName =
  student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Franchinse Trainer at Zero Degrees';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Suburu',
  model: 'Impreza',
  year: 2017
};
console.log(vehicle);

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);

var pet = {
  name: 'Chef',
  type: 'fish'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
