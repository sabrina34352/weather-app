import Forecast from "./components/Forecast";
import { days } from "./components/days";
import React from "react";
import * as Style from "./style";

function App() {
  return (
    <>
      <Style.GlobalStyle />
      <Style.StyledApp>
        <Style.Header>Прогноз на 5 дней</Style.Header>

        <Forecast data={days} />
      </Style.StyledApp>
    </>
  );
}

export default App;
