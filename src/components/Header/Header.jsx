import React from "react";
import styled from "styled-components";

import { DEFAULT_PADDING, pixelToRem } from "../../settings";

const Title = styled.h1`
  color: inherit;
  font-weight: bold;
  font-size: ${pixelToRem(16)};
  margin: 0;
  line-height: 1.5;
  text-transform: lowercase;
  ${(props) => props.theme.mediaQueries.medium`
    font-size: ${pixelToRem(21)};
  `}
  ${(props) => props.theme.mediaQueries.large`
    font-size: ${pixelToRem(24)};
  `}
`;

const Description = styled.p`
  color: inherit;
  margin: 0;
  font-size: ${pixelToRem(8)};
  ${(props) => props.theme.mediaQueries.medium`
    font-size: ${pixelToRem(9)};
  `}
`;

const Wrapper = styled.header`
  color: #fff;
  min-height: 120px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primaryColor};
  padding: ${DEFAULT_PADDING};
`;

const Header = () => (
  <Wrapper>
    <Title>eventos de t.i</Title>
    <Description> Página dos eventos de tecnologia</Description>
  </Wrapper>
);

export default Header;
