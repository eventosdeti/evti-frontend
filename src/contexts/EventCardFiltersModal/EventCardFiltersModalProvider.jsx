import React from "react";

import Context from "./EventCardFiltersModalContext";

import { useEventCardFiltersModalMachine } from "./machines/eventCardFiltersModalMachine";

const EventCardFiltersModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);
  const [state, dispatch] = useEventCardFiltersModalMachine();

  const value = {
    isOpen,
    setIsOpen,
    isEdited,
    setIsEdited,
    state,
    dispatch,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default EventCardFiltersModalProvider;
