import Forecast from "./components/Forecast";
import dataAPI from "./components/api/weatherAPI";
import React, { useEffect, useState } from "react";
import * as Style from "./theme";

function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    dataAPI().then((data) => {
      setDays(data);
    });
  }, []);
  return (
    <>
      <Style.GlobalStyle />
      <Style.StyledApp>
        <Style.Header>Прогноз на целый день </Style.Header>
        <Forecast data={days} />
      </Style.StyledApp>
    </>
  );
}

export default App;
