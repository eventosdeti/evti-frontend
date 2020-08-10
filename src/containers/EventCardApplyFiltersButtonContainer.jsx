import React from "react";

import Button from "../components/Button";

import { useEventCardsContext } from "../contexts/EventCards";
import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";

import { useToasterContext } from "../contexts/Toaster";

const EventCardApplyFiltersButtonContainer = () => {
  const {
    state: eventCardsState,
    dispatch: eventCardsDispatch,
  } = useEventCardsContext();

  const {
    state: modalState,
    dispatch: modalDispatch,
  } = useEventCardFiltersModalContext();

  const { enqueueToast } = useToasterContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const disabled = eventCardsState.matches("loadCards.loading");

  const onApplyFilters = () => {
    scrollToTop();
    eventCardsDispatch("FILTER_CARDS_BY_PERIOD", {
      data: modalState.context.filterPeriod,
    });
    eventCardsDispatch("FILTER_CARDS_BY_LABELS", {
      data: modalState.context.filterLabels,
    });
    enqueueToast({
      content: "Aplicando filtros",
    });
    modalDispatch("CLOSE_MODAL");
  };

  return (
    <Button disabled={disabled} onClick={onApplyFilters}>
      Aplicar filtros
    </Button>
  );
};

export default EventCardApplyFiltersButtonContainer;
