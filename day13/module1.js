// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script

import { add } from "./module2.js";

const import1 = add(1, 2);

console.log(import1);

// Task 2: Create a module that exports an object represnting a person with properties and methids. Import and use this module in another script

import { person } from "./module2.js";

console.log(person);
console.log(person.user());

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple function using named exports. Import and use these function in another script

import { multiply, divide } from "./module2.js";

const multiplyResult = multiply(4, 5);
const divideResult = divide(4, 5);

console.log("Multiply result is", multiplyResult);
console.log("Divide result is", divideResult);

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script

import randomNumber from "./module2.js";

const number = randomNumber();

console.log(number);

// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and us its properties

import { name, age, mail, printAge, printmail } from "./module2.js";

const obj = {
  name: name,
  age: age,
  mail: mail,
  function1: printAge,
  function2: printmail,
};

console.log(obj);
console.log(obj.function1());
console.log(obj.function2());

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g. lodash) using npm. Import the entire module as an object in another script and use its properties

import _ from "lodash";

const array = [1, 2, 3, 4, 5, 6];

const reverseArray = _.reverse(array);

console.log(reverseArray);

// Task 7: Install a third-party module (e.g. axios) using npm. Import and us this module to make a netwrok request in a script

import axios from "axios";

axios
  .get("https://randomuser.me/api/")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
