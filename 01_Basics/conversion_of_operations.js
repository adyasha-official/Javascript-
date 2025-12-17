// converting string to number 
let score = "33";
let age = 22;

console.log(typeof score);
console.log(typeof (score));

console.log(typeof age);
console.log(typeof (age));

// convert the string 'score' to number 
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let rule = "23abc";
let convert = Number(rule);
console.log(typeof convert);
console.log(convert);
// it converts into number but when we actually see it we don't get the value instead NaN is printed

// for boolean
// 1 => true; 0 => false
// "" => empty string => false
// "adyasha" => true
 

// *********************************** Operations ***********************************
let value = 3;
let negValue = -value;
console.table([value, negValue]);

// adding two strings
let str1 = "Hello";
let str2 = " Adyasha";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "5"); // 35
// In JavaScript, the + operator works left to right. If at any step one operand is a string, JavaScript converts the other operand to a string and performs concatenation; otherwise, it performs numeric addition.
