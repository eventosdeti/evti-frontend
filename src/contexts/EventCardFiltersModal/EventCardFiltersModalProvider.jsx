import React from "react";

import Context from "./EventCardFiltersModalContext";

import { useEventCardFiltersModalMachine } from "./machines/eventCardFiltersModalMachine";

const EventCardFiltersModalProvider = ({ children }) => {
  const [state, dispatch] = useEventCardFiltersModalMachine();

  const value = {
    state,
    dispatch,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default EventCardFiltersModalProvider;
