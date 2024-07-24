// __________________________________________________
// Activity 1 : Understanding Promises
// __________________________________________________

// task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task is complete");
        resolve()
    }, 2000);
})
promiseOne.then(function () {
    console.log("Promise consumed");
})

// task 2 : Create a promise that reject with an error message after a 2-second timeout and handle the error using .catch()..

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "virat", password: 12})
        } else {
            reject('Error: Something went wrong')
        }
    }, 2000);
})
promiseTwo.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
})


// __________________________________________________
// Activity 2 : Chaining Promises
// __________________________________________________

// task 3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 seconds")
        resolve(56)
    }, 2000)
})
p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000);
    })
    return p2
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value) => {
    console.log("Last final call")
})


// __________________________________________________
// Activity 3 : Using Async/Await
// __________________________________________________

// task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value.

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Request Resolve")
    }, 2000);
})

async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFour()

// task 5 : Write an async function that handlea a rejected promise using try-catch and logs the error message.

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: 123})
        } else {
            reject('Error: Js went wrong')
        }
    }, 2000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()


// __________________________________________________
// Activity 4 : Fetching Data from an API
// __________________________________________________

// task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises.

// let fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts")
// fetchPromise.then((value1) => {
//     return value1.json()
// }).then((value2) => {
//     console.log(value2)
// })

// task 7 : Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function getAllPromise(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ",error)
    }
}
getAllPromise()


// __________________________________________________
// Activity 5 : Concurrent Promises
// __________________________________________________

// task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First promise resolved")
        resolve(10)
    }, 1000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second promise resolved")
        resolve(20)
    }, 1000);
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Third promise resolved")
        resolve(30)
    }, 1000);
})
Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises.

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Four promise resolved")
        resolve(40)
    }, 1000);
})
let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Five promise resolved")
        resolve(50)
    }, 1000);
})
let promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Six promise resolved")
        resolve(60)
    }, 1000);
})
Promise.race([promise4, promise5, promise6]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})