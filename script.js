
let inputBox = document.getElementById("id-input-box");
let searchButton = document.getElementById("id-search-button");
let weatherImage = document.getElementById("id-weather-image");
let temperature = document.getElementById("id-temperature");
let description = document.getElementById("id-description");
let humidityValue = document.getElementById("humidity-value");
let windSpeedValue = document.getElementById("wind-speed-value");
let locationNotFound = document.querySelector(".location-not-found");
let classContent = document.querySelector(".content");
let classBottom = document.querySelector(".bottom");
let color = document.querySelector(".color");
let color1 = document.querySelector(".color1");

inputBox.value = '';


let on_off = document.getElementById("on_off");

on_off.addEventListener('click',function(){
    document.body.style.transition = "1s";
    if(on_off.innerText === 'OFF'){
        on_off.innerText = "ON";
        document.body.style.filter = "invert(1)";
        // image.style.filter = "none";
    }
    else{
        on_off.innerText = "OFF";
        document.body.style.filter = "none";
    }
});



async function checkWeather(city_name){
    const API_key = "f8e44fa905b9520f5c89f57d7d436ff3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    if(weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        classContent.style.display = "none";
        classBottom.style.display = "none";
        console.log('error');
        return;
    }
    locationNotFound.style.display = "none";
    classContent.style.display = "flex";
    classBottom.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    // temperature.innerHTML = 296;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidityValue.innerHTML = `${weather_data.main.humidity}%`;
    windSpeedValue.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds': weatherImage.src = "assets/cloud.png"; break;
        case 'Clear': weatherImage.src = "assets/clear.png"; break;
        case 'Mist': weatherImage.src = "assets/mist.png"; break;
        case 'Rain': weatherImage.src = "assets/rain.png"; break;
        case 'Snow': weatherImage.src = "assets/snow.png"; break;
        case 'Clouds': weatherImage.src = "assets/cloud.png"; break;
    }
}



searchButton.addEventListener("click", () => {
    checkWeather(inputBox.value);
})


















// // API URL - https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API key}

// // API Key --  f8e44fa905b9520f5c89f57d7d436ff3




// // let color = document.getElementById('color');
// // let on = document.getElementById('on');
// // let off = document.getElementById('off');

// // off.addEventListener('click',function(){
// //     off.style.display = "none";
// //     on.style.display = "block";

// // });




// let on_off = document.getElementById("on_off");

// on_off.addEventListener('click',function(){
//     if(on_off.innerText === 'OFF'){
//         on_off.innerText = "ON";
//         document.body.classList.add("dark-mode");
//     }
//     else{
//         on_off.innerText = "OFF";
//         document.body.classList.remove("dark-mode");
//     }
// });
