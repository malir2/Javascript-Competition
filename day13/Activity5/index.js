// Activity 5: Module Bundling

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple javascript fils into a single file. Write a script tp demonstrate the bundling process

import { greet } from "./module1.js";
import { add } from "./module2.js";

console.log(greet());

const result = add(1, 2);
console.log(result);
