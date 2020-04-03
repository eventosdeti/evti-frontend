import React from "react";
import EventCard from "../components/EventCard";

import useFormatDueDate from "../contexts/Cards/hooks/useFormatDueDate";
import useMoreInfo from "../contexts/Cards/hooks/useMoreInfo";
import useResume from "../contexts/Cards/hooks/useResume";
import useFormatText from "../contexts/Cards/hooks/useFormatText";

const EventCardContainer = ({ due, desc, ...rest }) => {
  const formatedDue = useFormatDueDate(due);
  const moreInfoUrl = useMoreInfo(desc);
  const resume = useResume(desc);
  const formattedResume = useFormatText(resume);
  return (
    <EventCard
      due={formatedDue}
      moreInfoUrl={moreInfoUrl}
      desc={formattedResume}
      {...rest}
    />
  );
};

export default EventCardContainer;
