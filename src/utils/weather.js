const API_KEY = "14e13e3dd0ffdff2e481cd34405408af"; 

/**
 * Fetches current weather data for a city and country.
 * @param {string} city - City name (e.g. "Paris")
 * @param {string} country - Country name (e.g. "France")
 */
export async function fetchWeather(city, country = "") {
  const query = `${city}${country ? ',' + country : ''}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Weather data not found");
    }

    const data = await response.json();

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    return null;
  }
}
