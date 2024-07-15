// __________________________________________________
// Activity 1 : If-Else Statements
// __________________________________________________

// task 1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = prompt("Enter the number : ")
if (number > 0) {
    console.log(`${number} is positive number`)
} else if (number < 0) {
    console.log(`${number} is negative number`)
} else {
    console.log(`Number is Zero`)
}

// task 2 : Write a program to check if a person is eligable to vote (age >= 18) and log the result to the console.

let votingAge = prompt("Enter the age : ")
if (votingAge >= 18) {
    console.log("Person is eligable to vote")
} else {
    console.log("Person is not eligable to vote")
}


// __________________________________________________
// Activity 2 : Nested If-Else Statements
// __________________________________________________

// task 3 : Write a program to find the largest of three numbers using nested if else statements.

let num1 = 45;
let num2 = 18;
let num3 = 33;
if (num1 > num2 && num1 > num3) {
    console.log("number 1 is greater than both numbers")
}else if (num2 > num1 && num2 > num3) {
    console.log("number 2 is greater ")
}else{
    console.log("Number 3 is greater")
}


// __________________________________________________
// Activity 3 : Switch Case
// __________________________________________________

// task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let dayNo = prompt("Enter the number of the day name : ")
dayNo = parseInt(dayNo)

switch (dayNo) {
    case 1:
        console.log("Monday")
        break;

    case 2:
        console.log("Tuesday")
        break;

    case 3:
        console.log("Wednesday")
        break;

    case 4:
        console.log("Thursday")
        break;

    case 5:
        console.log("Friday")
        break;

    case 6:
        console.log("Saturday")
        break;

    case 7:
        console.log("Sunday")
        break;

    default:
        break;
}

// task 5 : Write a program that uses a switch case to assign a grade ('A','B','C','D','E') based on a score and log the grade to the console.

let marks = prompt("Enter the marks : ")
marks = parseInt(marks)

switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log("Grade = A")
        break;

    case (marks >= 80):
        console.log("Grade = B")
        break;

    case (marks >= 70):
        console.log("Grade = C")
        break;

    case (marks >= 60):
        console.log("Grade = D")
        break;

    case (marks >= 50):
        console.log("Grade = E")
        break;
                                                    
    default:
        console.log("Grade = F");
        break;
}


// __________________________________________________
// Activity 4 : Conditional (Ternary) Operator
// __________________________________________________

// task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = prompt("Enter the number : ")
let result = (num % 2 == 0) ? `even number` : `odd number`
console.log(`number is ${result}`)


// __________________________________________________
// Activity 5 : Combining Condition
// __________________________________________________

// task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = prompt("Enter the number of year : ")
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(`${year} is a leap year`)
}else{
    console.log(`${year} is not a leap year`)
}
