import React from "react";
import styled from "styled-components";

import Loader from "../Loader";
import StyledContainer from "../Container";

import { wrapperBase, loaderWrapperBase, containerBase } from "./styles";

const Wrapper = styled.nav`
  ${wrapperBase};
`;

const LoaderWrapper = styled.div`
  ${loaderWrapperBase};
`;

const Container = styled(StyledContainer)`
  ${containerBase};
`;

const NavBar = ({ showLoading = false, sticky = true, children }) => {
  return (
    <Wrapper sticky={sticky}>
      <Container>{children}</Container>
      {showLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Wrapper>
  );
};

export default NavBar;
