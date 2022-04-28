import forecastCSS from "./forecast.module.css";
import forecastGraphCSS from "../Graph/forecastGraph.module.css";
import Graph from "../Graph";
import React, { useRef, useEffect, useState } from "react";

type Props = {
  data: {
    day: string;
    date: string;
    weather: string;
    weatherNight: string;
    wind: string;
    dayTemp: number;
    nightTemp: number;
  }[]
}

interface Container {
  startingPoint: number,
  widthOfContainers: number,
  heightOfContainers: number,
}

function Forecast({ data }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [containerData, setcontainerData] = useState({} as Container);

  useEffect(() => {
    if (divRef && divRef.current && childRef && childRef.current) {
      const widthMiddle = divRef.current.offsetWidth;
      const WidthOfChild = childRef.current.offsetWidth;
      const heightOfChild = childRef.current.offsetHeight;
      setcontainerData({
        startingPoint: widthMiddle / (data.length * 2),
        widthOfContainers: WidthOfChild,
        heightOfContainers: heightOfChild,
      });
    }

    //width of the parent container divided by the number of elements and divided by 2 to find the middle
    // width of child container to be able to draw a line to  exact pixels
  }, [containerData, data.length]);
  return (
    <div className={forecastCSS.mainContainer} ref={divRef}>
      {/* after getting all the info about divs in the page, render the svg of the graphs */}

      {Object.keys(containerData).length !== 0 && (
        <>
          {/* for dayTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={data.map((each) => each.dayTemp)}
            style={forecastGraphCSS.dayTime}
            positioning="dayTime"
          />
          {/* for nightTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={data.map((each) => each.nightTemp)}
            style={forecastGraphCSS.nightTime}
            positioning={undefined}
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
