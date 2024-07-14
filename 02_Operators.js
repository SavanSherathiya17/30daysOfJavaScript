// ____________________________________________________
// Activity 1 : Arithmetic Operations
// ____________________________________________________

// task 1 : Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 40;
let num3 = num1 + num2;
console.log("the addition of two number is : ",num3);

// task 2 : Write a program to subtract two numbers and log the result to the console.

let no1 = 50;
let no2 = 10;
let no3 = no1 - no2;
console.log("the subtraction of two number is : ",no3);

// task 3 : Write a program to multiply two numbers and log the result to the console.

let mulNo1 = 10;
let mulNo2 = 20;
let mulNo3 = mulNo1 * mulNo2;
console.log("the multiplication of two number is : ",mulNo3);

// task 4 : Write a program to divide two numbers and log the result to the console.

let divNo1 = 20;
let divNo2 = 4;
let divNo3 = divNo1 / divNo2;
console.log("the division of two number is : ",divNo3);

// task 5 : Write a program to find the remainder when one number is divide by another and log the result to the console.

let number1 = 100;
let number2 = 10;
let number3 = number1 % number2;
console.log("the remainder of two number is : ",number3);

console.table([num3, no3, mulNo3, divNo3, number3]);


// ____________________________________________________
// Activity 2 : Assignment operators
// ____________________________________________________

// task 6 : Use the += operator to add number to a variable and log the result to the console.

let addNum = 5;
addNum += 5;
console.log(addNum);

// task 7 : Use the -= operator to subtract number to a variable and log the result to the console.

let subNum = 10;
subNum -= 9;
console.log(subNum);


// ____________________________________________________
// Activity 3 : Comparision operators
// ____________________________________________________


// task 8 : Write a program to compare two numbers using > and < and log the result to the console.

const nm1 = prompt("Enter the first number : ")
const nm2 = prompt("Enter the second number : ")

if (nm1 > nm2) {
    console.log(`${nm1} is greater than ${nm2}`)
}else if (nm1 < nm2){
    console.log(`${nm1} is less than ${nm2}`)
}else{
    console.log("Number is zero")
}

// task 9 : Write a program to compare two numbers using >= and <= and log the result to the console.

const n1 = prompt("Enter the first number : ")
const n2 = prompt("Enter the second number : ")

if (n1 >= n2) {
    console.log(`${n1} is >= ${n2}`)
}else if (n1 <= n2){
    console.log(`${n1} is <= ${n2}`)
}else{
    console.log("number is zero")
}


// task 10 : Write a program to compare two numbers using == and === and log the result to the console.

let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);


// ____________________________________________________
// Activity 4 : Logical operators
// ____________________________________________________

// task 11 : Write a program that uses the && operator to combine two condition and log the result to the console.


const marks = prompt("Enter the marks : ")
if (marks >= 90 && marks <= 100) {
    console.log("extra ordinary")
}else if (marks >= 80 && marks < 90){
    console.log("got A+")
}else if (marks >= 70 && marks < 80){
    console.log("got A")
}else if (marks >=60 && marks < 70){
    console.log("got B+")
}else if (marks >= 50 && marks < 60){
    console.log("got B")
}else{
    console.log("Need more practice")
}

// task 12 : Write a program that uses the || operator to combine two condition and log the result to the console.

const no = prompt("Enter the number : ")
if (no > 0 || no > -10) {
    console.log("Number is valid")
}else{
    console.log("Number is invalid!")
}

// task 13 : Write a program that uses the ! operator to negate a condition and log the result to the console.

const remOfNum = prompt("Enter the value : ")
if (remOfNum % 2 != 0) {
    console.log("Number is odd")
}else{
    console.log("Number is even")
}


// ____________________________________________________
// Activity 5 : Ternary operator
// ____________________________________________________

// task 14 : Write a program that uses the ternary operator to check if a number is positive or nagitive and log the result to the console.

let checkNum = prompt("Enter the Number : ")
let res = (checkNum >= 0) ? 'positive number' : 'negative number'
console.log(`number is ${res}`)
