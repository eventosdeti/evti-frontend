import React from "react";

import Context from "./EventCardsContext";

import { useEventCardsMachine } from "./machines/eventCardsMachine";

const EventCardsProvider = ({ children }) => {
  const [state, dispatch] = useEventCardsMachine();

  React.useEffect(() => {
    dispatch("START_FETCH_CARDS");
  }, [dispatch]);

  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default EventCardsProvider;
