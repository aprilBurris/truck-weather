const url = "https://api.open-meteo.com/v1/forecast?latitude=32.51599&longitude=-93.73212&hourly=temperature_2m,wind_speed_10m&current=temperature_2m";

const button = document.getElementById("check-btn");

const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

button.addEventListener("click", getWeather);