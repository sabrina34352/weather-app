import Graph from "../Graph";
import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import clouds from "../../assets/clouds.svg";
import cloudwithrain from "../../assets/cloudwithrain.svg";
import wind from "../../assets/wind.svg";

type Props = {
  data: {
    date: string;
    time: string;
    weather: string;
    wind: string;
    dayTemp: number;
    nightTemp: number;
  }[];
};

interface Container {
  startingPoint: number;
  widthOfContainers: number;
  heightOfContainers: number;
}

function Forecast({ data }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [containerData, setcontainerData] = useState({} as Container);

  function getWeatherIcon(weather: string) {
    switch (weather) {
      case "Clear":
        return sun;
      case "Clouds":
        return clouds;
      case "Rain":
        return cloudwithrain;
      default:
        return sun;
    }
  }
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
    <S.MainContainer ref={divRef}>
      {/* after getting all the info about divs in the page, render the svg of the graphs */}

      {Object.keys(containerData).length !== 0 && (
        <>
          {/* for dayTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={data.map((each) => each.dayTemp)}
            fromTop="30%"
            positioning="dayTime"
          />
          {/* for nightTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={data.map((each) => each.nightTemp)}
            fromTop="55%"
            positioning={undefined}
          />
        </>
      )}

      {data.map((day) => (
        <S.EachDay key={day.time}>
          <S.Label>{day.date}</S.Label>
          <S.Description>{day.time}</S.Description>

          <S.Images src={getWeatherIcon(day.weather)} alt="weather" />
          <S.GraphSpace ref={childRef}></S.GraphSpace>
          <S.GraphSpace></S.GraphSpace>
          <S.Images src={moon} alt="weatherNight" />
          {/* <S.Description>wind speed</S.Description> */}
           
          <S.Description>
            
            
             {day.wind}
            
            <S.WindImage src={wind} alt="wind" />
          </S.Description>
          
        </S.EachDay>
      ))}
    </S.MainContainer>
  );
}

export default Forecast;
