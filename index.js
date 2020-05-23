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

// ------------------------------------------------- o ------------------------------------------------

// Promises

/* Promises in JS are like promises in real life, you either
 keep your word or you break the promise

 in JS
 - keep my word => promise is resolved
 - break my promise => promise is rejected
 - truthy !== undefined, null, false
*/
let value = true;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => (value ? resolve("Good, it's resolved") : reject('Too bad')), 5000);
  // if (value) resolve("Good, it's resolved");
  // else reject('Too bad');
});

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => (value ? resolve("Good, it's resolved") : reject('Too bad')), 5000);
  // if (value) resolve("Good, it's resolved");
  // else reject('Too bad');
});

Promise.all([myPromise, myPromise1]).then((responses) => console.log(responses));
Promise.race([myPromise, myPromise1]).then();

value = true;
console.log('test');

myPromise.then((response) => {
  let res = response;
  if (res == 'one string') console.log(res);
});

// ES6 async / await

const myAsyncPromise = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => (value ? resolve("Good, it's resolved") : reject('Too bad')), 5000);
  });
};

const resolvePromise = async () => {
  let myVal = await myAsyncPromise();
  console.log(myVal);
  true ? console.log('y') : console.log('f');
};

resolvePromise();

// assumiung we have PO ==> async /await
//Login page
async function login(username, password) {
  return new Dashboard();
}

const dashboard = await login();
await dashboard.showCritical();

// .then
function login(username, password) {
  return new Promise((resolve) => resolve(new Dashboard()));
}

let val = null;

login().then((dashboard) => {
  dashboard.showCritical().then((criticals) => criticals.then());
});
