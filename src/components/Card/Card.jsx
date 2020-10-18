import React from "react";
import styled from "styled-components";

import { wrapperBase, initial, primary, tertiary } from "./styles";

const Wrapper = styled.section`
  ${wrapperBase};
  ${(props) => props.palette === "initial" && initial};
  ${(props) => props.palette === "primary" && primary};
  ${(props) => props.palette === "tertiary" && tertiary};
`;

const Card = ({
  palette = "initial",
  padding = false,
  children,
  className,
}) => (
  <Wrapper className={className} palette={palette} padding={padding}>
    {children}
  </Wrapper>
);

export default Card;
