let buttonEl = document.createElement("button");                                // create button
buttonEl.innerHTML = "Click Me";                                                // label button
document.body.appendChild(buttonEl);                                            // append button to the body
       
buttonEl.addEventListener("click", function() {      
        console.log("you clicked me!");                                         // added an event listener 
});


let info =  document.createElement("div");                                      // created a div to display the Weather
document.body.appendChild(info);                                                // appanded to the body

function getWeather()
{
    let weather = new XMLHttpRequest();
    weather.open( "GET", "http://api.openweathermap.org/data/2.5/weather?q=Istanbul&APPID=1aa19ff95886a3b4b7338c13f0559048" , false );       
    weather.send(null) ;                                                        // above three lines are to fetch the data from API
    
    let obj = JSON.parse(weather.response);                                     // to treat as object
    return info.innerHTML = "The temperature in Istanbul is " + obj.main.temp ; // function returns by setting the temperature to the created div
}

buttonEl.addEventListener("click", getWeather);                                 // calling the function by eventlistener          