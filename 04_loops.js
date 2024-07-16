// __________________________________________________
// Activity 1 : For Loop
// __________________________________________________

// task 1 : Write a program to print numbers from 1 to 10 using a for loop.

console.log("Print 1 to 10 numbers : ")
for (let i = 1; i <= 10; i++) {
    console.table(i)
}

// task 2 : Write a program to print the multiplication table of 5 using a for loop.

console.log("Table of 5 : ")
let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " = " + n * i)  
}


// __________________________________________________
// Activity 2 : While Loop
// __________________________________________________

// task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let i = 1;
let sum = 0;
while (i <= 10) {
    sum = sum + i;
    i = i + 1;
}
console.log("The sum of 10 numbers :",sum)

// task 4 : Write a program to print numbers from 10 to 1 using a while loop.

let num = 10;
console.log("Number of 10 to 1 : ")
while (num >= 1) {
    console.log(num)
    num--;
}


// __________________________________________________
// Activity 3 : Do...While Loop
// __________________________________________________

// task 5 : Write a program to print numbers from 1 to 5 using a do...while loop.

let no = 1;
console.log("numbers from 1 to 5 are given below : ")
do {
    console.log(no)
    no++
} while (no <= 5);

// task 6 : Write a program to calculate the factorial of a number using a do...while loop.

let nums = 7;
let factorial = 1;
let x = 1;

do {
    factorial *= x;
    x++;
} while (x <= nums);

console.log(`The factorial of ${nums} is : ${factorial}`);


// __________________________________________________
// Activity 5 : Nested Loops
// __________________________________________________

// task 7 : Write a program to print a pattern using nested for loops.

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}


// __________________________________________________
// Activity 6 : Loop Control Statements 
// __________________________________________________

// task 8 : Write a program to print numbers 1 to 10, but skip the number 5 using the continue statement.

console.log("using continue statement and print the number as per condition")
for (let i = 1; i <= 10; i++){
    if (i == 5) {
        continue;
    }
    console.log(i)
}

// task 9 : Write a program to print numbers 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("using break statement and print the number as per condition")
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i)
}