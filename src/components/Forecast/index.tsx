import Graph from "../Graph";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  data: {
    day: string;
    date: string;
    weather: string;
    weatherNight: string;
    wind: string;
    dayTemp: number;
    nightTemp: number;
  }[];
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const EachDay = styled.div`
  border-radius: 30px;
  padding: 10px 0px 0px;
  width: 120px;
  filter: opacity(0.75);
  text-align: center;
  transition: 0.3s;
  &:hover {
    background-color: #474343;
  }
  @media (max-width: 768px) {
    width: 70px;
    border-radius: 20px;
  }
`;
const BigFont = styled.p`
  padding: 0;
  font-size: 23px;
  @media (max-width: 810px) {
    font-size: 17px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;
const SmallFont = styled.p`
  padding: 0;
  margin-top: 0;
  font-size: 17px;
  @media (max-width: 810px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 9px;
  }
`;
const GraphSpace = styled.div`
  margin: 70px 0;
  height: 30px;
  @media (max-width: 810px) {
    margin: 60px 0;
  }
`;
const Images = styled.img`
  margin: 20px 0;
  width: 35px;
  height: 30px;
`;

interface Container {
  startingPoint: number;
  widthOfContainers: number;
  heightOfContainers: number;
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
    <MainContainer ref={divRef}>
      {/* after getting all the info about divs in the page, render the svg of the graphs */}

      {Object.keys(containerData).length !== 0 && (
        <>
          {/* for dayTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={data.map((each) => each.dayTemp)}
            FromTop="30%"
            positioning="dayTime"
          />
          {/* for nightTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={data.map((each) => each.nightTemp)}
            FromTop="55%"
            positioning={undefined}
          />
        </>
      )}

      {data.map((bud) => (
        <EachDay key={bud.day}>
          <BigFont>{bud.day}</BigFont>
          <SmallFont>{bud.date}</SmallFont>
          <Images src={bud.weather} alt="weather" />
          <GraphSpace ref={childRef}></GraphSpace>
          <GraphSpace></GraphSpace>
          <Images src={bud.weatherNight} alt="weatherNight" />
          <BigFont>{bud.wind}</BigFont>
        </EachDay>
      ))}
    </MainContainer>
  );
}

export default Forecast;
