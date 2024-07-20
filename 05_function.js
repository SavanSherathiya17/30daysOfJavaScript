// __________________________________________________
// Activity 1 : Function Declaration
// __________________________________________________

// task 1 : Write a function to check if a number is even or odd and log the result to the console.

function oddEven(num){
    if (num % 2 == 0) {
        console.log("Number is even")
    } else {
        console.log("Number is odd")
    }
}
oddEven(11);

// task 2 : Write a function to calculate the square of number and return to the result.

function squareOfNum(num) {
    return num * num;
}
console.log("The square of number is : ",(squareOfNum(10)))


// __________________________________________________
// Activity 2 : Function Expression
// __________________________________________________

// task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.

// function maxNum(number1, number2) {
//     if (number1 > number2) {
//         console.log("Number 1 is maximum")
//     } else {
//         console.log("Number 2 is maximum")
//     }
// }
// let num1 = prompt("Enter first number : ")
// let num2 = prompt("Enter second number : ")
// maxNum(num1, num2)

// task 4 : Write a function expression to concatenate two strings and return the result.

function concateStr(str1, str2) {
    return str1 + str2;
}
let firstStr = 'My name is '
let secStr = 'Vijay'
console.log("Concatenate of two strings are : ",(concateStr(firstStr, secStr)))


// __________________________________________________
// Activity 3 : Arrow Function
// __________________________________________________

// task 5 : Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfNumber = (num1, num2) => {
    return num1 + num2;
}
let no1 = 10;
let no2 = 20;
 console.log("The sum of two number is : ",(sumOfNumber(no1, no2)))

// task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => {
    return str.includes(char);
};

let myString = "Hello World!";
let characterToCheck = "o";

console.log(containsCharacter(myString, characterToCheck)); 


// ____________________________________________________
// Activity 4 : Function Parameters and Default Values
// ____________________________________________________

// task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function retProduct(num1, num2 = 5) {
    return num1 + num2
}
let number1 = 5;
let number2 = 25;
console.log(retProduct(number1, number2))
console.log(retProduct(number1))

// task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide default value for the age.

function personDetails(name, age = 23) {
    return `Name of person is ${name} and his age is ${age}`
}
let person1 = "Kreyansh";
let person2 = "Krishna"
let age = 25;
console.log(personDetails(person1))
console.log(personDetails(person2, age))


// ____________________________________________________
// Activity 5 : Higher-Order Function
// ____________________________________________________

// task 9 : Write a higher-order function that takes a function and a number, and calls the function that many times.

function callFunctionNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func(); // Call the provided function 'func' n times
    }
}

function greet() {
    console.log("Hello, World!");
}

callFunctionNTimes(greet, 3);

// task 10 : Write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.

function applyOperations(func1, func2, value) {
    let result1 = func1(value);
    let result2 = func2(result1);
    return result2;
}

// Example usage:
function addTwo(x) {
    return x + 2;
}

function multiplyByThree(x) {
    return x * 3;
}

let number = 5;
let finalResult = applyOperations(addTwo, multiplyByThree, number);
console.log(finalResult);