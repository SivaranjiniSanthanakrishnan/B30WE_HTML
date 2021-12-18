// Request to server using API

// 1. Create req object
var request = new XMLHttpRequest();

// 2. Open my request connection
// To get all countries
request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=577d33d6475394a06a5759e4576c0658');

// 3. Send a request
request.send();

// 4. Data after response
request.onload = function(){
    var data = JSON.parse(this.response); // Response of all countris
    console.log(data)
    var res = data.map(ele => ele.region === "Asia")
    // for(i=0; i<data.length;i++) { // For oop to process all countries
    //     checkWeather(data[i].capital) // Calling weather API for all countries 
    // }
}

// function checkWeather(capital) {
//     let request = new XMLHttpRequest();
//     url = `http://api.weatherapi.com/v1/current.json?key=cea45eb12885434d9c3181919212711&q=${capital}`
//     request.open('GET', url);
//     request.send();
//     request.onload = function(){
//         var weather = JSON.parse(this.response) // Printing weather API for all countries
//         console.log(weather)
//     }
// }