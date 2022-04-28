import Forecast from "./components/Forecast";
import { days } from "./components/days";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const StyledApp = styled.div`
  text-align: center;
  background-color: #0f0e0e;
  width: 800px;
  height: 750px;
  margin: 3em auto;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  @media screen and (max-width: 810px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
const Header = styled.h1`
  font-size: 30px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dddddd;
  }
  @media screen and (max-width: 810px) {
  body {
    background-color: #0f0e0e;
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header>Прогноз на 5 дней</Header>

        <Forecast data={days} />
      </StyledApp>
    </>
  );
}

export default App;
