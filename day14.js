// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello ${this.name}! How are you?`;
  }

  ageUpdate(age) {
    return (this.age = age);
  }
}

const personDetail = new Person("Jack", 18);
console.log(personDetail);
console.log(personDetail.greeting());
console.log(personDetail instanceof Person);

// Task 2: Add a method to the Person class that updates the age property and logs the updates age

console.log(personDetail.ageUpdate(19));

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentID and a method to return the student ID. Create an instance of the student class and log the student ID

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  logStudentID() {
    return `Student Id is ${this.studentID}`;
  }
}

const studentData = new Student("Oggy", 20, 1234);
console.log(studentData);
console.log(studentData.logStudentID());

// Task 4: Override the greeting method in the Student class include the student ID in the message. Log the overridden greeting message.

Student.logStudentID = (message) => {
  return message;
};

const studentMessage = Student.logStudentID("Sorry! Student id is 4321.");

console.log(studentMessage);

// Activity 3: Static Methods and properties

// Task 5: Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

class Person2 {
  constructor(name) {
    this.name = name;
  }

  static greeting() {
    return `Hi ${this.name}! How are you?`;
  }
}

console.log(Person2.greeting());

// Task 6: Add a static property to the student class to keep track of the number of student created. Increament this property in the constructor and log the total number of students

class Students {
  static totalNumberOfStudents = 0;
  constructor(name) {
    this.name = name;
    Students.totalNumberOfStudents++;
  }
}

const studentAdd = new Students("Bob"); // To check if number is increasing or not

console.log(Students.totalNumberOfStudents);

// Activity 4: Getters and Setters

// Task 7 : Add a getter method to the person class to return the fullname using getter

class PersonAgain {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const personAgain = new PersonAgain("Petter", "Parker");

console.log(personAgain.fullName);

// Task 8: Add a setter method to the person class to update the name property firstname and last name. Update the name using setter and log the updated full name

class PersonAgain1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(newFullName) {
    const [newFirstName, newLastName] = newFullName.split(" ");
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
}

const personAgain1 = new PersonAgain1("John", "Doe");

console.log(personAgain1);

personAgain1.fullName = "Alice Smith";

console.log(personAgain1.firstName + " " + personAgain1.lastName);

// Activity 5: Private Fields

// Task 9: Define a class Account with private fields for balance and a method to deposite and withdraw money. Ensure that the balance can only be updated through these methods

class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Your current balance after depositing $${amount} is $${
        this.#balance
      }`;
    } else {
      return "Invalid deposit amount. Please provide a positive value.";
    }
  }

  withdraw(amount) {
    if (this.#balance === 0) {
      throw new Error("Your balance is 0.");
    }
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Your current balance after withdrawing $${amount} is $${
        this.#balance
      }`;
    } else {
      return "Invalid withdrawal amount or insufficient balance.";
    }
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging he balance after each operation

const accountDetails = new Account(1000);

console.log(accountDetails.deposit(500));

console.log(accountDetails.withdraw(200));
