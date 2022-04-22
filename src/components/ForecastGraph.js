import React from "react";
import forecastCSS from "../styles/forecast.module.css";

function ForecastGraph({ data, temperature, style }) {
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
    y2: 50,
  };

  return (
    <>
      <svg className={forecastCSS.graph} id={style}>
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
              <circle
                cx={temperatureData.x2}
                cy={temperatureData.y2}
                r="4px"
                stroke="white"
                strokeWidth="1"
                fill="black"
              />

              {/* display the data according to dayTime standards */}
              {style === forecastCSS.dayTime && (
                <>
                  <text
                    fontSize="16"
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="baseline"
                    x={temperatureData.x2}
                    y={temperatureData.y2 - 10}
                  >
                    {temperature[key]}°
                  </text>
                  <line
                    x1={temperatureData.x1}
                    y1={temperatureData.y1}
                    x2={temperatureData.x2}
                    y2={temperatureData.y2}
                    stroke="white"
                  />
                </>
              )}
              {/* display the data according to nightTime standards */}
              {style === forecastCSS.nightTime && (
                <>
                  <line
                    x1={temperatureData.x1}
                    y1={temperatureData.y1}
                    x2={temperatureData.x2}
                    y2={temperatureData.y2}
                    stroke="white"
                  />
                  <text
                    fontSize="16"
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="baseline"
                    x={temperatureData.x2}
                    y={temperatureData.y2 + 20}
                  >
                    {temperature[key]}°
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
    </>
  );
}

export default ForecastGraph;
