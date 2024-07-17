// Activity 1: Function Declaration

// Task 1: Check if number is even or odd

function CheckEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }
}

CheckEvenOrOdd(3);

// Task 2: Calculate the square fo a number

function findSqr(num) {
  return Math.sqrt(num);
}

const numberForSqrt = findSqr(3);
console.log(numberForSqrt);

// Activity 2: Function Expression

// Task 3: Find Maximum between two numbers

const findMax = function (num1, num2) {
  console.log(`${Math.max(num1, num2)} is maximum.`);
};

findMax(28, 24);

// Task 4: Concatenate two strings and return the result

const concateStrings = function (firstName, lastName) {
  return firstName + " " + lastName;
};

const fullName = concateStrings("M", "Ali");
console.log(fullName);

// Activity 3: Arrow Function

// Task 5: Arrow to sum two numbers and return

const sumNumbers = (num1, num2) => {
  return num1 + num2;
};

const result = sumNumbers(10, 12);
console.log(result);

// Task 6: Check if string contains the specific character

const checkChar = (word) => {
  if (word.includes("s") || word.includes("S")) {
    return true;
  } else {
    return false;
  }
};

const word = checkChar("Sunlight");
console.log(word);

// Activity 4: Function Parameters and Default Values

// Task 7 : Function takes two parameter and returns their product. Provide a default value for the second parameter

function product(num1, num2 = 1) {
  return num1 * num2;
}

const resultOfProduct = product(2);

console.log(resultOfProduct);

// Task 8: Function takes a person name and age and return greeting message. Provide a default value for the age.

function greeting(name, age = 18) {
  return `Your name is ${name} and age is ${age}. You are welcome to our platform.`;
}

const greetingForUser = greeting("M Ali", 19);
console.log(greetingForUser);

// Activity 5: Higher-Order Function

// Task 9: Function that takes a function and a number, and calls the function that many times.

const function1 = (num) => {
  console.log(`Hello ${num}`);
};

function highFunc(func, num) {
  for (let i = 1; i <= num; i++) {
    func(num);
  }
}

highFunc(function1, 5);

// Task 10: Highr Order function that take two functions and a value, applies the first function to the value, and then applies the second function to the result

const valueFunc = (value) => {
  const val = value;
  return val;
};

const resultFunc = (val) => {
  console.log(`The result is ${val}.`);
};

const highFunc2 = (valFunc, resultFunc, value) => {
  const valueAssign = valFunc(value);
  resultFunc(valueAssign);
};

highFunc2(valueFunc, resultFunc, 5);
