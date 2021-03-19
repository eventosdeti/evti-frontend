import React from "react";
import styled from "styled-components";
import Title from "../Title";

const Wrapper = styled(Title).attrs(() => ({
  forwardedAs: "h3",
}))`
  margin: 0;
`;

const ModalTitle = (props) => <Wrapper size={3} {...props} />;

export default ModalTitle;
