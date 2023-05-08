const weatherIcon = () => {
    const apiKey = "e3cd90e503586f0e653219f98680cf60";
    const input = document.querySelector(".js-hiddenContainer--input");
    const button = document.querySelector(".js-hiddenContainer--button");
  
    const rainIcon = document.querySelector(".weather-rain");
    const clearIcon = document.querySelector(".weather-clear");
    const cloudsIcon = document.querySelector(".weather-clouds");
    const drizzleIcon = document.querySelector(".weather-drizzle");
    const mistIcon = document.querySelector(".weather-mist");
    const snowIcon = document.querySelector(".weather-snow");
  
    button.addEventListener("click", () => {
      const cityName = input.value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const rain = data.weather[0].main === "Rain";
          const clear = data.weather[0].main === "Clear";
          const clouds = data.weather[0].main === "Clouds";
          const drizzle = data.weather[0].main === "Drizzle";
          const mist = data.weather[0].main === "Mist";
          const snow = data.weather[0].main === "Snow";
  
          if (rain) {
            rainIcon.style.display = "block";
          } else {
            rainIcon.style.display = "none";
          }
  
          if (clear) {
            clearIcon.style.display = "block";
          } else {
            clearIcon.style.display = "none";
          }
  
          if (clouds) {
            cloudsIcon.style.display = "block";
          } else {
            cloudsIcon.style.display = "none";
          }
  
          if (drizzle) {
            drizzleIcon.style.display = "block";
          } else {
            drizzleIcon.style.display = "none";
          }
  
          if (mist) {
            mistIcon.style.display = "block";
          } else {
            mistIcon.style.display = "none";
          }
  
          if (snow) {
            snowIcon.style.display = "block";
          } else {
            snowIcon.style.display = "none";
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  };

  weatherIcon();
  
