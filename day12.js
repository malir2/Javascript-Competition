// Activity 1: Basic Error Handling with try-catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console

const problemNo1 = async () => {
  try {
    const data = await fetch("https://randomus.me/api/");
    console.log(data.json());
  } catch (error) {
    console.log("Error Reason: Something went wrong in problem 1!");
  }
};

console.log(problemNo1());

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

const problemNo2 = (number, denominator) => {
  try {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed");
    }
    const result = number / denominator;
    console.log(result);
  } catch (error) {
    return error.message;
  }
};

console.log(problemNo2(3, 0));

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log the message in try, catch and finally block to observe the execution flow

const problemNo3 = () => {
  try {
    const result = 3 / 3;
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("The program is executed either correct or not.");
  }
};

console.log(problemNo3());

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the bulit-in Error class. Throw an instance of this content error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom_Error";
  }
}

function customError() {
  throw new CustomError("Something went wrong");
}

try {
  customError();
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`Custom error occurred: ${error.message}`);
  }
}

// Task 5: Write a function that validates user input (e.g checking if a string is not empty) and throws a custom error if the validation fails. Handle custom error using a try-catch block

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const problemNo4 = (str) => {
  try {
    if (typeof str !== "string" || str.trim() === "") {
      throw new ValidationError("String is empty or just whitespace!");
    }
    console.log(str);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`Validation Error: ${error.message}`);
    }
  }
};

console.log(problemNo4());

// Activity 4: Error Handling in Promises

// Task 6: Create a promsie that randomly resloves or rejects. Use .catch() too handle the rejection and log an appropriate message to the console

const problemNo5 = () => {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random < 0.5) {
      console.log("Situation is true.");
      res();
    } else {
      rej(new Error("Situation is false"));
    }
  });
};

problemNo5
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log("Error caught:", err));

// Task 7: Use try-catch within an async function to handle error from a promise that randomly resolves or reject and log the error message

const problemNo6 = async () => {
  try {
    const result = await problemNo5();
    console.log(result);
  } catch (error) {
    console.log("Error cause:", error.message);
  }
};

problemNo6();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch api to request data from an invalid url and handle the error using .catch(). Log an appropriate error message

const problemNo7 = new Promise((res, rej) => {
  const data = fetch("https://randomus.me/api/")
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      res(response);
    })
    .catch((err) => {
      rej(new Error("Something went wrong in URL"));
    });
});

problemNo7
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Use the fetch API to request data from an invalid URL within an async function and handle the error using try/catch. Log an appropriate error message

const problemNo8 = async () => {
  try {
    const data = await fetch("https://randomus.me/api/");
    return data.json();
  } catch (error) {
    console.log("There is also some problem with this URL.");
  }
};

const storeData = problemNo8();

console.log(storeData);
