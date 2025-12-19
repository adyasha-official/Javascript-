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

console.log("2" > 1);
console.log("02" > 1);
// Even though one of them is string but the output is true because the string gets converted into number and then gets compared.
// But this practice is not good and can be error prone. So always compare same datatypes.

console.log(null > 0); // false
// > is a relational operator and null is converted to a number. 0 > 0 is false.
console.log(null == 0); // false
// == uses loose equality rules and null is equal to undefined not a number.
console.log(null >= 0); // true
// >= is a relational operator so, 0 >= 0.


// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. 
// That's why in the 3rd case null >= 0 is true and in the 1st case null > 0 is false.


console.log("2" === 2); // false
// "===" it not only check your value but also checks datatype. It checks everything strictly.

// Primitive datatype
// They are immutable (value itself can't be changed). They are stored by value and copied on assignment. They are directly stored in stack memory.
// Size is fixed. 
// They are of 7 types: Number, String, Boolean, Null, Undefined, Symbol, BigInt.

// Non-primitive datatype
// They are mutable. They are stored by reference (addresses) to memory locations and copied by reference. They are stored in heap memory.
// Size is dynamic.
// Types: Object, Array, Function

// Array 
const names = ["Adyahsa", "Neha"];

// Object
let myObj = {
    name: "Adyasha",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Adyasha");
    
}

