import React from "react";
import styled from "styled-components";

import Loader from "../Loader";
import Title from "../Title";

const NoEvents = styled(Title).attrs(props => ({
  size: 2,
  tag: "p"
}))`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div``;

const EventCards = ({
  cards = [],
  showLoading = true,
  changeViewButtons,
  eventCardRender
}) => {
  return (
    <Wrapper>
      {changeViewButtons}
      {showLoading ? (
        <Loader />
      ) : (
        <>
          {cards.length > 0 ? (
            <>{eventCardRender && cards.map(eventCardRender)}</>
          ) : (
            <NoEvents title="Não há eventos" />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default EventCards;
