var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

console.log('America is' + ' ' + colors[0] + ',' + ' ' + colors[1] + ',' + ' ' + 'and' + ' ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is' + ' ' + colors[0] + ',' + ' ' + colors[1] + ',' + ' ' + colors[2] + '.');
console.log(colors);

var students = ['Caitlyn', 'Frank', 'Rebecca', 'Felix'];
var numberOfStudents = students.length;
console.log('There are' + ' ' + numberOfStudents + ' ' + 'students in the class');

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('the last student of the array is', lastStudent);

console.log('the value of students', students);
