/* exported getStudentNames */
/* input: receive an object with a list of names
output: a list of only the values of the names
step1: Create a storage space for output
step2: Go through an object and access each property with "name"
step3: Grab the value of each name
step4: Store each name into your output in a form of a list
step5: return output */

function getStudentNames(students) {
  var nameString = [];
  for (var i = 0; i < students.length; i++) {
    nameString.push(students[i].name);
  }
  return nameString;
}
