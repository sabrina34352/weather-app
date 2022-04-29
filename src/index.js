import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Style from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  <React.StrictMode>
  <>
    <Style.GlobalStyle />
    <App />
  </>
);
