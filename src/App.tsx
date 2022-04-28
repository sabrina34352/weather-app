import Forecast from "./components/Forecast";
import { days } from "./components/days";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Прогноз на 5 дней</h1>
      </header>

      <Forecast data={days} />
    </div>
  );
}

export default App;
