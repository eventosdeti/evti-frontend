import { css } from "styled-components";

import { GREY_DARKER_COLOR } from "../../settings";

export const wrapperBase = css`
  min-width: 300px;
  width: 600px;
  max-width: 80%;
  border-radius: 5px;
  box-shadow: 0 0 30px ${GREY_DARKER_COLOR};
`;

export const backdropBase = css`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;
