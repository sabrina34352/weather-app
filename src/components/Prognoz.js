import prognozCSS from "../styles/prognoz.module.css";
import cloudwithrain from "../cloudwithrain.svg";
import cloudwithrainandstorm from "../cloudwithstorm.svg";
import moon from "../moonReal.svg";
import moonandcloud from "../moonAndClouds.svg";
import React from "react";

const Budni = [
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

function Prognoz() {
  return (
    <>
      <div className={prognozCSS.mainContainer}>
        {Budni.map((bud) => (
          <div className={prognozCSS.eachDay} key={bud.day}>
            <p className={prognozCSS.bigFont}>{bud.day}</p>
            <p className={prognozCSS.smallFont}>{bud.date}</p>
            <img
              src={bud.weather}
              className={prognozCSS.images}
              alt="weather"
            />
            <div className={prognozCSS.random}></div>
            <div className={prognozCSS.random}></div>
            <img
              src={bud.weatherNight}
              className={prognozCSS.images}
              alt="weatherNight"
            />
            <p className={prognozCSS.bigFont}>{bud.wind}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Prognoz;
