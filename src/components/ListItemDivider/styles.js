import { css } from "styled-components";

export const wrapperBase = css`
  padding-top: 0;
  padding-bottom: 0;
  height: 40px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.palette.initialColor};
`;

export const titleBase = css`
  padding: 0;
  margin: 0;
  font-weight: bold;
`;
