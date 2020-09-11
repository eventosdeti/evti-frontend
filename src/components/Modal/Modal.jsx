import React from "react";
import styled from "styled-components";

import StyledCard from "../Card";
import ModalHeader from "../ModalHeader";

import ModalTitle from "../ModalTitle";
import ModalCloseButton from "../ModalCloseButton";

import { GREY_DARKER_COLOR } from "../../settings";

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const Card = styled(StyledCard).attrs((props) => ({
  isCollapsed: true,
}))`
  min-width: 300px;
  width: 600px;
  max-width: 80%;
  border-radius: 5px;
  box-shadow: 0 0 30px ${GREY_DARKER_COLOR};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

const Modal = ({ title, footer, children, onClose, EscPress }) => {
  return (
    <>
      <ModalBackdrop onClick={onClose} />
      <Card>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        {children && <div>{children}</div>}
        {footer}
      </Card>
    </>
  );
};

export default Modal;
