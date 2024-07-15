// Activity 1 : if-else statement

// Task 1: Check if number is positve, negative or zero with if-else statement

const number = 12;

// If number is zero
if (number === 0) {
  console.log("Number is equal to zero");
}
// If number is negative
else if (number > 0) {
  console.log("Number is negative");
}
// For positive number
else {
  console.log("Number is positive");
}

// Task 2 : Check if person is eligible to vote

let age = 8;

if (age >= 18) {
  console.log("Person is eligible to vote.");
} else {
  console.log("Person is not eligible to vote.");
}

// Activity 2: Nested if-else statement

// Task 3: Find the largest of three numbers using nested if-else statement

let number1 = 100;
let number2 = 20;
let number3 = 80;

if (number1 > number2) {
  if (number1 > number3) {
    console.log(`${number1} is greater`);
  } else {
    console.log(`${number3} is greater`);
  }
} else {
  if (number2 > number3) {
    console.log(`${number2} is greater`);
  } else {
    console.log(`${number3} is greater`);
  }
}

// Activity 3: Switch Case

// Task 4: Program using switch case to determine the day of week based on number

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("The number is invalid. Number should be between 1 and 7!");
    break;
}

// Task 5: Switch case to assign grade based on score

let score = 60;

switch (true) {
  case score >= 90:
    console.log("Grade is A");
    break;
  case score >= 70:
    console.log("Grade is B");
    break;
  case score >= 60:
    console.log("Grade is C");
    break;
  case score >= 40:
    console.log("Grade is D");
    break;
  default:
    console.log("Grade is F");
    break;
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if number is even or odd

let checkNumber = 4;

{
  checkNumber % 2 === 0
    ? console.log(`${checkNumber} is even.`)
    : console.log(`${checkNumber} is odd.`);
}

// Activity 5: Combining Condition

// Task 7: Check is year leap or not

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

let year = 2021;

if (isLeapYear(year)) {
  console.log("It is leap year.");
} else {
  console.log("It is not a leap year.");
}
