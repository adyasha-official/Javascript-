// Stack 
// Stores Primitive data types
// Function call information (Execution Context)
// References (addresses) to heap objects
// LIFO (Last In, First Out)
// Very fast access
// Fixed size
// Automatically managed
// Memory cleared when function finishes execution 
let a = 10;
let b = a;
b = 20;
// a = 10
// b = 20
// Because values are copied. They are independent. 
// Reference variable
let obj = { x : 1};
// Stack: obj -> 0x001 (reference)
// Heap: 0x001 -> { x : 1}
// Stack stores reference not object

// Heaps
// Stored non-primitive datatypes
//Dynamic size
//Slower than stack
//Not ordered
//Memory cleaned by Garbage Collector

let obj1 = {a:10};
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a); // 20
console.log(obj2.a); // 20
// in general both should not get equal output. but here both variable point to the same object so, changing one changes the original so both get same output.

