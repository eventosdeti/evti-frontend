import React from "react";
import styled from "styled-components";
import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.header`
  padding: ${DEFAULT_PADDING};
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.palette.initialColor};
`;

const CardHeader = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default CardHeader;
