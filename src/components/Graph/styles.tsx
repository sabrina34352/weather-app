import styled from "styled-components";
import { theme } from "../../theme";
interface PositionProps {
  top: string;
}

export const GraphImg = styled.svg<PositionProps>`
  position: absolute;
  height: ${theme.sizes.containers.medium};
  width: ${theme.sizes.containers.full};
  top: ${(props) => props.top};
  @media (max-width: ${theme.sizes.resolutions.tablet}) {
    left: ${theme.sizes.space.none};
  }
`;
export const Text = styled.text`
  font-size: ${theme.sizes.font.medium};
  fill: ${theme.colors.primary};
  text-anchor: middle;
`;
export const Circle = styled.circle`
  stroke: ${theme.colors.primary};
  stroke-width: 1;
  fill: ${theme.colors.primary};
  r: ${theme.sizes.circleRadius};
`;
export const Line = styled.line`
  stroke: ${theme.colors.primary};
`;
