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
  let api_key = process.env.REACT_APP_API_KEY;

  const [wicon, setWicon] = useState(cloudy_icon);

  const search = async () => {
    const element = document.getElementsByClassName("city");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " m/s";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(sunny_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(light_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rainy_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "11d" ||
      data.weather[0].icon === "11n"
    ) {
      setWicon(storm_icon);
    } else if (
      data.weather[0].icon === "50d" ||
      data.weather[0].icon === "50n"
    ) {
      setWicon(foggy_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snowy_icon);
    } else {
      setWicon(cloudy_icon);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city" placeholder="Search" />{" "}
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="Weather Icon" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity icon" className="icon" />
          <div className="data">
            <div className="humidity">65%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy_icon} alt="wind icon" className="icon" />
          <div className="data">
            <div className="wind">50 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
