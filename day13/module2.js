//Task 1
const add = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

export { add };

// Task 2
const person = {
  name: "M Ali",
  age: 19,
  email: "ali@gmail.com",
  user: function () {
    console.log(`User ${this.name} of ${this.age} has email : ${this.email}`);
  },
};

export { person };

// Task 3
export const multiply = (num1, num2) => {
  return num1 * num2;
};

export const divide = (num1, num2) => {
  return num1 / num2;
};

// Task 4

const randomNumber = () => {
  const random = Math.floor(Math.random() * 6) + 1;
  return random;
};

export default randomNumber;

// Task 5
const name = "M Ali";
const age = 19;
const mail = "mali@gmail.com";

function printAge() {
  console.log(`The user age is ${this.age}`);
}

function printmail() {
  console.log(`The user email is ${this.mail}`);
}

export { name, age, mail, printAge, printmail };
