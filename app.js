// app.js
// import { add, subtract, addAndLogUpper } from './mathModule.js';
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';


// Call the functions and log results (your choice of arguments)

// Test your add function
console.log('Add: ', add(10, 3));
console.log('Subtract: ', subtract(10, 3));
console.log('Multiply:', multiply(5, 25));

// Test string manipulation
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('WORLD'));

// Test findMax
console.log('Max: ', findMax([1, 2, 50, 4, 5]));

// Test reverseArray
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Test the new function
addAndLogUpper(10, 20);


//Final Challange
let numbersArray = [1, 2, 3, 4, 10, 50, 12];
let maxNumber = Math.max(...numbersArray);
// console.log(maxNumber);

let multiplyValue = 20;
console.log(toUpperCase(multiply(maxNumber, multiplyValue).toString()));