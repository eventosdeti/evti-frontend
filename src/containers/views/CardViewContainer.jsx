import React from "react";
import { useParams } from "react-router-dom";

import NoEventsCard from "../../components/NoEventsCard";
import View from "../../components/View";

import NavBarContainer from "../NavBarContainer";
import EventCardContainer from "../EventCardContainer";

import { useEventCardsContext } from "../../contexts/EventCards";

const CardViewContainer = () => {
  const { shortLink } = useParams();
  const { state: cardsState } = useEventCardsContext();

  const card = cardsState.context.allCards.find(
    (card) =>
      (card.shortLink || "").toLowerCase() === (shortLink || "").toLowerCase()
  );

  const isLoadingCards = cardsState.matches("loadCards.loading");

  return (
    <View navBar={<NavBarContainer />}>
      {!isLoadingCards &&
        ((card && <EventCardContainer {...card} />) || <NoEventsCard />)}
    </View>
  );
};

export default CardViewContainer;
