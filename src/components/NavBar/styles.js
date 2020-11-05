import { css } from "styled-components";

import { DEFAULT_PADDING } from "../../settings";

export const wrapperBase = css`
  border-color: ${(props) => props.theme.palette.initialColor};
  background-color: #fff;
  border-style: solid;
  border-left-width: 0;
  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${DEFAULT_PADDING};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const loaderWrapperBase = css`
  position: absolute;
  display: flex;
  top: 100%;
  margin-top: 5px;
  min-height: 40px;
  padding: 0 15px;
  border-radius: 50px;
`;

export const containerBase = css`
  justify-content: center;
`;
