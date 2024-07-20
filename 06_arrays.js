// __________________________________________________
// Activity 1 : Array Creation and Access
// __________________________________________________

// task 1 : Create an array of numbers from 1 to 5 and log the array to the console.

let myArr = [1,2,3,4,5]
console.log(myArr)

// task 2 : Access the first and last elements of the array and log them to the console.

let firstArr = [1,2,3,4,5]
console.log("First element of array is : ",firstArr[0])
console.log("Last element of array is : ",firstArr[4])


// __________________________________________________
// Activity 2 : Array Methods (Basic)
// __________________________________________________

// task 3 : Use the push method to add a new number to the end of the array and log the updated array.

let arr = [10,20,30,40,50]
arr.push(60)
console.log(arr)

// task 4 : Use the pop method to remove the last element from the array and log the updated array.

let MyArr = [0,1,10,11,100,101]
MyArr.pop()
console.log(MyArr)

// task 5 : Use the shift method to remove the first element from the array and log the updated array.

let shiftArr = [20,22,24,26,28,30]
shiftArr.shift()
console.log(shiftArr)

// task 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array.

let unshiftArr = [50,60,70,80,90]
unshiftArr.unshift(40)
console.log(unshiftArr)


// __________________________________________________
// Activity 3 : Array Methods (Intermediate)
// __________________________________________________

// task 7 : Use the map method to create a new array where each number is doubled and log the new array.

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.map((num) => num * 2)
console.log("New doubled array using map method is : \n",newNum) 

// task 8 : Use the filter method to create a new array with only even numbers and log the new array.

const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums.filter((number) => number % 2 == 0)
console.log("New array of even number is : ",newNums)

// task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.

const nos = [1,2,3,4,5]
const newNos = nos.reduce((currVal, prevVal) => currVal + prevVal)
console.log("The sum of all numbers are : ",newNos)


// __________________________________________________
// Activity 4 : Array Iteration
// __________________________________________________

// task 10 : Use a for loop to iterate over the array and log each element to the console.

console.log("New Array using for loop :- ")
const myarr = [1,2,3,4,5]
for (let i = 0; i < myarr.length; i++) {
    console.log(myarr[i]) 
}

// task 11 : Use a forEach method to iterate over the array and log each element to the console.

console.log("New Array using forEach loop :- ")
const eachNum = [,6,7,8,9,10]
eachNum.forEach(element => {
    console.log(element)
});


// __________________________________________________
// Activity 5 : Multi-dimensional Arrays
// __________________________________________________

// task 12 : Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// If you want to log each row of the matrix on a separate line, you can use a forEach loop:

// matrix.forEach(row => {
//     console.log(row);
// });

// task 13 : Access and log a specific element from the two-dimensional array.

let newMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access and log a specific element (e.g., element at row 1, column 2)
let row = 1;
let col = 2;
let element = newMatrix[row][col];

console.log(`Element at row ${row} and column ${col} is : ${element}`);
