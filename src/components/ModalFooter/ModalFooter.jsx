import React from "react";
import styled from "styled-components";
import CardFooter from "../CardFooter";

const Wrapper = styled(CardFooter)``;

const ModalFooter = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default ModalFooter;
