import Forecast from "./components/Forecast";
import { days } from "./assets/days";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  const temperatureNight = [];
  const temperatureDay = [];
  useEffect(() => {
    for (let i = 0; i < days.length; i++) {
      temperatureDay.push(days[i].dayTemp);
      temperatureNight.push(days[i].nightTemp);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Прогноз на 5 дней</h1>
      </header>
      <Forecast
        data={days}
        temperatureNight={temperatureNight}
        temperatureDay={temperatureDay}
      />
    </div>
  );
}

export default App;
