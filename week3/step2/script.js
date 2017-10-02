(function calLAPI(){
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'https://api.sunrise-sunset.org/json?lat=52.3702&lng=-4.8952&date=yesterday&formatted=0');
request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {
        var items = JSON.parse(request.response);
        console.log(items);
        let p = document.createElement("p");
        p.innerHTML = items.results.sunrise;
        document.body.appendChild(p);
        
        }
}
request.send();

setTimeout(calLAPI, 3000);    
}());





//setInterval(calLAPI, 3000);   //ANOTHER WAY