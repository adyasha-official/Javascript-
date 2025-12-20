let myDate = new Date();
console.log(myDate.toString()); // Sat Dec 20 2025 08:41:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sat Dec 20 2025
console.log(myDate.toLocaleString()); // 12/20/2025, 8:41:27 AM
console.log(myDate.toLocaleDateString()); // 12/20/2025
console.log(typeof myDate); // object

let myCreatedDate = new Date(2025, 0, 22);
console.log(myCreatedDate.toDateString()); // Wed Jan 22 2025
// in js months start from 0.

let myCreatedDate2 = new Date("2023-01-23");
console.log(myCreatedDate2.toLocaleDateString()); // 1/23/2023
console.log(myCreatedDate2.toDateString()); // Mon Jan 23 2023
// here month starts from jan in 01.

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1766220694641 in milliseconds
console.log(myCreatedDate.getTime()); // 1737504000000 in milliseconds
console.log(Math.floor(Date.now()/1000)); // 1766220694 in seconds got converted








