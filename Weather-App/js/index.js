const API_KEY = "9a0fc904a12b0b9bb9e138635152f4c5";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const weatherInfo = document.querySelector('.weather');

const checkWeather = async (city) => {
   const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
   const data = await response.json();

   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector('.city').innerHTML = data.name;
   document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
   document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " Km/h";
   setWeatherIcon(data);

   weatherInfo.style.display = 'block';

}

const setWeatherIcon = (data) => {
    switch(data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = 'images/clouds.png';
            break;
        case "Clear":
            weatherIcon.src = 'images/clear.png';
            break;
        case "Rain":
            weatherIcon.src = 'images/rain.png';
            break;
        case "Drizzle":
            weatherIcon.src = 'images/drizzle.png';
            break;
        case "Mist":
            weatherIcon.src = 'images/mist.png';
            break;
        default:
            weatherIcon.src = 'images/clear.png';
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
