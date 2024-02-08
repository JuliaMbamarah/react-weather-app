import "./styles.css";
import Unit from "./Units";
import Search from "./Search";
import Footer from "./Footer";
import Description from "./Description";
import { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("Enter City");
  let [submit, setSubmit] = useState(false);
  let [weatherData, setWeatherData] = useState({
    main: { temp: 273, humidity: 0 },
    wind: {
      speed: 0,
    },
    weather: [{ description: "" }],
    dt: 0,
  });
  let [imageUrl, setImageUrl] = useState("");

  function fetchData(event) {
    event.preventDefault();
    let apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then(displayTemperature)
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function displayTemperature(response) {
    setSubmit(true);
    setWeatherData(response.data);
    console.log(response.data);

    let icon = response.data.weather[0].icon;
    setImageUrl(`https://openweathermap.org/img/wn/${icon}@2x.png`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search city={city} updateCity={updateCity} fetchData={fetchData} />
            <Description
              cityName={city}
              description={weatherData.weather[0].description}
              time={weatherData.dt}
            />
            <Unit
              weatherData={weatherData}
              temp={weatherData.main.temp}
              humidity={weatherData.main.humidity}
              speed={weatherData.wind.speed}
              img={imageUrl}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
