const showDegreesCelsius = () => {
    const apiKey = "e3cd90e503586f0e653219f98680cf60";
    const input = document.querySelector(".js-hiddenContainer--input");
    const button = document.querySelector(".js-hiddenContainer--button");
    const temperature = document.querySelector(".currentTemperature");
    const city = document.querySelector(".cityName");

    button.addEventListener("click", () => {
        const cityName = input.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        fetch(apiUrl) 
        .then(response => response.json())
        .then(data => {
            const tempInKelvin = data.main.temp;
            const tempInCelsius = tempInKelvin - 273.15;
            temperature.textContent = `${tempInCelsius.toFixed(1)}°C`;
            city.textContent = cityName;
        })
        .catch(error => {
            console.error(error);
            temperature.textContent = "UPSSS... I DIDN'T FIND THE LOCATION";
        });
    });
};


showDegreesCelsius();