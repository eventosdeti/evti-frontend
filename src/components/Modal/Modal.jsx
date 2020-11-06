import React from "react";
import styled from "styled-components";

import Card from "../Card";
import ModalHeader from "../ModalHeader";

import ModalTitle from "../ModalTitle";
import ModalCloseButton from "../ModalCloseButton";

import { wrapperBase, backdropBase } from "./styles";

const ModalBackdrop = styled.div`
  ${backdropBase};
`;

const Wrapper = styled(Card).attrs((props) => ({
  isCollapsed: true,
}))`
  ${wrapperBase};
`;

const Modal = ({ title, footer, children, onClose }) => {
  return (
    <ModalBackdrop>
      <Wrapper>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        {children && <div>{children}</div>}
        {footer}
      </Wrapper>
    </ModalBackdrop>
  );
};

export default Modal;
