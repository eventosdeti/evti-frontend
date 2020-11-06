import { css } from "styled-components";
import { darken, transparentize } from "polished";
import { pixelToRem } from "../../settings";

export const base = css`
  border-radius: 5px;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  padding: 0.9em 1.2em;
  font-weight: 400;
  white-space: nowrap;
  margin: ${pixelToRem(2)};
  align-self: center;
`;

export const disabled = css`
  ${(props) =>
    props.disabled &&
    `
  opacity: 0.3;
  cursor: not-allowed;
`};
`;

export const size = css`
  ${(props) =>
    props.size === "tiny" &&
    `
  font-size:${pixelToRem(7)}
`};
  ${(props) =>
    props.size === "small" &&
    `
  font-size:${pixelToRem(8)}
`};
  ${(props) =>
    props.size === "medium" &&
    `
  font-size: ${pixelToRem(10)}
`};
  ${(props) =>
    props.size === "large" &&
    `
  font-size: ${pixelToRem(12)}
`};
`;

export const initialFilled = css`
  color: ${(props) => props.theme.palette.primaryTextColor};
  background-color: ${(props) => props.theme.palette.initialColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.initialColor)};
  ${(props) =>
    !props.disabled &&
    `
    &:hover, &:focus {
      background-color: ${darken("0.05", props.theme.palette.initialColor)};
    }
  `}
`;

export const initialOutlined = css`
  color: ${(props) => props.theme.palette.primaryTextColor};
  background-color: transparent;
  border-color: ${(props) =>
    transparentize("0.7", props.theme.palette.initialColor)};
  ${(props) =>
    !props.disabled &&
    `
    &:hover, &:focus {
      background-color: ${transparentize(
        "0.9",
        props.theme.palette.initialColor
      )};
    }
  `}
`;

export const primaryFilled = css`
  color: ${(props) => props.theme.palette.secondaryTextColor};
  background-color: ${(props) => props.theme.palette.primaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.primaryColor)};
  ${(props) =>
    !props.disabled &&
    `
    &:hover, &:focus {
      background-color: ${darken("0.05", props.theme.palette.primaryColor)};
    }
  `}
`;

export const primaryOutlined = css`
  color: ${(props) => props.theme.palette.primaryColor};
  background-color: transparent;
  border-color: ${(props) =>
    transparentize("0.7", props.theme.palette.primaryColor)};
  ${(props) =>
    !props.disabled &&
    `
  &:hover, &:focus {
    background-color: ${transparentize(
      "0.9",
      props.theme.palette.primaryColor
    )};
    
  }
`}
`;

export const secondaryFilled = css`
  color: ${(props) => props.theme.palette.secondaryTextColor};
  background-color: ${(props) => props.theme.palette.secondaryColor};
  border-color: ${(props) =>
    darken("0.05", props.theme.palette.secondaryColor)};
  ${(props) =>
    !props.disabled &&
    `
  &:hover, &:focus {
    background-color: ${darken("0.05", props.theme.palette.secondaryColor)};
  }
`}
`;

export const secondaryOutlined = css`
  color: ${(props) => props.theme.palette.secondaryColor};
  background-color: transparent;
  border-color: ${(props) =>
    transparentize("0.7", props.theme.palette.secondaryColor)};
  ${(props) =>
    !props.disabled &&
    `
&:hover, &:focus {
  background-color: ${transparentize(
    "0.9",
    props.theme.palette.secondaryColor
  )};
  
}
`}
`;

export const tertiaryFilled = css`
  color: ${(props) => props.theme.palette.secondaryTextColor};
  background-color: ${(props) => props.theme.palette.tertiaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.tertiaryColor)};
  ${(props) =>
    !props.disabled &&
    `
    &:hover, &:focus {
      background-color: ${darken("0.05", props.theme.palette.tertiaryColor)};
    }
  `}
`;

export const tertiaryOutlined = css`
  color: ${(props) => props.theme.palette.tertiaryColor};
  background-color: transparent;
  border-color: ${(props) =>
    transparentize("0.7", props.theme.palette.tertiaryColor)};
  ${(props) =>
    !props.disabled &&
    `
  &:hover, &:focus {
    background-color: ${transparentize(
      "0.9",
      props.theme.palette.tertiaryColor
    )};
    
  }
`}
`;
