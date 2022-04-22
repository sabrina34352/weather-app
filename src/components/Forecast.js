import forecastCSS from "../styles/forecast.module.css";
import forecastGraphCSS from "../styles/forecastGraph.module.css";
import cloudwithrain from "../assets/cloudwithrain.svg";
import cloudwithrainandstorm from "../assets/cloudwithstorm.svg";
import moon from "../assets/moonReal.svg";
import moonandcloud from "../assets/moonAndClouds.svg";
import ForecastGraph from "../components/ForecastGraph";
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

  const temperatureDay = [23, 23, 24, 24, 22, 24];
  const temperatureNight = [13, 14, 14, 13, 13, 14];

  useEffect(() => {
    let widthMiddle = divRef.current.offsetWidth;
    let WidthOfChild = childRef.current.offsetWidth;
    let heightOfChild = childRef.current.offsetHeight;
    //width of the parent container divided by the number of elements and divided by 2 to find the middle
    // width of child container to be able to draw a line to  exact pixels
    setDataExists({
      startingPoint: widthMiddle / 10,
      widthOfContainers: WidthOfChild,
      heightOfContainers: heightOfChild,
    });
  }, []);
  return (
    <>
      <div className={forecastCSS.mainContainer} ref={divRef}>
        {Object.keys(dataExists).length !== 0 && (
          <>
            {/* for dayTime */}
            <ForecastGraph
              data={dataExists}
              temperature={temperatureDay}
              style={forecastGraphCSS.dayTime}
            />
            {/* for nightTime */}
            <ForecastGraph
              data={dataExists}
              temperature={temperatureNight}
              style={forecastGraphCSS.nightTime}
            />
          </>
        )}

        {days.map((bud) => (
          <div className={forecastCSS.eachDay} key={bud.day}>
            <p className={forecastCSS.bigFont}>{bud.day}</p>
            <p className={forecastCSS.smallFont}>{bud.date}</p>
            <img
              src={bud.weather}
              className={forecastCSS.images}
              alt="weather"
            />
            <div className={forecastCSS.random} ref={childRef}></div>
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
