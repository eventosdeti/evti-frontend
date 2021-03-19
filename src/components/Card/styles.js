import { css } from "styled-components";
import { darken } from "polished";
import { DEFAULT_PADDING } from "../../settings";

export const wrapperBase = css`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: ${(props) => (props.padding && DEFAULT_PADDING) || "0"};
`;

export const initial = css`
  background-color: #fff;
  border-color: ${(props) => props.theme.palette.initialColor};
  color: ${(props) => props.theme.palette.primaryTextColor};
`;

export const primary = css`
  background-color: ${(props) => props.theme.palette.primaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.primaryColor)};
`;

export const tertiary = css`
  background-color: ${(props) => props.theme.palette.tertiaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.tertiaryColor)};
  color: ${(props) => props.theme.palette.secondaryTextColor};
`;
