import React from "react";
import styled from "styled-components";

import ListItem from "../ListItem";
import StyledTitle from "../Title";

const Title = styled(StyledTitle)`
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const Wrapper = styled(ListItem)`
  background-color: #fc0;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.palette.initialColor};
  padding-top: 0;
  padding-bottom: 0;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ListItemDivider = ({ title }) => {
  return (
    <Wrapper>
      <Title size={3}>{title}</Title>
    </Wrapper>
  );
};

export default React.memo(ListItemDivider);
