import React from "react";
import styled from "styled-components";
import { darken } from "polished";

import StledTitle from "../Title";

import { DEFAULT_PADDING, GREY_LIGHTER_COLOR } from "../../settings";

const Title = styled(StledTitle)`
  color: ${props => props.theme.palette.secondaryTextColor};
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  color: ${props => props.theme.palette.initialColor};
  margin: 0;
`;

const Wrapper = styled.header`
  min-height: 120px;
  align-items: center;
  display: flex;
  background-color: ${props => props.theme.palette.primaryColor};
  border-bottom: 1px solid ${props => darken(0.05, GREY_LIGHTER_COLOR)};
  justify-content: space-between;
  padding: 0 ${DEFAULT_PADDING};
`;

const Header = () => (
  <Wrapper>
    <div>
      <Title title="Eventos de T.I" size={2} />
      <Description> Página dos eventos de tecnologia do Ceará</Description>
    </div>
  </Wrapper>
);

export default Header;
