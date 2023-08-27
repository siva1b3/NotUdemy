import React from 'react';
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import snow_icon from "../Assets/snow.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import wind_icon from "../Assets/wind.png";
import Search from './Search';

const WeatherApp = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <search />
    </div>
  )
}

export default WeatherApp;
