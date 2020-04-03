import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";

const CloseButton = styled(Button)``;

const Wrapper = styled(Card)`
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const Toast = ({ id, content, duration = 5000, unqueueToast }) => {
  const onClick = React.useCallback(() => {
    if (unqueueToast) {
      unqueueToast({ id });
    }
  }, [id, unqueueToast]);

  React.useEffect(() => {
    const timeout = setTimeout(() => unqueueToast({ id }), duration);
    return () => clearTimeout(timeout);
  }, [id, duration, unqueueToast]);

  return (
    <Wrapper palette="tertiary">
      <div>{content}</div>
      <CloseButton size="tiny" palette="tertiary" onClick={onClick}>
        Fechar
      </CloseButton>
    </Wrapper>
  );
};

export default Toast;
