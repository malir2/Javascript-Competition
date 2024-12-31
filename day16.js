// Day 16: Recursion
// Activity 1: Basic Recusion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases

function factorial(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(10));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(number) {
  if (number <= 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(10));

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the the result of different cases

const array = [0, 1, 2, 3, 4];
console.log(array.slice(1));

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + arraySum(arr.slice(1));
  }
}

console.log(arraySum([0, 1]));
console.log(arraySum([0, 1, 2]));
console.log(arraySum([0, 1, 2, 3]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases

function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const restArr = maxArray(arr.slice(1));
    return arr[0] > restArr ? arr[0] : restArr;
  }
}

console.log(maxArray([0, 1, 2]));
console.log(maxArray([11, 20, 2]));

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases

function stringReverse(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str[str.length - 1] + stringReverse(str.slice(0, -1));
  }
}

console.log(stringReverse("Hello"));
console.log(stringReverse("World"));

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element
