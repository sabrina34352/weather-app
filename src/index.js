import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Style from "./style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Style.GlobalStyle />
    <App />
  </>
);
