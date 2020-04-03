import { css } from "styled-components";
import { darken } from "polished";

export const colorMixin = ({ color, bgColor }) => css`
  color: ${color};
  background-color: ${bgColor};
  border-color: ${darken("0.05", bgColor)};
  &:hover {
    background-color: ${darken("0.01", bgColor)};
  }
`;
