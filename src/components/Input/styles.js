import { css } from "styled-components";

import { DEFAULT_PADDING } from "../../settings";

export const wrapperBase = css`
  border-width: 1px;
  border-style: solid;
  display: flex;
  height: 40px;
  border-radius: 5px;
`;

export const inputElBase = css`
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  border: 0;
  margin: 0;
  padding: ${DEFAULT_PADDING};
  background-color: inherit;
  font-size: inherit;
  color: inherit;
`;

export const isValid = css`
  border-color: ${(props) => props.theme.palette.initialColor};
`;
