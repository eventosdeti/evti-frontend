import React from "react";
import { Close } from "@styled-icons/evaicons-solid";

import IconButton from "../IconButton";

const ModalCloseButton = ({ onClick }) => {
  return (
    <IconButton palette="initial" size="tiny" onClick={onClick}>
      <Close />
    </IconButton>
  );
};

export default ModalCloseButton;
