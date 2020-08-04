import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { DEFAULT_PADDING } from "../../settings";

const initial = css`
  background-color: #fff;
  border-color: ${(props) => props.theme.palette.initialColor};
  color: ${(props) => props.theme.palette.primaryTextColor};
`;

const primary = css`
  background-color: ${(props) => props.theme.palette.primaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.primaryColor)};
`;

const tertiary = css`
  background-color: ${(props) => props.theme.palette.tertiaryColor};
  border-color: ${(props) => darken("0.05", props.theme.palette.tertiaryColor)};
  color: ${(props) => props.theme.palette.secondaryTextColor};
`;

const Wrapper = styled.section`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: ${(props) => (props.padding && DEFAULT_PADDING) || "0"};
  ${(props) => props.palette === "initial" && initial};
  ${(props) => props.palette === "primary" && primary};
  ${(props) => props.palette === "tertiary" && tertiary};
`;

const Card = ({
  palette = "initial",
  padding = false,
  children,
  className,
}) => (
  <Wrapper className={className} palette={palette} padding={padding}>
    {children}
  </Wrapper>
);

export default Card;
