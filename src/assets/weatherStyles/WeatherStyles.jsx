import React from "react";
import "./weather.css";

const WeatherStyles = () => {
  return (
    <div>
      <body>
        <h1> Weather Icons using CSS</h1>
        <div class="hot">
          <span class="sun"></span>
          <span class="sunx"></span>
        </div>
        <div class="cloudy">
          <span class="cloud"></span>
          <span class="cloudx"></span>
        </div>
        <div class="stormy">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <span class="snowe"></span>
          <span class="snowex"></span>
          <span class="stick"></span>
          <span class="stick2"></span>
        </div>
        <div class="breezy">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <span class="cloudr"></span>
        </div>
        <div class="night">
          <span class="moon"></span>
          <span class="spot1"></span>
          <span class="spot2"></span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </body>
    </div>
  );
};

export default WeatherStyles;
