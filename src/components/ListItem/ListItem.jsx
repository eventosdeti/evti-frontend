import React from "react";
import styled from "styled-components";

import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.li`
  border-top: 1px solid ${(props) => props.theme.palette.initialColor};
  border-bottom: 1px solid ${(props) => props.theme.palette.initialColor};
  padding: ${DEFAULT_PADDING};
  margin-top: -1px;
  margin-bottom: -1px;
`;

const ListItem = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default ListItem;
