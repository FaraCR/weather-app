import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import sunny_icon from "../Assets/sunny.png";
import cloudy_icon from "../Assets/cloudy.png";
import rainy_icon from "../Assets/rainy.png";
import humidity_icon from "../Assets/humidity.png";
import snowy_icon from "../Assets/snowy.png";
import drizzle_icon from "../Assets/drizzle.png";
import windy_icon from "../Assets/windy.png";
import foggy_icon from "../Assets/foggy.png";
import light_icon from "../Assets/light-cloud.png";
import storm_icon from "../Assets/storm.png";

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    icon: cloudy_icon,
    temperature: "24°c",
    location: "London",
    humidity: "65%",
    wind: "50 km/h"
  });

  const api_key = process.env.REACT_APP_API_KEY;

  const search = async () => {
    if (city === "") return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
  
      const data = await response.json();
  
      setWeather({
        icon: getWeatherIcon(data.weather[0].icon),
        temperature: `${Math.floor(data.main.temp)}°c`,
        location: data.name,
        humidity: `${data.main.humidity}%`,
        wind: `${Math.floor(data.wind.speed)} m/s`
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return sunny_icon;
      case "02d":
      case "02n":
        return light_icon;
      case "09d":
      case "09n":
        return rainy_icon;
      case "10d":
      case "10n":
        return drizzle_icon;
      case "11d":
      case "11n":
        return storm_icon;
      case "50d":
      case "50n":
        return foggy_icon;
      case "13d":
      case "13n":
        return snowy_icon;
      default:
        return cloudy_icon;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weather.icon} alt="Weather Icon" />
      </div>
      <div className="weather-temp">{weather.temperature}</div>
      <div className="weather-location">{weather.location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity icon" className="icon" />
          <div className="data">
            <div className="humidity">{weather.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy_icon} alt="wind icon" className="icon" />
          <div className="data">
            <div className="wind">{weather.wind}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};


