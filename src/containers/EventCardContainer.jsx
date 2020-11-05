import React from "react";
import { useRouteMatch } from "react-router-dom";
import EventCard from "../components/EventCard";

import { EVENT_DETAILS } from "../routes";

import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";

import {
  useFormattedEventCardDueDate,
  useEventCardMoreInfoURL,
  useEventCardDescriptionResume,
  useFormattedEventCardDescription,
  useEventCardShortUrl,
} from "../contexts/EventCards";

const EventCardContainer = ({ due, desc, shortLink, ...rest }) => {
  const { dispatch } = useEventCardFiltersModalContext();
  const { date, time } = useFormattedEventCardDueDate(due);
  const moreInfoUrl = useEventCardMoreInfoURL(desc);
  const resume = useEventCardDescriptionResume(desc);
  const formattedDescription = useFormattedEventCardDescription(resume);
  const shortURL = useEventCardShortUrl(shortLink);

  const isOnEventDetailsRoute = useRouteMatch(EVENT_DETAILS);

  const onClickLabel = React.useCallback(() => {
    dispatch("OPEN_MODAL");
  }, [dispatch]);

  return (
    <EventCard
      dueDate={date}
      dueTime={time}
      moreInfoUrl={moreInfoUrl}
      desc={formattedDescription}
      onClickLabel={(!isOnEventDetailsRoute && onClickLabel) || null}
      shortURL={shortURL}
      {...rest}
    />
  );
};

export default EventCardContainer;
