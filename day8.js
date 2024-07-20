// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age

const personName = "Ali";
const age = 19;

const personInfo = `Person name is ${personName} and age is ${age}`;

console.log(personInfo);

// Task 2: Create a multi-line string using template literals and log it

const multiLineString = `
Hello man!
How are you?
Hope you will be fine`;

console.log(multiLineString);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second element from an array

const arr = ["Person 1", "Person 2", "Person 3"];

const [first, second] = arr;

console.log(first, second);

// Task 4: Use object destructuring to extract the title and author from a book object

const book = {
  title: "Book1",
  author: "Galib",
  published: 1999,
};

const { title: name, author } = book;

console.log(name, author);

// Activity 3: Spread and Rest operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements

const arr1 = [1, 2, 3, 4, 5];
const arrWithSpread = [...arr1, 6, 7, 8, 9, 10];

console.log(arrWithSpread);

// Task 6: Use the rest operator in a function to accept arbitrary number of arumenys, sum them and return result

function restOperator(...arr) {
  let value = 0;
  const array = arr;
  console.log(array);
  for (const element of arr) {
    value += element;
  }
  return value;
}

const result = restOperator(1, 2, 3, 4, 5, 6);

console.log(result);

// Activity 4: Default Parameter

// Task 7: Function takes two parameters and return theri product second parameter has default value of 1 and log the product of first and second default value

function multiply(num1, num2 = 1) {
  return num1 * num2;
}

const products = multiply(2);
console.log(products);

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties

const nameP = "Ali";
const ageP = 19;
const email = "email";

const person = {
  nameP,
  ageP,
  email,

  greet() {
    console.log(`Hi ${this.nameP}!`);
  },

  [email]: "john.doe@example.com",

  // Method with a computed property name
  [`get${email.charAt(0).toUpperCase() + email.slice(1)}`]() {
    return this[email];
  },
};

console.log(person.nameP);
console.log(person.ageP);
person.greet();
console.log(person.email);
console.log(person.getEmail());

// Task 9: Create an object with computed property names based on variable

const key1 = "firstName";
const key2 = "lastName";
const key3 = "age";

const personDetail = {
  [key1]: "M",
  [key2]: "Ali",
  [key3]: 19,

  [`get${key1.charAt(0).toUpperCase() + key1.slice(1)}`]() {
    return this[key1];
  },

  [`get${key2.charAt(0).toUpperCase() + key2.slice(1)}`]() {
    return this[key2];
  },
};

console.log(personDetail.firstName);
console.log(personDetail.lastName);
console.log(personDetail.age);
console.log(personDetail.getFirstName());
console.log(personDetail.getLastName());
