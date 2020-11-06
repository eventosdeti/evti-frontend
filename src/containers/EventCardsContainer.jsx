import React from "react";

import EventCards from "../components/EventCards";
import EventCardContainer from "./EventCardContainer";
import { useEventCardsContext } from "../contexts/EventCards";

const eventCardRender = (card) => (
  <EventCardContainer key={card.id} {...card} />
);

const EventCardsContainer = () => {
  const { state, dispatch } = useEventCardsContext();

  const isLoadingCards = state.matches("loadCards.loading");
  const isFiltered = state.matches("filterLabels.filtered");
  const cards = state.context.cards;

  const clearFilters = () => {
    dispatch("CLEAR_FILTER_LABELS");
  };

  return (
    <EventCards
      cards={cards}
      isLoadingCards={isLoadingCards}
      isFiltered={isFiltered}
      clearFilters={clearFilters}
      eventCardRender={eventCardRender}
    />
  );
};

export default EventCardsContainer;
