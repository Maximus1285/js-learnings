// Declaring variables
let name = 'Pepe';
// code
// code
name = 'Jose';
const numbers = [1, 2, 3];

// arrow functions
const reverseWord = (word) => word.split('').reverse().join('');

const isPaul = (word) => word === 'Paul';

// normal functions declared as constants
const reverseEachWord = function (sentence) {
  return sentence
    .split(' ')
    .map((word) => reverseWord(word))
    .join(' ');
};

// normal functions
function sumNumbers(num1, num2) {
  return num1 + num2;
}

// Arrays
const users = ['Paul', 'Abraham', 'Paul', 'Octavio', 'Marco'];
users.push('Octavio');
users.forEach((user) => console.log(user));
console.log('-----------------');

console.log('Reverse a Sentence: "This is a test"');
console.log(users.map((user) => reverseWord(user)));

// ---------------------------------------------
console.log('-----------------');
console.log(users.some((user) => isPaul(user)));
console.log(users.every((user) => user === 'Octavio'));
console.log(users.filter((user) => isPaul(user)));
console.log(`The found value is: ${users.find((user) => user === 'Octavio')}`); // String interpolation

const printTrue = (statement) => console.log(`${statement} statement => OK condition is TRUE`);
const printFalse = (statement) => console.log(`${statement} statement => OK condition is FALSE`);

console.log('-----------------');

// if - else statement
const condition = false;
if (condition) {
  printTrue('if-else');
} else {
  printFalse('if-else');
}
console.log('-----------------');

// ternary operator
condition ? printTrue('ternary-operator') : printFalse('ternary-operator');
console.log('-----------------');

console.log(`truthy/falsy: ${0 || 'default'}`); // truthy/falsy
console.log(`coalescing: ${0 ?? 'default'}`); // coalescing operator not null/ not undefined or default

console.log('-----------------');

// Promises
