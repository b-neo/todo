const API_KEY = "30092a1681ef166e92c07e81b5121d65";

function geoOk(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url).then(response => response.json().then(data => {
        const target = document.querySelector("#weather");
        target.innerText = `Hello, your city is ${data.name}, and the weather is ${data.weather[0].main}`;
    }))
}
function geoError() {
    console.log("geo cannot find you");
}
navigator.geolocation.getCurrentPosition(geoOk, geoError);