const API_KEY = "5f36f1ffb61f125fd67aa51147174af7";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather .weather__weather span");
      temp.textContent = `${Math.round(data.main.temp)}°C`;
      weather.innerText = data.weather[0].main;
      const location = data.name;

      console.log(location, weather, temp);
    });
}
function onGeoError(position) {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
