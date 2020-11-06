import React from "react";
import styled from "styled-components";

import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  max-width: 800px;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
`;

const Container = ({ as = "div", children, className }) => (
  <Wrapper as={as} className={className}>
    {children}
  </Wrapper>
);

export default Container;
