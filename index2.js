// Regular functions

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const myFunc2 = function () {
//   console.log('I am a func2');
// };

// ---------------------------------

// Arrow functions
// const sum2 = (num1, num2) => num1 + num2;

// console.log(sum(1, 2));
// console.log(sum2(2, 3));

// this

const myObj = {
  name: 'Marco',
  age: 34,

  getTotal: function () {},

  greetArrow: function () {
    this.getTotal();
  },

  findDups: (numbers) => numbers.filter((number, index, array) => array.indexOf(number) !== array.lastIndexOf(number)),
};

// console.log(myObj.name);
// console.log(myObj.greetFunc());
console.log(myObj.greetArrow());

module.exports;

exoprts.calculation = function () {};
