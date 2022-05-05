import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const StyledApp = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.background};
  width: ${theme.sizes.containers.big};
  height: ${theme.sizes.containers.big};
  margin: ${theme.sizes.space.mediumNoSides};
  border-radius: ${theme.sizes.borderRadius};
  color: ${theme.colors.primary};
  @media screen and (max-width: ${theme.sizes.resolutions.tablet}) {
    width: ${theme.sizes.containers.full};
    height: ${theme.sizes.containers.full};
    margin: ${theme.sizes.space.none};
  }
`;
export const Header = styled.h1`
  font-size: ${theme.sizes.font.big};
`;

export const GlobalStyle = createGlobalStyle`
  body {
       background-color: ${theme.colors.primary};
    margin: ${theme.sizes.space.none};
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
@media screen and (max-width: ${theme.sizes.resolutions.tablet}) {
  body {
    background-color: ${theme.colors.background};
  }
`;
