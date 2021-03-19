import React from "react";
import styled from "styled-components";

import StyledButton from "../Button";

import { styles } from "../Input";

const Wrapper = styled.div`
  ${styles.wrapperBase}
  ${styles.isValid}
`;

const InputEl = styled.input`
  ${styles.inputElBase}
`;

const Button = styled(StyledButton)`
  margin: -1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  align-self: stretch;
  align-items: center;
`;

const InputWithButton = React.forwardRef(
  ({ buttonTitle, onClickButton, className, ...rest }, ref) => {
    return (
      <Wrapper className={className}>
        <Button onClick={onClickButton}>{buttonTitle}</Button>
        <InputEl {...rest} ref={ref} />
      </Wrapper>
    );
  }
);

export default InputWithButton;
