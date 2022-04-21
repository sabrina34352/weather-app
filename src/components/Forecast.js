import forecastCSS from "../styles/forecast.module.css";
import cloudwithrain from "../assets/cloudwithrain.svg";
import cloudwithrainandstorm from "../assets/cloudwithstorm.svg";
import moon from "../assets/moonReal.svg";
import moonandcloud from "../assets/moonAndClouds.svg";
import React from "react";
import ForecastGraph from "../components/ForecastGraph";
import ForecastGraphNight from "../components/ForecastGraphNight";

const days = [
  {
    day: "Вчера",
    date: "06.06",
    weather: cloudwithrain,
    weatherNight: moonandcloud,
    wind: "3.1 m/c",
  },
  {
    day: "Сегодня",
    date: "07.06",
    weather: cloudwithrain,
    weatherNight: moon,
    wind: "2.9 m/c",
  },
  {
    day: "Завтра",
    date: "08.06",
    weather: cloudwithrainandstorm,
    weatherNight: moonandcloud,
    wind: "3.6 m/c",
  },
  {
    day: "Ср",
    date: "09.06",
    weather: cloudwithrain,
    weatherNight: moon,
    wind: "3.1 m/c",
  },
  {
    day: "Чт",
    date: "10.06",
    weather: cloudwithrain,
    weatherNight: moon,
    wind: "3.6 m/c",
  },
];

function Forecast() {
  return (
    <>
      <div className={forecastCSS.mainContainer}>
        <ForecastGraph />
        <ForecastGraphNight />
        {days.map((bud) => (
          <div className={forecastCSS.eachDay} key={bud.day}>
            <p className={forecastCSS.bigFont}>{bud.day}</p>
            <p className={forecastCSS.smallFont}>{bud.date}</p>
            <img
              src={bud.weather}
              className={forecastCSS.images}
              alt="weather"
            />
            <div className={forecastCSS.random}></div>
            <div className={forecastCSS.random}></div>
            <img
              src={bud.weatherNight}
              className={forecastCSS.images}
              alt="weatherNight"
            />
            <p className={forecastCSS.bigFont}>{bud.wind}</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default Forecast;
