// // Callback function
// console.log("table 1 (coffee)")
// setTimeout(()=>console.log("Table 2 (Dinner)"), 5000);
// console.log("Table 3 (Juice)")

// // Example 2
// const add = (n1,n2) => n1+n2;
// const div = (n1,n2) => n1/n2;

// const compute = (n1, n2, callback1, callback2) => {
//     console.log("This is callback function")
//     let sum = callback1(n1, n2);
//     let div = callback2(n1,n2);
//     console.log(sum, div)
// };

// console.log(compute(2,4,add, div));

// // Example 3
// function greetings(name){
//     console.log(`Hi ${name} Welcome to session`)
// }
// function displayFullName(firstName, lastName, cb) {
//     var fullName = `${firstName} ${lastName}`
//     cb(fullName)
// }
// displayFullName("Sivaranjini", "S", greetings)

// // Example 4
// let a = (arg) => {
//     try{
//         console.log(arg.length)
//         console.log("This is function 1")
//     } catch(err) {
//         console.warn(err)
//     }
    
// }
// let b = (a) => {
//     console.log("This is function 2")
//     a(undefined);
// }
// b(a);

// // Example 5
// function taskComplete(cb) {
//     cb()
// }
// taskComplete(()=> document.getElementById("id1").innerText = "Task 1 completed"); // Executes asynchronously
// taskComplete(()=> document.getElementById("id2").innerText = "Task 2 completed"); // Executes asynchronously

// // Example 6 | Callstack
// // function fun1(){
// //     fun2()
// // }

// // function fun2(){
// //     fun1()
// // }

// // fun1();

// // Nested Callback
// setTimeout(() => {
//     document.querySelector("#timer").innerHTML = 10;
//     setTimeout(() => {
//         document.querySelector("#timer").innerHTML = 9;
//         setTimeout(() => {
//             document.querySelector("#timer").innerHTML = 8;
//             setTimeout(() => {
//                 document.querySelector("#timer").innerHTML = 7;
//                 setTimeout(() => {
//                     document.querySelector("#timer").innerHTML = 6;
//                     setTimeout(() => {
//                         document.querySelector("#timer").innerHTML = 5;
//                         setTimeout(() => {
//                             document.querySelector("#timer").innerHTML = 4;
//                             setTimeout(() => {
//                                 document.querySelector("#timer").innerHTML = 3;
//                                 setTimeout(() => {
//                                     document.querySelector("#timer").innerHTML = 2;
//                                     setTimeout(() => {
//                                         document.querySelector("#timer").innerHTML = 1;
//                                         setTimeout(() => {
//                                             document.querySelector("#timer").innerHTML = 0;
//                                             setTimeout(() => {
//                                                 document.querySelector("#timer").innerHTML = "Happy New Year!!!";
//                                             }, 1000)
//                                         }, 1000)
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// // Promise : Example 1

// const checkData = new Promise((resolved, rejected) => { // Promise Constructor
//     setTimeout(() =>{
//         const data = ["React", "Node"]
//         if(data.length > 0) {
//             resolved(data)
//         } else {
//             rejected("Length is zero")
//         }
//     }, 3000)
// })

// console.log(checkData);
// const doAfter = (data) => {
//     console.log(data)
// }
// checkData.then(doAfter).catch(err => console.error(err))

// // Promise : Example 2

// // 1. Generate a function which will get a parameter n1
// // 2. Return a promise from that function 
// // 3. If n1 is greater than 10 return resolved state promise else return rejected state promise 
// // 4. Call the promise function and handle errors and data

// const checkNumber = (n1) => {
//     return new Promise((resolved, rejected) => {
//         if(n1>10) {
//             resolved("Number is greater than 10")
//         } else {
//             rejected("Number is less than 10")
//         }
//     })
// }
// checkNumber(3).then(data => console.log(data)).catch(err => console.error(err))

// // Promise : Example 3

// const value = 2;
// const numberMatch = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 3);
//     if (random == value) {
//         resolve("Number Matched")
//     } else {
//         reject("Better luck next time")
//     }
// })
// numberMatch.then(data => console.log(data)).catch(err => console.log(err));


// Promise chain : Example 4

var promiseChain = new Promise((resolve, reject) => {
    (1==2) ? resolve(10) : reject("Not true")
})

promiseChain
    .then(data => {
        console.log(data)
        return data
    })
    .then(data => {
        console.log(data)
        return 5
    })
    .then(data => {
        console.log(data)
        return data
    })
    .then(data => {
        console.log(data)
        return data
    })
    .catch(err => {
        console.error(err)
        return "Data from catch"
    })
    .then(data => {
        console.log(data)
        return data
    })
    .finally(() => {
        console.log("Finally block")
    })
    
// Task : Promise Chain

// 1. Write Promise function to get user data from database 
// 2. Write Promise function to get services for the user
// 3. Write Promise function to get cost for the given list of services 
// 4. Call each function in a Promise chaining method using .then() function

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching the data from database")
        setTimeout(() => {
            resolve({userId: userId, username: "XXX"})
        }, 1000)
    })
}
function getServicesForUser(user) {
    console.log("Getting service data for the user")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["email", "VPN", "AWS", " Cloud access"])
        }, 1000)
    })
}
function getCostForServices(services) {
    console.log("Calculating cost for services")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cost = services.reduce((accumulator, initialValue) => {
                return accumulator + 100
            }, 0)
            resolve(cost)
        })
    })
}

getUser(2)
    .then(userData => {
        console.log(userData)
        return getServicesForUser(userData)
    })
    .then(serviceData => {
        console.log(serviceData)
        return getCostForServices(serviceData)
    })
    .then(finalCost => {
        console.log(finalCost)
    })

// getUser(5).then(getServicesForUser).then(getCostForServices).then(data => console.log(data))