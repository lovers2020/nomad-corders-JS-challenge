const API_KEY = "5f36f1ffb61f125fd67aa51147174af7";
const weatherEl = document.getElementById("weather");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector(".weather__temp span:first-child");
      const location = document.querySelector(".weather__temp span:last-child");
      const weather = data.weather[0].icon;

      temp.textContent = `${Math.round(data.main.temp)} °C`;
      location.innerText = data.name;

      const weatherIcon = document.createElement("img");
      weatherIcon.src = `https://openweathermap.org/img/wn/${weather}.png`;
      weatherEl.appendChild(weatherIcon);
    });
}
function onGeoError() {
  alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
