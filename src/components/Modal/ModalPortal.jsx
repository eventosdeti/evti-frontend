import React from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal";
import usePortal from "../../hooks/usePortal";

const ModalPortal = ({ isOpen = true, ...rest }) => {
  const { container } = usePortal("modal-portal");
  return ReactDOM.createPortal(
    <>{isOpen && <Modal {...rest} />}</>,
    container.current
  );
};

export default ModalPortal;
