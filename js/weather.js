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
            const temp_max = document.getElementById("temp_max");
        //    const temp_min = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            ContainsWeather.innerText = `${data.weather[0].main}`;
            
            temp.innerText = `${Math.round(data.main.temp)}°`;
            temp_max.innerText = `${Math.round(data.main.temp_max)}° / ${Math.round(data.main.temp_min)}°`;
        });
    //fetch는 바로 발생 X. 시간이 좀 걸림. 서버의 응답 기다려야 함.
}

function GeoError(){
    alert("User's location couldn't be found");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
//openweathermap.org가서 계정만들고 좌표 얻어오기