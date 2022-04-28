import React from "react";
import styled from "styled-components";

type Props = {
  ContainerInfo: {
    startingPoint: number;
    widthOfContainers: number;
    heightOfContainers: number;
  };
  temperature: number[];
  FromTop: string;
  positioning: string | undefined;
};
interface PositionProps {
  top: string;
}

const GraphImg = styled.svg<PositionProps>`
  position: absolute;
  height: 140px;
  width: 100%;
  top: ${(props) => props.top};
  @media (max-width: 810px) {
    left: 0;
    width: 100%;
  }
`;
const Text = styled.text`
  font-size: 16px;
  fill: white;
  text-anchor: middle;
`;
const Circle = styled.circle`
  stroke: white;
  stroke-width: 1;
  fill: black;
  r: 4px;
`;
const Line = styled.line`
  stroke: white;
`;

function Graph({ ContainerInfo, temperature, FromTop, positioning }: Props) {
  // finding the maximum and minimum values in the array
  const max = Math.max(...temperature),
    min = Math.min(...temperature);

  // finding the difference to be able to calculate by how much the height of the line should be curved
  const difference = max - min;

  // the max height to not go out of boundaries
  const maxHeight = ContainerInfo.heightOfContainers;
  const degreeOfChange = maxHeight / difference; // degree of change of Y axis

  // the initial values of the graph
  const temperatureData = {
    x1: 0,
    y1: 0,
    x2: -ContainerInfo.startingPoint,
    y2: 70,
  };

  return (
    <GraphImg top={FromTop}>
      {temperature.map((each, key) => {
        temperatureData.x1 = temperatureData.x2;
        temperatureData.y1 = temperatureData.y2;
        temperatureData.x2 += ContainerInfo.widthOfContainers;

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
            <Text
              x={temperatureData.x2}
              y={
                positioning ? temperatureData.y2 - 15 : temperatureData.y2 + 25
              }
            >
              {temperature[key]}°
            </Text>
            <Circle cx={temperatureData.x2} cy={temperatureData.y2} />
            <Line
              x1={temperatureData.x1}
              y1={temperatureData.y1}
              x2={temperatureData.x2}
              y2={temperatureData.y2}
            />
          </g>
        );
      })}
    </GraphImg>
  );
}

export default Graph;
