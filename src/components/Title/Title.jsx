import React from "react";
import styled from "styled-components";

import { wrapperBase, size } from "./styles";

const Wrapper = styled.h1`
  ${wrapperBase};
  ${size};
`;

const Title = ({ size = 1, as = "h1", children, className }) => (
  <Wrapper size={size} as={as} className={className}>
    {children}
  </Wrapper>
);

export default Title;
