import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const base = css`
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
  margin: 0.2em;
  align-self: center;
`;

const disabled = css`
  ${(props) =>
    props.disabled &&
    `
  opacity: 0.3;
  cursor: not-allowed;
`};
`;

const size = css`
  ${(props) =>
    props.size === "tiny" &&
    `
font-size:0.7em;
`};
  ${(props) =>
    props.size === "small" &&
    `
  font-size:0.8em;
`};
  ${(props) =>
    props.size === "medium" &&
    `
  font-size: 1em;
`};
  ${(props) =>
    props.size === "large" &&
    `
  font-size: 1.2em;
`};
`;

const initial = css`
  color: ${(props) => props.theme.palette.primaryTextColor};
  background-color: ${(props) => props.theme.palette.initialColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.initialColor)};
  ${(props) =>
    props.as === "button" &&
    `
  &:hover:enabled,
  &:focus {
    background-color: ${darken("0.05", props.theme.palette.initialColor)};
  }
  `}
  ${(props) =>
    props.as === "a" &&
    `
  &:hover,
  &:focus {
    background-color: ${darken("0.05", props.theme.palette.initialColor)};
  }
  `}
`;

const primary = css`
  color: ${(props) => props.theme.palette.secondaryTextColor};
  background-color: ${(props) => props.theme.palette.primaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.primaryColor)};
  ${(props) =>
    props.as === "button" &&
    `
    &:hover:enabled,
    &:focus {
      background-color: ${darken("0.05", props.theme.palette.primaryColor)};
    }
    `};

  ${(props) =>
    props.as === "a" &&
    `
      &:hover,
      &:focus {
        background-color: ${darken("0.05", props.theme.palette.primaryColor)};
      }
      `};
`;

const tertiary = css`
  color: ${(props) => props.theme.palette.secondaryTextColor};
  background-color: ${(props) => props.theme.palette.tertiaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.tertiaryColor)};
  ${(props) =>
    props.as === "button" &&
    `
  &:hover:enabled,
  &:focus {
    background-color: ${darken("0.05", props.theme.palette.tertiaryColor)};
  }
  `};
  ${(props) =>
    props.as === "a" &&
    `
  &:focus {
    background-color: ${darken("0.05", props.theme.palette.tertiaryColor)};
  }
  `};
`;

const Wrapper = styled.button`
  ${base}
  ${disabled}
  ${size}
  ${(props) => props.palette === "initial" && initial};
  ${(props) => props.palette === "primary" && primary};
  ${(props) => props.palette === "tertiary" && tertiary}
`;

const Button = ({
  children,
  palette = "initial",
  size = "small",
  disabled = false,
  as = "button",
  ...rest
}) => (
  <Wrapper palette={palette} size={size} as={as} disabled={disabled} {...rest}>
    {children}
  </Wrapper>
);

export default React.memo(Button);
