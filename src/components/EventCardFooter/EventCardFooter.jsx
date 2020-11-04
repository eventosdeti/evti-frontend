import React from "react";
import styled from "styled-components";

import StyledCardFooter from "../CardFooter";
import EventCardShortUrl from "../EventCardShortUrl";

const CardFooter = styled(StyledCardFooter)`
  justify-content: space-between;
`;

const EventCardFooter = ({ shortURL }) => {
  return (
    <CardFooter>
      <EventCardShortUrl shortURL={shortURL} />
    </CardFooter>
  );
};

export default EventCardFooter;
