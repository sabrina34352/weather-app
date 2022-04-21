import React from "react";
import forecastCSS from "../styles/forecast.module.css";

const temperatureDay = [23, 23, 24, 24, 22];
const temperatureNight = [13, 13, 14, 14, 13];

// max degree - 25
// min degree - 13
// average degree = 25+13/2 = 19(no)
// find the difference between either of degrees and the average degree(no)
// the difference between max and min - 12degrees
// 100/1.5~ = 83- the hegiht
// how much is one degree (proportion)
// 12degree == 83px
// 1degree = 83px/12 = ~7px
function ForecastGraph(props) {
  let min = Math.min(...temperatureDay),
    max = Math.max(...temperatureNight);
  let difference = max - min;
  let maxHeight = 70;
  let degreeOfChange = Math.abs(maxHeight / difference);
  console.log(props.props.startingPoint);
  const temperatureData = [
    {
      x1: props.props.startingPoint,
      y1: 50,
      x2: props.props.startingPoint + props.props.widthOfContainers,
      y2: 50 + degreeOfChange,
    },
    {
      x1: 65 + 120 + 5,
      y1: 70 + degreeOfChange,
      x2: 65 + 5 + 120 + 120,
      y2: 70 + degreeOfChange - degreeOfChange,
    },
  ];
  return (
    <>
      <svg className={forecastCSS.graph}>
        <circle
          cx={temperatureData[0].x1}
          cy={temperatureData[0].y1}
          r="4px"
          stroke="white"
          strokeWidth="1"
          fill="black"
        />
        {temperatureData.map((each, key) => (
          <g key={key}>
            <circle
              cx={each.x2}
              cy={each.y2}
              r="4px"
              stroke="white"
              strokeWidth="1"
              fill="black"
            />
            <line
              x1={each.x1}
              y1={each.y1}
              x2={each.x2}
              y2={each.y2}
              stroke="white"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default ForecastGraph;
