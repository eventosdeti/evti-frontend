import React from "react";
import styled from "styled-components";

import StledTitle from "../Title";

import { DEFAULT_PADDING } from "../../settings";

const Title = styled(StledTitle)`
  color: inherit;
  font-weight: bold;
  margin: 0;
  line-height: 1.5;
  text-transform: lowercase;
  font-size: 2rem;
  ${(props) => props.theme.mediaQueries.medium`
    font-size: 2.5rem;
  `}
`;

const Description = styled.p`
  color: inherit;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.7rem;
  ${(props) => props.theme.mediaQueries.medium`
    font-size: 0.8rem;
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
    <Title size={2}>eventos de t.i</Title>
    <Description> Página dos eventos de tecnologia</Description>
  </Wrapper>
);

export default Header;
