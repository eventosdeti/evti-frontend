import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

import { DEFAULT_PADDING } from "../../settings";

const Wrapper = styled.div``;
const Main = styled.main`
  min-height: 900px;
  margin: 0 auto;
  padding: ${DEFAULT_PADDING} 0;
  max-width: 960px;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
`;

const View = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default View;
