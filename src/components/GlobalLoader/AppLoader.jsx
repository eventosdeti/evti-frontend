import React from "react";
import styled from "styled-components";

import Loader from "../Loader";

const Wrapper = styled(Loader)`
  position: fixed;
  background-color: ${(props) => props.theme.palette.initialColor};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

const GlobalLoader = () => <Wrapper />;

export default GlobalLoader;
