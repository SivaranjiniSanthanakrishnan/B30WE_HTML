// Callback function
console.log("table 1 (coffee)")
setTimeout(()=>console.log("Table 2 (Dinner)"), 5000);
console.log("Table 3 (Juice)")

// Example 2
const add = (n1,n2) => n1+n2;
const div = (n1,n2) => n1/n2;

const compute = (n1, n2, callback1, callback2) => {
    console.log("This is callback function")
    let sum = callback1(n1, n2);
    let div = callback2(n1,n2);
    console.log(sum, div)
};

console.log(compute(2,4,add, div));

// Example 3
function greetings(name){
    console.log(`Hi ${name} Welcome to session`)
}
function displayFullName(firstName, lastName, cb) {
    var fullName = `${firstName} ${lastName}`
    cb(fullName)
}
displayFullName("Sivaranjini", "S", greetings)

// Example 4
let a = (arg) => {
    try{
        console.log(arg.length)
        console.log("This is function 1")
    } catch(err) {
        console.warn(err)
    }
    
}
let b = (a) => {
    console.log("This is function 2")
    a(undefined);
}
b(a);

// Example 5
function taskComplete(cb) {
    cb()
}
taskComplete(()=> document.getElementById("id1").innerText = "Task 1 completed"); // Executes asynchronously
taskComplete(()=> document.getElementById("id2").innerText = "Task 2 completed"); // Executes asynchronously

// Example 6 | Callstack
// function fun1(){
//     fun2()
// }

// function fun2(){
//     fun1()
// }

// fun1();

// Nested Callback
setTimeout(() => {
    document.querySelector("#timer").innerHTML = 10;
    setTimeout(() => {
        document.querySelector("#timer").innerHTML = 9;
        setTimeout(() => {
            document.querySelector("#timer").innerHTML = 8;
            setTimeout(() => {
                document.querySelector("#timer").innerHTML = 7;
                setTimeout(() => {
                    document.querySelector("#timer").innerHTML = 6;
                    setTimeout(() => {
                        document.querySelector("#timer").innerHTML = 5;
                        setTimeout(() => {
                            document.querySelector("#timer").innerHTML = 4;
                            setTimeout(() => {
                                document.querySelector("#timer").innerHTML = 3;
                                setTimeout(() => {
                                    document.querySelector("#timer").innerHTML = 2;
                                    setTimeout(() => {
                                        document.querySelector("#timer").innerHTML = 1;
                                        setTimeout(() => {
                                            document.querySelector("#timer").innerHTML = 0;
                                            setTimeout(() => {
                                                document.querySelector("#timer").innerHTML = "Happy New Year!!!";
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// Promise : Example 1

const checkData = new Promise((resolved, rejected) => { // Promise Constructor
    setTimeout(() =>{
        const data = ["React", "Node"]
        if(data.length > 0) {
            resolved(data)
        } else {
            rejected("Length is zero")
        }
    }, 3000)
})

console.log(checkData);
const doAfter = (data) => {
    console.log(data)
}
checkData.then(doAfter).catch(err => console.error(err))

// Promise : Example 2

// 1. Generate a function which will get a parameter n1
// 2. Return a promise from that function 
// 3. If n1 is greater than 10 return resolved state promise else return rejected state promise 
// 4. Call the promise function and handle errors and data

const checkNumber = (n1) => {
    return new Promise((resolved, rejected) => {
        if(n1>10) {
            resolved("Number is greater than 10")
        } else {
            rejected("Number is less than 10")
        }
    })
}
checkNumber(3).then(data => console.log(data)).catch(err => console.error(err))

// Promise : Example 3

const value = 2;
const numberMatch = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    if (random == value) {
        resolve("Number Matched")
    } else {
        reject("Better luck next time")
    }
})
numberMatch.then(data => console.log(data)).catch(err => console.log(err));


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

Promise.all([])

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Promise Function")
        resolve(10)
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second Promise Function")
        if(2==1) {
            resolve(20)
        } else {
            reject("Second promise rejected")
        }
    }, 1000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Third Promise Function")
        resolve(30)
    }, 1000)
})

Promise.all([promise1, promise2, promise3 ])
    .then((result) => {
        console.log(result)
        var output = result.reduce((accumulator, initialValue) => accumulator + initialValue, 0)
        console.log(output);
    })
    .catch(err => console.error(err))

document.getElementById("text").addEventListener("click", getText)
function getText(){
    fetch("/demo/demo.txt")
        .then(res => {
            console.log(res)
            return res.text()
        })
        .then(data => {
            console.log(data)
            document.querySelector("#output").innerHTML = data 
        })
        .catch(err => console.error(err))
}

document.getElementById("json").addEventListener("click", getJson)
function getJson() {
    fetch("userData.json")
        .then(res => res.json())
        .then(data => {
            var ul = document.getElementById("ul-list")
            data.forEach(item => {
                let li = document.createElement("li")
                li.innerText = `${item.name}, ${item.age}`
                ul.append(li);
            })
        })
        .catch(err => console.error(err))
}

document.getElementById("extapi").addEventListener("click", getExtAPI)
function getExtAPI(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var ul = document.getElementById("ul-list")
            data.forEach(item => {
                let li = document.createElement("li")
                li.innerText = `${item.name}, ${item.email}`
                ul.append(li);
            })
        })
}

document.getElementById("updateAPI").addEventListener("click", updateAPI)

async function updateAPI(){
    const body = {
        name : "XXX",
	    email : "xx@gmail.com"
    }
    const requestOptions = {
        method: "PUT",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    }
    var response = await fetch("https://jsonplaceholder.typicode.com/users/2", requestOptions)
    var data = await response.json()
}

document.getElementById("postAPI").addEventListener("click", postAPI)
function postAPI(){
    const body = {
        name : "XXX",
	    email : "xx@gmail.com"
    }
    var requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("deleteAPI").addEventListener("click", deleteAPI)
function deleteAPI() {
    var requestOptions = {
        method: 'DELETE'
    }
    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}

// // Assignment: Promise.all and fetch
// // Dogs API : 

document.addEventListener('DOMContentLoaded', populateData);
var allUsers = []
async function populateData(){
    let response = await fetch("https://61fcdb8ff62e220017ce41c1.mockapi.io/users")
    let data = await response.json();
    allUsers = data;
    var tbody = document.querySelector(".tablebody")
    data.forEach(ele => {
        let tr = document.createElement('tr');
        Object.keys(ele).forEach(key => {
            let td = document.createElement('td');
            if(key === 'courses') {
                let ul = document.createElement('ul');
                ele[key].map(course => {
                    let li = document.createElement('li');
                    li.innerText = course;
                    ul.append(li)
                })
                td.append(ul)
            } else 
                td.innerText = ele[key]
            tr.append(td)
        })
        tr.innerHTML += `<td> <button id="edit-${ele.id}" data-action="edit" data-id="${ele.id}"> Edit </button> &nbsp; 
                        <button id="delete-${ele.id}" data-action="delete" data-id="${ele.id}"> Delete </button> </td>`
        tbody.append(tr);
    })
}

document.querySelector("#userForm").addEventListener("submit", submitData)
async function submitData(evt){
    evt.preventDefault();
    var body = JSON.stringify({
        name : document.querySelector("#name").value,
        age : document.querySelector("#age").value,
        email : document.querySelector("#email").value,
        courses : document.querySelector("#courses").value.split(',')
    })
    var id = document.querySelector("#id").value;
    if(id) {
        // Update 
        var response = await fetch(`https://61fcdb8ff62e220017ce41c1.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers : {'Content-Type': 'application/JSON'},
            body: body
        })
        var data = await response.json()
        console.log(data)
    } else {
        // Create
        var response = await fetch("https://61fcdb8ff62e220017ce41c1.mockapi.io/users", {
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            body: body
        })
        var data = await response.json()
    }
    location.reload()
}

document.querySelector("#userTable").addEventListener("click", function(e) {
    e.preventDefault();
    var selectedData = allUsers.filter(data => data.id === e.target.dataset.id)[0];
    if(e.target.dataset.action === "edit") {
        document.querySelector("#name").value = selectedData.name;
        document.querySelector("#age").value = selectedData.age;
        document.querySelector("#email").value = selectedData.email;
        document.querySelector("#courses").value = selectedData.courses.join(',');
        document.querySelector("#id").value = selectedData.id;
    }
})