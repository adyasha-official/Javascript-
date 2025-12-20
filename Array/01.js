const myArr = [0, 1, 2, 3, 4, 5];
const myFriends = ["Sanju", "Dhruv", "Adi"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(myFriends); // [ 'Sanju', 'Dhruv', 'Adi' ]
console.log(myArr2); // [ 1, 2, 3, 4 ]
// JavaScript arrays are SHALLOW by default
// An array in JS stores references for non-primitive values (objects, other arrays).
// So when you copy an array, nested objects are NOT deeply copied.
// Shallow copy copies the reference of nested objects,Deep copy creates completely independent copies at all levels.


// Array methods
myArr.push(6);
myArr.push(7);
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6, 7
// ]
myArr.pop();
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
myArr.unshift(9);
console.log(myArr);
// [
//   9, 0, 1, 2,
//   3, 4, 5, 6
// ]
myArr.shift();
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1

const newArr = myArr.join();
console.log(newArr); // 0,1,2,3,4,5,6
console.log(typeof newArr); // string
// join() converts an array into a STRING by joining all elements with a separator.

console.log("A ", myArr);
// A  [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
const myn1 = myArr.slice(1,3);
console.log(myn1);
// [ 1, 2 ]
// Returns a portion of an array WITHOUT changing the original array
// start → included
// end → excluded
const myn2 = myArr.splice(1,3);
console.log(myn2);
// [ 1, 2, 3 ]
// Adds / removes / replaces elements AND modifies the original array
console.log(myArr); // [ 0, 4, 5, 6 ] got changed 







