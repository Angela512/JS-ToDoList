const API_KEY = "63d5f96b4a950ab239091fa6823fcc9a";

function GeoOk(location){
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const ContainsWeather = document.getElementById("ContainsWeather");
            const temp = document.getElementById("temp");
            const temp_max_min = document.getElementById("temp-max-min");
            city.innerText = data.name;
            ContainsWeather.innerText = `${data.weather[0].main}`;
            
            temp.innerText = `${Math.round(data.main.temp)}° `;
            temp_max_min.innerText = `(${Math.round(data.main.temp_max)}° / ${Math.round(data.main.temp_min)}°)`;
        });
}

function GeoError(){
    alert("User's location couldn't be found");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);