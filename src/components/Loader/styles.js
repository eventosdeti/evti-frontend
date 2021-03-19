import { css } from "styled-components";

import { pixelToRem } from "../../settings";

export const orientation = css`
  ${(props) => {
    if (props.orientation === "vertical") {
      return `
      flex-direction: column;
     `;
    }
    return `
    flex-direction: row;
   `;
  }}
`;

export const SVGorientation = css`
  ${(props) => {
    if (props.orientation === "horizontal") {
      return `
      margin-right: 5px;
     `;
    }
  }}
`;

export const wrapperBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 40px;
  padding: 0 15px;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.initialColor};
  box-shadow: 0 0 15px ${(props) => props.theme.palette.initialColor};
`;

export const svgBase = css`
  fill: ${(props) => props.color || props.theme.palette.primaryColor};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const titleBase = css`
  text-transform: uppercase;
  font-size: ${pixelToRem(7)};
`;
