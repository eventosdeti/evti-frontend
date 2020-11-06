import React from "react";
import styled from "styled-components";

import { pixelToRem } from "../../settings";

import NoEventsCard from "../NoEventsCard";

const EventsFilteredTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: ${pixelToRem(7)};
  text-transform: uppercase;
  ${(props) => props.theme.mediaQueries.medium`
    font-size: ${pixelToRem(8)};
  `}
`;

const ClearFilters = styled.span`
  color: ${(props) => props.theme.palette.primaryColor};
  cursor: pointer;
`;

const Wrapper = styled.section`
  position: relative;
  opacity: ${(props) => (props.isLoadingCards && "0.5") || "1"};
`;

const EventCards = ({
  cards = [],
  isLoadingCards = true,
  isFiltered = false,
  clearFilters,
  eventCardRender,
}) => {
  return (
    <Wrapper isLoadingCards={isLoadingCards}>
      {isFiltered && (
        <EventsFilteredTitle size={3}>
          Os eventos estão filtrados
          <ClearFilters onClick={clearFilters}>(limpar)</ClearFilters>
        </EventsFilteredTitle>
      )}
      {cards.length === 0 && !isLoadingCards ? (
        <NoEventsCard
          title="Não há eventos"
          description="Não há eventos para os filtros aplicados"
        />
      ) : (
        eventCardRender && cards.map(eventCardRender)
      )}
    </Wrapper>
  );
};

export default EventCards;
