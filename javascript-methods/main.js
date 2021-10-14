var x = 93;
var y = 95;
var z = 96;

var maximumValue = (Math.max(x, y, z));
console.log('maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Captain America', 'Thor', 'Flash'];

var randomNumber = Math.random(heroes);

randomNumber = randomNumber * heroes.length;

var randomIndex = (Math.floor(randomNumber));
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R Tolkien'
  },

  {
    title: 'Twilight',
    author: 'Stephanie Meyers'
  },

  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K Rowling'
  }

];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Adrienne' + ' ' + 'Yung';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
