// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: Create an object represnting a book with properties like title, author, and year and log the object

const books = {
  title: "Book1",
  author: "John",
  year: 1999,
};

console.log(books);

// Task 2: Access and log the title and author from object
console.log(books.title);
console.log(books.author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with book's title and author and log the result

const book2 = {
  title: "Book2",
  author: "John",
  year: 1999,
  method: function () {
    return `${this.title} by ${this.author}`;
  },
};

const stringData = book2.method(book2);

console.log(stringData);

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book`s year

const book3 = {
  title: "Book2",
  author: "John",
  year: 1999,
  method: function (year) {
    this.year = year;
    return this.year;
  },
};

const updateYear = book3.method(2000);

console.log(book3);

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books and log it

const library = [
  {
    title: "Book1",
    author: "John",
    year: 1999,
  },
  {
    title: "Book2",
    author: "Galib",
    year: 1959,
  },
  {
    title: "Book3",
    author: "Peter",
    year: 1979,
  },
];

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books

library.forEach((books) => {
  console.log(books.title);
});

// Activity 4: The this keyword

// Task 7: Add a method to the object that uses the this keyword to return a string

const book4 = {
  title: "Book2",
  author: "John",
  year: 1999,
  method: function () {
    return `${this.title} is published in ${this.year}`;
  },
};

const newString = book4.method();

console.log(newString);

// Activity 5: Object Iteration

// Task 8: Use for...in loop to iterate over the properties of the book and log each property and it's value

const book5 = {
  title: "Book2",
  author: "John",
  year: 1999,
};

for (const key in book5) {
  console.log(`${key} => ${book5[key]}`);
}

// Task 9 : Use Object.keys and object.values method to log all key and values

console.log(Object.keys(book5));
console.log(Object.values(book5));
