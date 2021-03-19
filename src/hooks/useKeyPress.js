import React from "react";

export const useKeyPress = (targetKey, functionOnKey) => {
  // const [keyPressed, setKeyPressed] = React.useState(false);

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      functionOnKey();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keyup", upHandler);
    };

    // eslint-disable-next-line
  }, []);
};

export default useKeyPress;
