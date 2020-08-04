import React from "react";
import styled from "styled-components";
import CardHeader from "../CardHeader";

const Wrapper = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalHeader = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default ModalHeader;
