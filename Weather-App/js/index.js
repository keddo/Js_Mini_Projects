const API_KEY = "9a0fc904a12b0b9bb9e138635152f4c5";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const checkWeather = async (city) => {
   const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
   const data = await response.json();
   console.log(data);

   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector('.city').innerHTML = data.name;
   document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
   document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " Km/h";

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
