import forecastCSS from "./forecast.module.css";
import forecastGraphCSS from "../Graph/forecastGraph.module.css";
import ForecastGraph from "../Graph/ForecastGraph";
import React, { useRef, useEffect, useState } from "react";

function Forecast({ data, temperatureDay, temperatureNight }) {
  const divRef = useRef(null);
  const childRef = useRef(null);
  const [containerData, setcontainerData] = useState({});

  useEffect(() => {
    let widthMiddle = divRef.current.offsetWidth;
    let WidthOfChild = childRef.current.offsetWidth;
    let heightOfChild = childRef.current.offsetHeight;
    //width of the parent container divided by the number of elements and divided by 2 to find the middle
    // width of child container to be able to draw a line to  exact pixels
    setcontainerData({
      startingPoint: widthMiddle / (data.length * 2),
      widthOfContainers: WidthOfChild,
      heightOfContainers: heightOfChild,
    });
  }, [containerData]);
  return (
    <div className={forecastCSS.mainContainer} ref={divRef}>
      {Object.keys(containerData).length !== 0 && (
        <>
          {/* for dayTime */}
          <ForecastGraph
            data={containerData}
            temperature={temperatureDay}
            style={forecastGraphCSS.dayTime}
          />
          {/* for nightTime */}
          <ForecastGraph
            data={containerData}
            temperature={temperatureNight}
            style={forecastGraphCSS.nightTime}
          />
        </>
      )}

      {data.map((bud) => (
        <div className={forecastCSS.eachDay} key={bud.day}>
          <p className={forecastCSS.bigFont}>{bud.day}</p>
          <p className={forecastCSS.smallFont}>{bud.date}</p>
          <img src={bud.weather} className={forecastCSS.images} alt="weather" />
          <div className={forecastCSS.graphSpace} ref={childRef}></div>
          <div className={forecastCSS.graphSpace}></div>
          <img
            src={bud.weatherNight}
            className={forecastCSS.images}
            alt="weatherNight"
          />
          <p className={forecastCSS.bigFont}>{bud.wind}</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
