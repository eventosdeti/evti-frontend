import React from "react";

import EventCardFiltersModal from "../components/EventCardFiltersModal";

import { useEventCardsContext } from "../contexts/EventCards";
import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";
import { useKeyPress } from "../hooks/useKeyPress";
import { useToasterContext } from "../contexts/Toaster";

const EventCardFiltersModalContainer = () => {
  const { state: cardsState, dispatch: cardsDispatch } = useEventCardsContext();
  const {
    state: modalState,
    dispatch: modalDispatch,
  } = useEventCardFiltersModalContext();

  const { enqueueToast } = useToasterContext();

  const isOpen = modalState.matches("modalStatus.open");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClose = () => {
    modalDispatch("CLOSE_MODAL");
  };

  const onSelectAllPeriods = () => {
    modalDispatch("SET_FILTER_PERIOD", { data: "all" });
  };

  const onSelectDayPeriod = () => {
    modalDispatch("SET_FILTER_PERIOD", { data: "day" });
  };

  const onSelectMonthPeriod = () => {
    modalDispatch("SET_FILTER_PERIOD", { data: "month" });
  };

  const onSelectLabel = (label) => {
    modalDispatch("SET_FILTER_LABELS", {
      data: [...modalState.context.filterLabels, label],
    });
  };

  const onDeselectLabel = (label) => {
    modalDispatch("SET_FILTER_LABELS", {
      data: modalState.context.filterLabels.filter(
        (selected) => selected.id !== label.id
      ),
    });
  };

  const onApplyFilters = () => {
    scrollToTop();
    cardsDispatch("SET_FILTER_PERIOD", {
      data: modalState.context.filterPeriod,
    });
    cardsDispatch("SET_FILTER_LABELS", {
      data: modalState.context.filterLabels,
    });
    enqueueToast({
      content: "Aplicando filtros",
    });
    modalDispatch("CLOSE_MODAL");
  };

  useKeyPress("Escape", onClose);

  React.useEffect(() => {
    if (isOpen) {
      modalDispatch("SET_LABELS", {
        data: cardsState.context.labels,
      });
      modalDispatch("SET_FILTER_LABELS", {
        data: cardsState.context.filterLabels,
      });
      modalDispatch("SET_FILTER_PERIOD", {
        data: cardsState.context.filterPeriod,
      });
    }
  }, [isOpen, cardsState, modalDispatch]);

  return (
    <EventCardFiltersModal
      labels={modalState.context.labels}
      isOpen={isOpen}
      onClose={onClose}
      onApplyFilters={onApplyFilters}
      selectedLabels={modalState.context.filterLabels}
      selectedLabelsKeyed={modalState.context.filterLabelsKeyed}
      selectedPeriod={modalState.context.filterPeriod}
      onSelectAllPeriods={onSelectAllPeriods}
      onSelectMonthPeriod={onSelectMonthPeriod}
      onSelectDayPeriod={onSelectDayPeriod}
      onSelectLabel={onSelectLabel}
      onDeselectLabel={onDeselectLabel}
    />
  );
};

export default EventCardFiltersModalContainer;
