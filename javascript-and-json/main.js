var books = [
  {
    isbn: '9780007203543',
    title: 'The Fellowship of the Ring: The Lord of the Rings',
    author: 'J.R Tolkien'
  },
  {
    isbn: '9780375826689',
    title: 'Eragon',
    author: 'Christopher Paolini'
  },
  {
    isbn: '9780316387873',
    title: 'The Chemist',
    author: 'Stephanie Meyer'
  }
];

console.log('Array of books"', books);
console.log(typeof books, books);

var bookOne = JSON.stringify(books[0]);
console.log('bookOne:', bookOne);
console.log(typeof bookOne, bookOne);

var bookTwo = JSON.stringify(books[1]);
console.log('bookTwo:', bookTwo);
console.log(typeof bookTwo, bookTwo);

var bookThree = JSON.stringify(books[2]);
console.log('bookThree:', bookThree);
console.log(typeof bookThree, bookThree);

var string = '{"name": "string", "id": "Number"}';
console.log('string:', string);
console.log(typeof string, string);

var object = JSON.parse(string);
console.log('object:', object);
console.log(typeof object, object);
