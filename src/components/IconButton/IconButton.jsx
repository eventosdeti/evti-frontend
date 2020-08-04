import React from "react";
import styled from "styled-components";
import StyledButton from "../Button";

const Button = styled(StyledButton)`
  display: flex;
  align-items: center;
  padding: 0em;
  justify-content: center;
  svg {
    width: 3em;
    height: 3em;
    box-sizing: border-box;
    padding: 5px;
  }
`;

const IconButton = ({ icon, children, ...rest }) => {
  return <Button {...rest}>{children || icon}</Button>;
};

export default IconButton;
