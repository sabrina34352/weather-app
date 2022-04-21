import forecastCSS from "../styles/forecast.module.css";
import cloudwithrain from "../assets/cloudwithrain.svg";
import cloudwithrainandstorm from "../assets/cloudwithstorm.svg";
import moon from "../assets/moonReal.svg";
import moonandcloud from "../assets/moonAndClouds.svg";
import ForecastGraph from "../components/ForecastGraph";
import ForecastGraphNight from "../components/ForecastGraphNight";
import React, { useRef, useEffect, useState } from "react";

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
  const divRef = useRef(null);
  const childRef = useRef(null);
  const [dataExists, setDataExists] = useState({});

  useEffect(() => {
    let widthMiddle = divRef.current.offsetWidth;
    let WidthOfChild = childRef.current.offsetWidth;
    console.log("Width of child: ", WidthOfChild);
    //width of the parent container divided by the number of elements and divided by 2 to find the middle
    // width of child container to be able to draw a line to ny exact pixels
    setDataExists({
      startingPoint: widthMiddle / 10,
      widthOfContainers: WidthOfChild,
    });
  }, []);
  return (
    <>
      <div className={forecastCSS.mainContainer} ref={divRef}>
        {Object.keys(dataExists).length !== 0 && (
          <>
            <ForecastGraph props={dataExists} />
            <ForecastGraphNight />
          </>
        )}

        {days.map((bud) => (
          <div className={forecastCSS.eachDay} ref={childRef} key={bud.day}>
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
