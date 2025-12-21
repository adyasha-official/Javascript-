// Singleton 
// A Singleton ensures that only one instance of a class/object exists throughout the application and provides a global access point to it.
// Object.create


// Object Literals
// An object literal is the simplest way to create an object in JavaScript using {}.
const mySym = Symbol("key1");
const Juser = {
    name: "Adyasha",
    "Full name": "Adyasha Sahoo",
    age: 22,
    [mySym]: "mykey1",
    location: "Angul",
    email: "adyasha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(Juser.email); // adyasha@gmail.com
console.log(Juser["email"]); // adyasha@gmail.com
console.log(Juser["Full name"]); // Adyasha Sahoo
console.log(Juser[mySym]); // mykey1

Juser.email = "adyasha@chatgpt.com";
console.log(Juser.email); // adyasha@chatgpt.com
Object.freeze(Juser);
Juser.email = "adyasha@amazon.com";
console.log(Juser.email); // adyasha@chatgpt.com
console.log(Juser);
/*
{
  name: 'Adyasha',
  'Full name': 'Adyasha Sahoo',
  age: 22,
  location: 'Angul',
  email: 'adyasha@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

Juser.greeting = function(){
  console.log("Hello JS user");
}
console.log(Juser.greeting); // [Function (anonymous)]
console.log(Juser.greeting());
// Hello JS user
// undefined






