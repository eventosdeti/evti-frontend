import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = ({ children }) => <Wrapper>{children}</Wrapper>;

export default List;
