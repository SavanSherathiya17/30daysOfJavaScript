// __________________________________________________
// Activity 1 : Template Literals
// __________________________________________________

// task 1 : Use the template literals to create a string that includes variable for a person' name and age, and log the string to the console.

const person = {
    name : "Virat Kohli",
    age : 35
}
console.log(`${person.name} is a greatest cricketer of team India and his age is ${person.age}\n`)

// task 2 : Create a multi-line string using template literals and log it to the console.

let multiLineString = `
This is a multi-line string
using template literals.

It allows for easy interpolation
of variables like numbers (${Math.random()}),
expressions, and even objects.

You can also include special characters:
\t- Tabs
\t- New lines
\t- Quotes: "single" and 'double'
`;

console.log(multiLineString);

// __________________________________________________
// Activity 2 : Destructuring
// __________________________________________________

// task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [3, 5, 8]
let [a, b, c] = arr
console.log("First Element : ",a)
console.log("Second Element : ",b)
console.log("\n")

// task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title : "War and Peace",
    author : "Leo Tolstoy",
    year : 1867
}
let {title, author} = book
console.log("Title of book is : ",title)
console.log("Author of book is : ",author)


// __________________________________________________
// Activity 3 : Spread and Rest Operators
// __________________________________________________

// task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)

// task 6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log("The sum of argument is : ",sum(...numbers));


// __________________________________________________
// Activity 4 : Default Parameters
// __________________________________________________

// task 7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function noOfSum(a, b = 1) {
    return a + b;
}

// with second parameter
let result1 = noOfSum(5,4)
console.log("The sum of result1 is : ", result1)

// without second parameter
let result2 = noOfSum(4)
console.log("The sum of result2 is : ",result2)


// __________________________________________________
// Activity 5 : Enhanced Object Literals
// __________________________________________________

// task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let myObject = {
    name: "John",
    age: 30,

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },

    celebrateBirthday() {
        this.age++;
        return `Happy birthday! Now I am ${this.age} years old.`;
    }
};

console.log(myObject);

// task 9 : Create an object with computed property names based on variables and log the object to the console.

let propName1 = 'firstName';
let propName2 = 'lastName';

let prsn = {
    [propName1]: "John",
    [propName2]: "Doe",
    age: 30,
    [`${propName1}_${propName2}`]: `${propName1} ${propName2}`,
};

console.log(prsn);
