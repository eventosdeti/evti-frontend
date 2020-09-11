import React from "react";
import styled from "styled-components";
import { DEFAULT_PADDING } from "../../settings";

import Title from "../Title";
import StyledCard from "../Card";

const Card = styled(StyledCard)`
  margin-bottom: ${DEFAULT_PADDING};
`;

const NoEventsTitle = styled(Title).attrs((props) => ({
  size: 2,
  tag: "p",
}))`
  display: flex;
  justify-content: center;
`;

const EventsFilteredTitle = styled(Title)`
  display: flex;
  justify-content: center;
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
        <Card>
          <NoEventsTitle>Não há eventos</NoEventsTitle>
        </Card>
      ) : (
        eventCardRender && cards.map(eventCardRender)
      )}
    </Wrapper>
  );
};

export default EventCards;
