import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";

import { pixelToRem } from "../../settings";
const CloseButton = styled(Button)``;

const Wrapper = styled(Card)`
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin: 5px;
  font-size: ${pixelToRem(9)};
`;

const Toast = ({ id, content, duration = 3000, unqueueToast }) => {
  const onClick = () => {
    if (unqueueToast) {
      unqueueToast(id);
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => unqueueToast(id), duration);
    return () => clearTimeout(timeout);
  }, [duration, id, unqueueToast]);

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
