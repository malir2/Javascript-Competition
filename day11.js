// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timout and log message

const promise1 = new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Promise 1 is executed.");
    reslove();
  }, 2000);
});

promise1.then(function () {
  console.log("Promise one has resloved");
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()

const promise2 = new Promise((reslove, reject) => {
  const situation = false;
  setTimeout(() => {
    if (situation === true) {
      console.log("Situation is true");
      reslove();
    } else {
      reject("Something went wrong!");
    }
  }, 2000);
});

promise2
  .then(() => {
    console.log("Promise 2 runs successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

// Acticity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a sequence

function fetchData(message, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(message);
      res();
    }, delay);
  });
}

fetchData("Data is fetched Successfully", 1000)
  .then(() => {
    fetchData("Data is fetched Successfully 2", 1000);
  })
  .then(() => {
    fetchData("Data is fetched Successfully 3", 1000);
  })
  .catch((err) => {
    console.log(err);
  });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to reslove and then logs the resolved value

const func = async () => {
  const num = 1;
  return await new Promise((res, rej) => {
    if (num === 1) {
      console.log("The num is 1");
      res();
    }
  });
};

func().then(() => {
  console.log("Func works successfully.");
});

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message

const promise3 = new Promise((res, rej) => {
  const situation = false;
  if (situation === true) {
    console.log("The situation is true.");
    res();
  } else {
    rej("Situation is false.");
  }
});

async function runPromise3() {
  try {
    await promise3;
  } catch (error) {
    console.log("Error: ", error);
  }
}

runPromise3();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get a data from a public API and log respone data to console using promises

const fetchData2 = new Promise((res, rej) => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (response) {
        return response.json();
      }
    })
    .then((data) => {
      res(data);
    })
    .catch((err) => rej(err));
});

fetchData2
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// Task 7: Use the fetch API to get a data from a public API and log respone data to console using Async/await

const fetchApi3 = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = response.json();
  return data;
};

const resultOfFetchApi3 = fetchApi3();
console.log(resultOfFetchApi3);

// Activity 5: Concurrent Promises

// Task 8 : Use Promse.all to wait for  multiple promise to reslove and then log all their values

Promise.all([promise1, promise2, promise3])
  .then(() => {
    console.log("All Promises are run successfully.");
  })
  .catch((err) => console.log("Error in all Promises: ", err));

// Task 8 : Use Promse.race to log the value of the first promise that resloves among multiple promises

Promise.race([promise1, fetchData2]).then((value) => {
  console.log("Promise runs first: ", value);
});
