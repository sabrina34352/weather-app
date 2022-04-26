import React from "react";
import forecastGraphCSS from "./forecastGraph.module.css";

function Graph({ data, temperature, style, positioning }) {
  // finding the maximum and minimum values in the array
  let max = Math.max(...temperature),
    min = Math.min(...temperature);
  // finding the difference to be able to calculate by how much the height of the line should be curved
  let difference = max - min;
  // the max height to not go out of boundaries
  let maxHeight = data.heightOfContainers;
  let degreeOfChange = maxHeight / difference; // degree of change of Y axis

  // the initial values of the graph
  const temperatureData = {
    x1: 0,
    y1: 0,
    x2: -data.startingPoint,
    y2: 70,
  };
  window.addEventListener("resize", () => {});
  return (
    <svg className={forecastGraphCSS.graph} id={style}>
      {temperature.map((each, key) => {
        temperatureData.x1 = temperatureData.x2;
        temperatureData.y1 = temperatureData.y2;
        temperatureData.x2 += data.widthOfContainers;

        if (temperature[key - 1] > each) {
          temperatureData.y2 +=
            degreeOfChange * Math.abs(temperature[key - 1] - each);
        } else if (temperature[key - 1] < each) {
          temperatureData.y2 -=
            degreeOfChange * Math.abs(temperature[key - 1] - each);
        } else {
          temperatureData.y2 += 0;
        }

        return (
          <g key={key}>
            {/* display the data according to nightTime or dayTime standards based on positioning props */}
            <text
              className={forecastGraphCSS.text}
              x={temperatureData.x2}
              y={
                positioning ? temperatureData.y2 - 15 : temperatureData.y2 + 25
              }
            >
              {temperature[key]}°
            </text>
            <circle
              cx={temperatureData.x2}
              cy={temperatureData.y2}
              className={forecastGraphCSS.circle}
            />
            <line
              x1={temperatureData.x1}
              y1={temperatureData.y1}
              x2={temperatureData.x2}
              y2={temperatureData.y2}
              stroke="white"
            />
          </g>
        );
      })}
    </svg>
  );
}

export default Graph;
