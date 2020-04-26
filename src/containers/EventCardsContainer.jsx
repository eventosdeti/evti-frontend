import React from "react";

import EventCards from "../components/EventCards";

import EventCardContainer from "./EventCardContainer";

import ChangeViewButtonsContainer from "./ChangeViewButtonsContainer";
import { useCardsContext } from "../contexts/Cards";

const eventCardRender = (card) => (
  <EventCardContainer key={card.id} {...card} />
);

const EventCardsContainer = () => {
  const { dateFilteredCards, isLoadingCards } = useCardsContext();

  return (
    <EventCards
      cards={dateFilteredCards}
      showLoading={isLoadingCards}
      changeViewButtons={<ChangeViewButtonsContainer />}
      eventCardRender={eventCardRender}
    />
  );
};

export default EventCardsContainer;
