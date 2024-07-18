// Day 6: Arrays

// Activity 1: Array creation and Access

// Task 1: Create an array from numbers 1 to 5 and log the array to the console.

const arrayOfNumbers = [1, 2, 3, 4, 5];

console.log(arrayOfNumbers);

// Task 2: Access the first and last elements of the array and log them

const firstElementOfArray = arrayOfNumbers[0];
console.log(firstElementOfArray);

const lastElementOfArray = arrayOfNumbers[4];
console.log(lastElementOfArray);

// Activity 2: Array Methods (Basic)

// Task 3: Use push to add a new number to end of the array and log the updated array

const numberArray = [0, 1, 2, 3, 4];

numberArray.push(5);

console.log(numberArray);

// Task 4: Use pop to remove the last number from end of the array and log the updated array

numberArray.pop();

console.log(numberArray);

// Task 5: Use shift method to remove the first element from the array

numberArray.shift();

console.log(numberArray);

// Task 6: Use the shift method to add an element at the start of an array

numberArray.unshift(0);

console.log(numberArray);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array

const arrayForMap = [1, 2, 3, 4, 5, 6];

const mapMethod = arrayForMap.map((number) => {
  return number * 2;
});

const newArrayAfterMap = mapMethod;

console.log(mapMethod);

// Task 7: Use the filter method to create a new array with only even number and log the new array

const numberForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterMethod = numberForFilter.filter((number) => {
  return number % 2 === 0;
});

const newArrayAfterFilter = filterMethod;

console.log(newArrayAfterFilter);

// Activity 9: Use ther reduce method to calculate the sum of all numbers in the array and log the result

const arrayForReduce = [1, 2, 3, 4, 5, 6, 7, 8];

const initailValue = 0;

const reduceMethod = arrayForReduce.reduce(
  (acc, num) => acc + num,
  initailValue
);

console.log(reduceMethod);

// Activity 4: Array Iteration

// Task 10: Use for loop to iterate over the array and log each element

const arrayForloop = ["Pakistan", "England", "Turkey", "Dubai"];

for (let index = 0; index < arrayForloop.length; index++) {
  console.log(arrayForloop[index]);
}

// Task 11: Use for each to iterate over the array and log each element to the console

const arrayForloop2 = ["Cricket", "Hockey", "Football", "Tennis"];

arrayForloop.forEach((element) => {
  console.log(element);
});

// Activity 5: Multi-dimensional arrays

// Task 12: Create a two dimensional array and log the entire array to console

const twoDArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(twoDArray);

// Task 13: Access and log the specific element fro the two dimensional array

console.log(twoDArray[1][3]);
