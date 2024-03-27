import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "./icon/cloudy-night.svg",
  "01n": "./icon/cloudy.svg",
  "02d": "./icon/day.svg",
  "02n": "./icon/humidity.svg",
  "03d": "./icon/night.svg",
  "03n": "./icon/perfect-day.svg",
  "04d": "./icon/pressure.svg",
  "04n": "./icon/rain-night.svg",
  "09d": "./icon/rain.svg",
  "09n": "./icon/storm.svg",
  "10d": "./icon/sunny.svg",
  "10n": "./icon/temp.svg",
  "11d": "./icon/temp.svg",
  "11n": "./icon/wind.svg",
  "13d": "./icon/rain.svg",
  "13n": "./icon/rain.svg",
  "50d": "./icon/rain-night.svg",
  "50n": "./icon/rain-night.svg"
};

const API_KEY = "8692d05e8ac74951fa46bb4279dadd19";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
