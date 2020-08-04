import React from "react";
import styled from "styled-components";

import Loader from "../Loader";

import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.nav`
  border-color: ${(props) => props.theme.palette.initialColor};
  background-color: #fff;
  border-style: solid;
  border-left-width: 0;
  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${DEFAULT_PADDING};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  margin-top: 5px;
  min-height: 40px;
  padding: 0 15px;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.initialColor};
  box-shadow: 0 0 15px ${(props) => props.theme.palette.initialColor};
`;

const NavBar = ({ showLoading = false, sticky = true, children }) => {
  return (
    <Wrapper sticky={sticky}>
      {children}
      {showLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Wrapper>
  );
};

export default NavBar;
