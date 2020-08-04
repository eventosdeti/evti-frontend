import React from "react";

import EventCards from "../components/EventCards";
import EventCardContainer from "./EventCardContainer";
import { useEventCardsContext } from "../contexts/EventCards";

const eventCardRender = (card) => (
  <EventCardContainer key={card.id} {...card} />
);

const EventCardsContainer = () => {
  const {
    state: eventCardsSstate,
    dispatch: eventsCardDispatch,
  } = useEventCardsContext();

  const isLoadingCards = eventCardsSstate.matches("loadCards.loading");
  const isFiltered = eventCardsSstate.matches("filterCardsLabels.filtered");

  const clearFilters = () => {
    eventsCardDispatch("CLEAR_FILTER_CARD_LABELS");
  };

  return (
    <>
      <EventCards
        cards={eventCardsSstate.context.cards}
        isLoadingCards={isLoadingCards}
        isFiltered={isFiltered}
        clearFilters={clearFilters}
        eventCardRender={eventCardRender}
      />
    </>
  );
};

export default EventCardsContainer;
