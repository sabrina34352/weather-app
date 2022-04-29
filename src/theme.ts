import styled, { createGlobalStyle } from "styled-components";
export const StyledApp = styled.div`
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
export const Header = styled.h1`
  font-size: 30px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
       background-color: #dddddd;
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
@media screen and (max-width: 810px) {
  body {
    background-color: #0f0e0e;
  }
`;
