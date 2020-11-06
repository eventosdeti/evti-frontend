import React from "react";
import styled from "styled-components";

import ListItem from "../ListItem";
import StyledTitle from "../Title";

import { wrapperBase, titleBase } from "./styles";

const Title = styled(StyledTitle)`
  ${titleBase};
`;

const Wrapper = styled(ListItem)`
  ${wrapperBase};
`;

const ListItemDivider = ({ title }) => {
  return (
    <Wrapper>
      <Title as="h3">{title}</Title>
    </Wrapper>
  );
};

export default React.memo(ListItemDivider);
