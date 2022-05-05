import Graph from "../Graph";
import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";
// import moon from "../../assets/moonReal.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import clouds from "../../assets/clouds.svg";
import cloudwithrain from "../../assets/cloudwithrain.svg";

type Props = {
  data: {
    date: string;
    time: string;
    weather: string;
    weatherNight: string;
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
        <S.EachDay key={bud.time}>
          <S.BigFont>{bud.date}</S.BigFont>
          <S.SmallFont>{bud.time}</S.SmallFont>
          {bud.weather === "Clouds" && <S.Images src={clouds} alt="weather" />}
          {bud.weather === "Clear" && <S.Images src={sun} alt="weather" />}
          {bud.weather === "Rain" && (
            <S.Images src={cloudwithrain} alt="weather" />
          )}

          {/* <S.SmallFont>{bud.weather}</S.SmallFont> */}
          <S.GraphSpace ref={childRef}></S.GraphSpace>
          <S.GraphSpace></S.GraphSpace>
          <S.Images src={moon} alt="weatherNight" />
          <S.SmallFont>{bud.wind}</S.SmallFont>
        </S.EachDay>
      ))}
    </S.MainContainer>
  );
}

export default Forecast;
