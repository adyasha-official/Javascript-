const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(score === new Number); // false
//One is primitive and One is object
// 400 is a Number primitive and Stored directly as a primitive value
// new Number(100) creates a Number object, not a primitive and This is a wrapper object
// 400 is a number primitive, while new Number(100) creates a Number object. JavaScript allows both, but using primitives is recommended.
console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(typeof balance.toString()); // string
console.log(balance.toFixed(2)); // 100.00
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // 123.9
const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // 10,000,000 based on US standards
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000 based on Indian standards
console.log(Math);
// It is an object itself containing many properties.
console.log(Math.abs(-2)); // 2
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 5, 2, 3)); // 2
console.log(Math.max(4, 5, 2, 3)); // 5
console.log(Math.random());
// 0.8498241339206947 or 0.8451659994769138 or 0.9992913292307546
// value will be between 0 - 1 always 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Math.random()
// Generates a random decimal number
//Range: 0 (inclusive) to 1 (exclusive)
// Never reaches 1
// max - min + 1 = 20 - 10 + 1 = 11
// Why +1?
// To include both 10 and 20
// Without +1, 20 would never appear.
// Math.random() * 11
// 0  to  10.999...
// Math.floor(Math.random() * 11)
// Removes the decimal part and Converts to a whole number
// 0, 1, 2, 3, ..., 10
// Math.floor(Math.random() * 11) + 10
// This shifts the range: 10 to 20 (inclusive)
// Easy Formula: Random integer between min and max (both included)
 
