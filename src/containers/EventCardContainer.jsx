import React from "react";
import EventCard from "../components/EventCard";

import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";

import useFormattedEventCardDueDate from "../contexts/EventCards/hooks/useFormattedEventCardDueDate";
import useEventCardMoreInfoURL from "../contexts/EventCards/hooks/useEventCardMoreInfoURL";
import useEventCardDescriptionResume from "../contexts/EventCards/hooks/useEventCardDescriptionResume";
import useFormattedEventCardDescription from "../contexts/EventCards/hooks/useFormattedEventCardDescription";

const EventCardContainer = ({ due, desc, ...rest }) => {
  const { dispatch: modalDispatch } = useEventCardFiltersModalContext();
  const { date, time } = useFormattedEventCardDueDate(due);
  const moreInfoUrl = useEventCardMoreInfoURL(desc);
  const resume = useEventCardDescriptionResume(desc);
  const formattedResume = useFormattedEventCardDescription(resume);

  const onClickLabel = React.useCallback(() => {
    modalDispatch("OPEN_MODAL");
  }, [modalDispatch]);

  return (
    <EventCard
      dueDate={date}
      dueTime={time}
      moreInfoUrl={moreInfoUrl}
      desc={formattedResume}
      onClickLabel={onClickLabel}
      {...rest}
    />
  );
};

export default EventCardContainer;
