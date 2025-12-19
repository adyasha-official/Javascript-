const name = "Adyasha";
const repoCount = 50;
console.log(name + " " + repoCount + " repo Value"); // Adyasha 50 repo Value

// strings can be concated using this but not recommended in modern js.
// Instead we use backtick
// helps in string interpolation (it is a way to insert variables, expressions, and function calls directly inside a string in a clean and readable way)


console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
// Hello my name is Adyasha and my repo count is 50.
// Template literals use: ` and ${}-> interpolation holder.
// We can directly insert variables & expressions.
// We can use multi-line strings.
let msg = `Hello
Welcome 
to Javascript.`;
console.log(msg);
// We can write any valid JS expression inside ${}.
const price = 100;
let cost = `Total = ${price * 5}`;
console.log(cost); // Total = 500

// Methods in string
const gameName = new String("Adyashaaps");
console.log(gameName[0]); // A
console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // ADYASHAAPS
console.log(gameName.charAt(2)); // y
console.log(gameName.indexOf('a')); // 3
const newString = gameName.substring(0,4);
console.log(newString); // Adya
const anotherString = gameName.slice(-8,4);
console.log(anotherString); // ya
const newString1 = "       Adyasha      ";
console.log(newString1); //        Adyasha      
console.log(newString1.trim()); // Adyasha
const url = "http://adyasha.com/adyasha%20sahoo";
console.log(url.replace('%20', '-')); // http://adyasha.com/adyasha-sahoo
console.log(url.includes('adyasha')); // true
console.log(url.includes('sundar')); // false
let rules = "hello-bye-no";
console.log(rules.split('-')); // [ 'hello', 'bye', 'no' ]
console.log(gameName.__proto__); // {}
console.log(Object.getOwnPropertyNames(gameName.__proto__));
// This line lists all properties and methods that belong directly to the prototype of gameName.

// Why didn’t {} show these methods earlier?
//Because:
//console.log shows only enumerable properties
// Enumerable properties are object properties that show up when you iterate over an object.
// They decide what is visible during looping and listing operations.
// If a property is enumerable, JavaScript will show it when you loop or list object keys.
let user = {
  name: "Adyasha",
  age: 22
};

console.log(Object.keys(user)); // [ 'name', 'age' ]
// name and age are enumerable
// JavaScript considers them normal, visible properties

// Prototype methods are non-enumerable
// Non-enumerable properties are object properties that exist and are usable, but do NOT appear during iteration or listing operations.
// They are intentionally hidden from loops.
let user2 = {};
// Creates an empty object named user2
Object.defineProperty(user2, "id", {
  value: 101,
  enumerable: false
});
// Adds a property called id to user2
// Sets its value to 101
// Marks it as non-enumerable
// user.id // 101 (exists)
// But it is hidden when listing keys.
user2.name = "Adyasha";
// Normal way of adding property
//By default, this property is enumerable
console.log(Object.keys(user2));
// Returns only enumerable properties
// result is [ 'name' ]
// id is NOT shown because:
// It is non-enumerable
// Even though it exists in the object
// Proof that id exists
console.log(user2.id); // 101
// Property exists
// Just hidden from loops







