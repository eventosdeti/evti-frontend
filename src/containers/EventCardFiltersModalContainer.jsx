import React from "react";

import EventCardFiltersModal from "../components/EventCardFiltersModal";
import EventCardFilterSectionsListContainer from "./EventCardFilterSectionsListContainer";
import EventCardApplyFiltersButtonContainer from "./EventCardApplyFiltersButtonContainer";

import { useEventCardsContext } from "../contexts/EventCards";
import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";
import { useKeyPress } from "../hooks/useKeyPress";

const EventCardFiltersModalContainer = () => {
  const { state: eventCardsState } = useEventCardsContext();

  const {
    state: modalSstate,
    dispatch: modalDispatch,
  } = useEventCardFiltersModalContext();

  const isOpen = modalSstate.matches("modalStatus.open");

  const onClose = React.useCallback(() => {
    modalDispatch("CLOSE_MODAL");
  }, [modalDispatch]);

  useKeyPress("Escape", onClose);

  React.useEffect(() => {
    if (isOpen) {
      modalDispatch("SET_LABELS", {
        data: eventCardsState.context.labels,
      });
      modalDispatch("FILTER_BY_LABELS", {
        data: eventCardsState.context.filterCardsLabels,
      });
      modalDispatch("SET_FILTER_PERIOD", {
        data: eventCardsState.context.filterCardsPeriod,
      });
    }
  }, [isOpen, eventCardsState, modalDispatch]);

  return (
    <EventCardFiltersModal
      isOpen={isOpen}
      onClose={onClose}
      filterSectionsList={<EventCardFilterSectionsListContainer />}
      applyFiltersButton={<EventCardApplyFiltersButtonContainer />}
    />
  );
};

export default EventCardFiltersModalContainer;
