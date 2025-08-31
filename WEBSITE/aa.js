async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const resultDiv = document.getElementById('result');

    if (!city) {
        resultDiv.innerHTML = "Please enter a city name.";
        return;
    }

    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
            resultDiv.innerHTML = "City not found!";
            return;
        }
        let data = await response.json();
        resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error fetching weather data.";
    }
}