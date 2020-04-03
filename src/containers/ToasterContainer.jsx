import React from "react";
import Toaster from "../components/Toaster";

import { useToasterContext } from "../contexts/Toaster";

const ToasterContainer = () => {
  const { toasts, enqueueToast, unqueueToast } = useToasterContext();
  return (
    <Toaster
      toasts={toasts}
      enqueueToast={enqueueToast}
      unqueueToast={unqueueToast}
    />
  );
};

export default ToasterContainer;
