const score = 400;
// console.log(score);

const balance = new Number(200);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); =>200.00

const otherNum = 120.8296548;
// console.log(otherNum.toPrecision(5));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN"));

//******************  Math ********* */

// console.log(Math);
// console.log(Math.abs(-14));
// console.log(Math.round(4.63));
// console.log(Math.ceil(4.63));
// console.log(Math.floor(4.63));
// console.log(Math.min(4, 3, 2));
// console.log(Math.max(4, 3, 2));

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);