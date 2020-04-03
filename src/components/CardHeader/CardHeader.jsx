import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  margin-bottom: 30px;
`;

const CardHeader = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default CardHeader;
