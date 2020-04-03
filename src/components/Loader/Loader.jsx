import React from "react";
import styled from "styled-components";
import { Ripple } from "react-awesome-spinners";

const StyledLoader = styled(Ripple).attrs(props => ({
  color: props.theme.palette.primaryColor
}))``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  text-transform: uppercase;
  font-size: 0.8em;
`;

const Loader = () => (
  <Wrapper>
    <StyledLoader />
    <Text>Carregando</Text>
  </Wrapper>
);

export default Loader;
