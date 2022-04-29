import styled from "styled-components";
interface PositionProps {
  top: string;
}

export const GraphImg = styled.svg<PositionProps>`
  position: absolute;
  height: 140px;
  width: 100%;
  top: ${(props) => props.top};
  @media (max-width: 810px) {
    left: 0;
    width: 100%;
  }
`;
export const Text = styled.text`
  font-size: 16px;
  fill: white;
  text-anchor: middle;
`;
export const Circle = styled.circle`
  stroke: white;
  stroke-width: 1;
  fill: black;
  r: 4px;
`;
export const Line = styled.line`
  stroke: white;
`;
