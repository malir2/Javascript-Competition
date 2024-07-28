// Day 15: Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call that inner function and log the result

function one() {
  const name = "Ali";
  return () => {
    return name;
  };
}

const functionOneResult = one();

console.log(functionOneResult());

// Task 2: Create closure that maintains a private counter. Implement functions to increament and get the current value of the counter

function two() {
  let counter = 0;
  return () => {
    return (counter = counter + 1);
  };
}

const functionTwoResult = two();

console.log(functionTwoResult());
console.log(functionTwoResult());
console.log(functionTwoResult());

// Activity 2: Practical Clousers

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of last generated ID and increament it with each call

function uniqueID() {
  let id = 0;

  function increamentId() {
    id = id + 1;
    return `ABC${id}`;
  }

  return increamentId;
}

const IDs = uniqueID();

console.log(IDs());
console.log(IDs());

// Task 4: Create a clouser that captures a user's name and returns a function that greets the user by name

function greeting(username) {
  this.username = username;

  return () => {
    return `Welcome! ${username}`;
  };
}

const greetings = new greeting("Ali");
console.log(greetings());
const greetings2 = new greeting("Umer");
console.log(greetings2());

// Activity 3: Clousers in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a clouser to ensure each function logs the correct index.

function arrayOfNewFunctions(size) {
  const arrayOfFunctions = [];

  for (let i = 0; i < size; i++) {
    arrayOfFunctions[i] = (function (index) {
      return function () {
        console.log(index);
      };
    })(i);
  }
  return arrayOfFunctions;
}

const totalFunctions = arrayOfNewFunctions(5);
console.log(totalFunctions);

totalFunctions[0]();
totalFunctions[1]();
totalFunctions[2]();
totalFunctions[3]();
totalFunctions[4]();

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add remove and list items

const arrOfItems = [
  {
    name: "Laptop1",
    Comapny: "Dell",
    Price: 1999,
  },
  {
    name: "Laptop2",
    Comapny: "Hp",
    Price: 2999,
  },
  {
    name: "Laptop3",
    Comapny: "Linux",
    Price: 3999,
  },
];

function cart(items) {
  const allItems = items;
  function list() {
    return allItems;
  }

  function addToCart(newItems) {
    allItems.push(newItems);
    console.log(allItems);
    return `${newItems.name} is added successfully!`;
  }
  function removeFromCart(removeItems) {
    allItems.pop(newItems);

    return `${removeItems.name} is removed successfully!`;
  }

  return { list, addToCart, removeFromCart };
}

const shop = cart(arrOfItems);

console.log(shop.list());

const newItems = {
  name: "Laptop4",
  company: "Asus",
  price: 4999,
};

const addItems = shop.addToCart(newItems);
console.log(addItems);

const removeItems = shop.removeFromCart(newItems);

console.log(removeItems);

console.log(arrOfItems);

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a clouser to store the results of pervious computation

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage
function slowFunction(num) {
  console.log("Computing...");
  return num * num;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));
console.log(memoizedFunction(6));
console.log(memoizedFunction(6));

// Task 8: Create a memoized version of a function that calculates the factorial of a number

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
