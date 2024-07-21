// __________________________________________________
// Activity 1 : Object Creation and Access
// __________________________________________________

// task 1 : Create an object representing a book with properties like title, author, and year, and log the object to the console.

const bookObj = {
    title : "War and Peace",
    author : "Leo Tolstoy",
    year : 1867
} 
console.log(bookObj)
console.log("_______________________________________")


// task 2 : Access and log the title and author properties of the book object.

console.log("Title : ",bookObj.title)
console.log("Author : ",bookObj.author)
console.log("_______________________________________")



// __________________________________________________
// Activity 2 : Object Methods
// __________________________________________________

// task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const bookObjs = {
    title : "War and Peace",
    author : "Leo Tolstoy",
    year : 1867,
    getInfo : function() {
        return `${this.title} is written by ${this.author}`
    }
} 
console.log(bookObjs.getInfo())
console.log("_______________________________________")

// task 4 : Add a method to the book object that takes parameter (year) and updates the book's year property, than log the updated object.

const bookObs = {
    title : "War and Peace",
    author : "Leo Tolstoy",
    year : 1867,
    updatedYear : function(newYear) {
        this.year = newYear
    }
} 
bookObs.updatedYear(1870)
console.log(bookObs)
console.log("_______________________________________")


// __________________________________________________
// Activity 3 : Nested Objects
// __________________________________________________

// task 5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// const books = {
//     title : "The Blue Umbrella",
//     author : "Ruskin Bond",
//     year : "1974",
//     library: {
//         name : "Ruskin Bond",
//         books : "A Little Book of Happiness"
//     }
// }
// console.log(books.library)

let library = {
    name : "Central Library of University",
    books : [
        {
            title : "The Blue Umbrella",
            author : "Ruskin Bond",
            year : 1974,
        },
        {
            title : "Pride and Prejudice",
            author : "Jane Austen",
            year : 1995,
        },
        {
            title : "Great Expectations",
            author : "Charles Dickens",
            year : 1997,
        },
    ]     
}
console.log(library)
console.log("_______________________________________")

// task 6 : Access and log the name of the library and the titles of all the books in the library.

console.log(library.name)

let booksTitle = library.books.map((book) => book.title)
console.log(booksTitle)
console.log("_____________________________________________")


// __________________________________________________
// Activity 4 : The this Keyword
// __________________________________________________

// task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const bookObt = {
    name : "Central Library of University",
    title : "The Blue Umbrella",
    author : "Ruskin Bond",
    year : 1974,
    books : function () {
        return `The title of the book is : ${this.title} \npublished year is : ${this.year}`
    }
}
console.log(bookObt.books())
console.log("_______________________________________")


// __________________________________________________
// Activity 5 : Object Iteration
// __________________________________________________

// task 8 : Use a for..in loop to iterate over the properties of the book object and log each property and its value.

const Book = {
    name : "Central Library of University",
    books : [
        {
            title : "The Blue Umbrella",
            author : "Ruskin Bond",
            year : 1974,
        },
        {
            title : "Pride and Prejudice",
            author : "Jane Austen",
            year : 1995,
        },
        {
            title : "Great Expectations",
            author : "Charles Dickens",
            year : 1997,
        },
    ]     
}
console.log(Book.name)
Book.books.forEach(element => {
    console.log(element)
});
console.log("______________________________________")

// task 9 : Use Object.keys and Object.values methods to log all the keys and values pf the book object.

const user = {}
user.id = "S123"
user.name = "Amit Mishra"
user.isLoggedin = true
console.log(Object.keys(user))
console.log(Object.values(user))