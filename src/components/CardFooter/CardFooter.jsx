import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  margin-top: 30px;
`;

const CardFooter = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default CardFooter;
