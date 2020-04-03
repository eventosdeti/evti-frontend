import React from "react";
import styled from "styled-components";

import { DEFAULT_PADDING, GREY_DARKER_COLOR } from "../../settings";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${DEFAULT_PADDING};
  background-color: ${GREY_DARKER_COLOR};
  color: ${(props) => props.theme.palette.secondaryTextColor};
  min-height: 80px;
`;

const Footer = () => (
  <Wrapper>
    <div>2020</div>
    <p>github.com/Eventos-de-TI</p>
  </Wrapper>
);

export default Footer;
