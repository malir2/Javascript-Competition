// Activity 1: Arithmetic Operations

// Task 1 : Add two numbers

const add = 10 + 30;
console.log(add); // 40

// Task 2 : Subtract two numbers

const subtract = 20 - 6;
console.log(subtract); // 14

// Task 3 : Multiply two numbers
const multiply = 20 * 5;
console.log(multiply); // 100

// Task 4 : Divide two number
const divide = 50 / 5;
console.log(divide); // 10

// Activity 2 : Assignment operators

// Task 6 : Use +=
let number1 = 24;

number1 += 5;

console.log(number1); // 29

// Task 7 : Use -=
let number2 = 24;

number2 -= 5;
console.log(number2); // 19

// Activity 3 : Comparison Operators
// Task 8 : Compare by using <>
const compare1 = 10 > 2;
console.log(compare1); // true

const compare2 = 10 < 3;
console.log(compare2); // false

// Task 9 : Compare by using >= and <=
const compare3 = 10 >= 10;
console.log(compare3); // true

const compare4 = 10 <= 20;
console.log(compare4); // false

// Task 10 : Use == and ===
if ((10 == 9) == false) {
  console.log("Not equal!"); // Not equal
}

if ((10 === "100") == false) {
  console.log("Types are not same!"); // Types are not same
}

// Activity 4 : Logical Operators
// Task 11 : Use &&

const val1 = 18;
const val2 = 19;

if (val1 == 18 && val2 == 19) {
  console.log("And Operator works successfully!"); // And operator works successfully!
}

if (val1 == 20 || val2 == 19) {
  console.log("Or operator works successfully!"); // Or operator works successfully!
}

if (!(val1 == 20)) {
  console.log("Not operator works successfully!"); // Not operator works successfully!
}

// Activity 5 : Ternanry Operator

const ternanryOperator =
  val1 < val2 ? "val1 is smaller than val2" : "val2 is smaller than val1";
console.log(ternanryOperator); // val1 is smaller than val2
