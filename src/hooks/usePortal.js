import { useRef, useEffect } from "react";

const usePortal = (id) => {
  const container = useRef(
    document.querySelector(`#${id}`) || document.createElement("div")
  );

  useEffect(() => {
    container.current.id = id;
    const alreadyInBody = !!document.querySelector(`#${id}`);
    if (!alreadyInBody) {
      document.body.appendChild(container.current);
    }
    return () => container.current && container.current.remove();
  }, []);

  return {
    container,
  };
};

export default usePortal;
