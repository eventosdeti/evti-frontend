import React from "react";

import Context from "./ToasterContext";

const uuid = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

const ToasterProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const enqueueToast = React.useCallback(
    ({ content, duration }) => {
      const id = uuid();
      setToasts([
        ...toasts,
        {
          id,
          content,
          duration
        }
      ]);
      return id;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const unqueueToast = React.useCallback(
    ({ id }) => {
      setToasts(toasts.filter(toast => toast.id !== id));
    },
    [toasts, setToasts]
  );

  const value = { toasts, enqueueToast, unqueueToast };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ToasterProvider;
