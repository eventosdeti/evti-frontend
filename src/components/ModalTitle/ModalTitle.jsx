import React from "react";
import styled from "styled-components";
import Title from "../Title";

const Wrapper = styled(Title)`
  margin: 0;
`;

const ModalTitle = (props) => <Wrapper size={2} tag="h2" {...props} />;

export default ModalTitle;
