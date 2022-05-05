import Forecast from "./components/Forecast";
// import { days } from "./components/days";
import React, { useEffect, useState } from "react";
import * as Style from "./theme";

function App() {
  // const WindSpeed = [];
  const [Days, setDays] = useState([]);
  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          const eachDay = {
            date: null,
            time: null,
            wind: null,
            dayTemp: null,
            nightTemp: null,
            weather: null,
          };
          eachDay.date = data.list[i].dt_txt.slice(5, 10);
          eachDay.time = data.list[i].dt_txt.slice(11, 16);
          eachDay.wind = data.list[i].wind.speed;
          eachDay.dayTemp = data.list[i].main.temp_max;
          eachDay.nightTemp = data.list[i].main.temp_min;
          eachDay.weather = data.list[i].weather[0].main;
          setDays((Days) => [...Days, eachDay]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Style.GlobalStyle />
      <Style.StyledApp>
        <Style.Header>Прогноз на 5 дней</Style.Header>

        <Forecast data={Days} />
      </Style.StyledApp>
    </>
  );
}

export default App;