import React from "react";
import styled from "styled-components";
import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.header`
  padding: ${DEFAULT_PADDING};
  border-top: 1px solid ${(props) => props.theme.palette.initialColor};
`;

const CardFooter = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default CardFooter;
