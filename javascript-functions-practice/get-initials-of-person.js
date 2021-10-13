/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  var firstLastInitial = firstName[0] + lastName[0];
  return firstLastInitial;
}
