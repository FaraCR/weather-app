import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import sunny_icon from "../Assets/sunny.png";
import cloudy_icon from "../Assets/cloudy.png";
import rainy_icon from "../Assets/rainy.png";
import humidity_icon from "../Assets/humidity.png";
import snowy_icon  from "../Assets/snowy.png";
import drizzle_icon from "../Assets/drizzle.png";
import windy_icon from "../Assets/windy.png";

export const WeatherApp = () => {

let api_key="75a8a6f5560dd8720b27fe9203dd6fd7"

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city" placeholder="Search" />
        <div className="search-icon">
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={sunny_icon} alt="Sun Icon"/>
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Prague</div>
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
                <div className="humidity">50 km/h</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  );
};
