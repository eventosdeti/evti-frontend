import React from "react";
import styled from "styled-components";
import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.main`
  padding: ${DEFAULT_PADDING};
`;

const CardBody = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default React.memo(CardBody);
