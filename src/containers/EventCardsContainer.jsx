import React from "react";

import EventCards from "../components/EventCards";

import EventCardContainer from "./EventCardContainer";

import ChangeViewButtonsContainer from "./ChangeViewButtonsContainer";
import { useCardsContext } from "../contexts/Cards";

import useFetch from "../hooks/useFetch";

const { REACT_APP_TRELLO_BOARD_JSON_URI } = process.env;

const eventCardRender = (card) => (
  <EventCardContainer key={card.id} {...card} />
);

const EventCardsContainer = () => {
  const { data, isFetching, fetchData } = useFetch(
    REACT_APP_TRELLO_BOARD_JSON_URI
  );

  const {
    cards,
    setAllCards,
    isLoadingCards,
    setIsLoadingCards,
  } = useCardsContext();

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  React.useEffect(() => {
    setIsLoadingCards(isFetching);
  }, [isFetching, setIsLoadingCards]);

  React.useEffect(() => {
    if (data.result) {
      setAllCards(data.result.cards);
    }
  }, [data.result, setAllCards]);

  return (
    <EventCards
      cards={cards}
      showLoading={isLoadingCards}
      changeViewButtons={<ChangeViewButtonsContainer />}
      eventCardRender={eventCardRender}
    />
  );
};

export default EventCardsContainer;
