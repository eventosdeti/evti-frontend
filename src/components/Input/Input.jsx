import React from "react";
import styled from "styled-components";

import { wrapperBase, inputElBase, isValid } from "./styles";

const Wrapper = styled.div`
  ${wrapperBase}
  ${isValid}
`;

const InputEl = styled.input`
  ${inputElBase}
`;

const Input = React.forwardRef(({ isValid, className, ...rest }, ref) => {
  return (
    <Wrapper className={className}>
      <InputEl {...rest} ref={ref} />
    </Wrapper>
  );
});

export default Input;
