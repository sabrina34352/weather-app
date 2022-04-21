import React from "react";
import forecastCSS from "../styles/forecast.module.css";

const temperatureData = [
  { x1: "10", y1: "10", x2: "70", y2: "70" },
  { x1: "70", y1: "70", x2: "200", y2: "15" },
  
];
function ForecastGraph() {
  return (
    <>
      <svg className={forecastCSS.graph}>
        {temperatureData.map((each, key) => (
          <line
            x1={each.x1}
            y1={each.y1}
            x2={each.x2}
            y2={each.y2}
            stroke="white"
          />
        ))}
      </svg>
    </>
  );
}

export default ForecastGraph;
