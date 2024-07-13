// ________________________________________
// Activity 1 : Variable Declaration
// ________________________________________

// -> task 1 : Declare a variable using var, assign it a number, and log value to the console

var num = 10;
console.log(num);

// -> task 2 : Declare a variable using let, assign it a string, and log value to the console

let str = "virat";
console.log(str);

// __________________________________________
// Activity 2 : Constant Declaration
// __________________________________________

// task 3 : Declare a variable using const, assign it a boolean value, and log value to the console

const isLoggedIn = true;
console.log(isLoggedIn);

// ___________________________________________
// Activity 3 : Data Types
// ___________________________________________

// task 4 : Create a variable of different data types(number, string, boolean, object, array) 
//          and log each variable's type using the typeof operator

let no = 10;
console.log(no);
console.log(typeof(no));

let stn = 'jupiter';
console.log(stn);
console.log(typeof(stn));

let isUserActive = false;
console.log(isUserActive);
console.log(typeof(isUserActive));

let user = {
    name: "Rohit",
    surname: "Sharma",
    jerseyNo: 45
}
console.log(user);
console.log(typeof(user));

// ____________________________________________
// Activity 4 : Reassigning Variables
// ____________________________________________

// task 5 : Declare a variable using let, assign it an initial value, reassign a new value, 
//          and both values to the console

let email = "abc@gmail.com";
console.log(email);
email = "xyz@gmail.com";
console.log(email);

// ____________________________________________
// Activity 5 : Understanding const
// ____________________________________________

// task 6 : Try reassigning a variable declare with const and observe the error

const batsman = "Axar";
console.log(batsman);
// batsman = "Dhruv"
// console.log(batsman);

// Note :- Error
// const variable value never change, because const is Immutable.


// Extra :- let and const variable difference

let companyName = "TCS";
const password = 123;
console.table([companyName,password])
companyName = "WIPRO";
// password = 456;
console.log(companyName)
// console.log(password)