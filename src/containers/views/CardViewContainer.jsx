import React from "react";
import { useParams } from "react-router-dom";

import View from "../../components/View";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";

import EventCardContainer from "../EventCardContainer";

import { useEventCardsContext } from "../../contexts/EventCards";

const CardViewContainer = () => {
  const { shortLink } = useParams();

  const { state: eventCardsSstate } = useEventCardsContext();
  const isLoadingCards = eventCardsSstate.matches("loadCards.loading");

  const card = eventCardsSstate.context.allCards.find(
    (card) => card.shortLink === shortLink
  );

  return (
    <View
      navBar={
        <NavBar showLoading={isLoadingCards}>
          <Button>Ir para a página inicial</Button>
        </NavBar>
      }
    >
      {card && <EventCardContainer showLabels={false} {...card} />}
    </View>
  );
};

export default CardViewContainer;
