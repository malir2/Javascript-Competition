// Day 4: Loops

// Activity 1 : For loop

// Task 1 : Print numbers from 1 to 10

for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// Task 2: Table of 5

const numberToMultiply = 5;

for (let number = 1; number <= 10; number++) {
  const multiply = number * numberToMultiply;
  console.log(`${numberToMultiply} x ${number} = ${multiply}`);
}

// Activity 2: While Loop

// Task 3: Program to calculate the sum from 1 to 10
let number = 1;

while (number <= 10) {
  console.log(number + number);
  number++;
}

// Task 4: Print numbers from 10 to 1

let numbersToPrint = 10;

while (numbersToPrint >= 1) {
  console.log(numbersToPrint);
  numbersToPrint--;
}

// Activity 3: Do...While Loop

// Task 5: Print number from 1 to 5

let number1 = 1;

do {
  console.log(number1);
  number1++;
} while (number1 <= 5);

// Task 6: Calculate factorial of a number

function factorial(number) {
  let result = 1;
  let counter = number;

  do {
    result *= counter;
    counter--;
  } while (counter >= 1);

  return result;
}

let numberForFactorial = 10;

console.log(
  `The factorial of ${numberForFactorial} is ${factorial(numberForFactorial)}`
);

// Activity 4: Nested loop

// Task 7: Print a pattern

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8: Print number from 1 to 10 but skip number 5

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9: Print number from 1 to 10 but stop at number 7

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    console.log("Number 7 is reached");
    break;
  }
  console.log(i);
}
