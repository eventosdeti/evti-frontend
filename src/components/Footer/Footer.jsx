import React from "react";
import styled from "styled-components";

import { DEFAULT_PADDING, GREY_DARKER_COLOR, pixelToRem } from "../../settings";

import sails from "../../assets/images/sails.svg";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${DEFAULT_PADDING};
  background-color: ${GREY_DARKER_COLOR};
  color: ${(props) => props.theme.palette.secondaryTextColor};
  min-height: 80px;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
  font-size: ${pixelToRem(10)};
  > a {
    color: #fff;
  }
`;

const Footer = () => (
  <Wrapper>
    <Paragraph>eventosdeti</Paragraph>
    <Paragraph>
      <a href="https://linktr.ee/eventosdeti">linktr.ee/eventosdeti</a>
    </Paragraph>
    <Paragraph>
      Made in Ceará <img src={sails} alt="sails" widt="20" height="20" />
    </Paragraph>
  </Wrapper>
);

export default Footer;
