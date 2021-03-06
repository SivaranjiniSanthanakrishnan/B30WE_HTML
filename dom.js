let storedHTML = document.getElementById("para");

// Difference between innerHTML and innerText
let htmlData = storedHTML.innerHTML;
let textData = storedHTML.innerText;
console.log(htmlData);
console.log(textData);

document.getElementById("name").innerHTML = "Name: <span> XXX </span>";
document.getElementById("age").innerHTML = "<b> 25 </b>"
document.getElementById("email").innerHTML = "Email: <span> xx@gmail.com </span>";

// Apply style
document.body.style.fontFamily = "Arial"
storedHTML.style.color = "pink";

// Create the element and append
// Element 1
let imageElement = document.createElement("img");
imageElement.src = "nature.jpeg";
imageElement.height = 300;
imageElement.width = 300;

// Element 2
let divElement = document.createElement("div");
divElement.innerHTML = "Nature Image"

// Append vs AppendChild
document.body.append(imageElement, divElement);
// document.body.appendChild(imageElement);

function addrow(){
    var tableElement = document.getElementById("table");
    var row = tableElement.insertRow();
    var td1 = row.insertCell();
    td1.innerText = "CCC"
    var td2 = row.insertCell();
    td2.innerText = "28"
}

function add(e){
    console.log(e)
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let out = parseInt(num1) + parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML = "Addition is <b>" + out +"</b>"
}

function sub(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let out = parseInt(num1) - parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML = "Subtraction is <b>" + out +"</b>"
}

function mul(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let out = parseInt(num1) * parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML = "Multiplication is <b>" + out +"</b>"
}

function div(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let out = parseInt(num1) / parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML = "Division is <b>" + out +"</b>"
}

function addcountry(){
    // Select the target element
    let selectElement = document.getElementById("country");

    // Create option element
    let newOption = document.createElement("option"); // <option></option>
    newOption.innerHTML = document.getElementById("country-value").value; // <option>{{value}}</option>

    // Append option in the target element
    selectElement.appendChild(newOption);

    document.getElementById("country-value").value = "";
}

// Add a list to ul and retrieve the first and last element of a list and show it in a same div 
// Add a list to a ul
document.getElementsByTagName("ul")[0].setAttribute("id","unorder-list");
let ul = document.getElementById("unorder-list");
let li = document.createElement("li");
li.innerHTML = "Contact Us";
ul.append(li);

//Retrieve the first and last element from a list
let firstElement = ul.firstElementChild.innerText;
let lastElement = ul.lastElementChild.innerText;

document.getElementById("appendData").innerText += firstElement+lastElement;

// += : append Operator
// append()

// Task 1
var selectBox = document.querySelector("#select-course");
var spanTag = document.querySelector("#selected-value");

selectBox.addEventListener("change", function(){
    spanTag.innerText = selectBox.value;
})

// Task 2
var textBox = document.querySelector("#user-name");
console.log(textBox)
textBox.addEventListener("keydown", function() {
    let spanTag = document.querySelector("#typed-name");
    spanTag.innerText = textBox.value;
})

var textArea = document.querySelector("#description");
textAreaCount = textArea.getAttribute("maxlength");

textArea.addEventListener("keyup", function(event){
    console.log(event)
    let spanTag = document.querySelector("#character-count");
    spanTag.innerText = textAreaCount - textArea.value.length;
});

var tags = document.querySelectorAll(".user")[1];
console.log(tags);

// setTimeout

// Way 1
setTimeout(() => {
    console.log("Execute after 3 seconds")
}, 3000);

// Way 2
const timeout = () => console.log("Execute after 5 seconds");
var setTimer = setTimeout(timeout, 5000);

// clearTimeout
setTimeout(() => {
    clearTimeout(setTimer)
},3000);

// setInterval
var i=0;
var fruits = ["apple", "mango", "orange", "pineapple", "kiwi"];

function displayFruits(){
    console.log("came")
    if(i<fruits.length) {
        console.log(fruits[i]);
        i++;
    }
}

var setInterval = setInterval(displayFruits, 3000);
var clearIntervalTime = fruits.length * 3000 + 1000;

// clearInterval
setTimeout(() => {
    clearInterval(setInterval)
}, clearIntervalTime);

