import React from "react";
import styled from "styled-components";

import StyledCard from "../Card";
import CardBody from "../CardBody";

import EventCardHeader from "../EventCardHeader";
import EventCardFooter from "../EventCardFooter";
import EventCardLabels from "../EventCardLabels";

import Title from "../Title";
import Button from "../Button";
import Label from "../Label";

import { DEFAULT_PADDING, pixelToRem } from "../../settings";

const Card = styled(StyledCard).attrs((props) => ({
  ...props,
  isCollapsed: true,
}))`
  margin-bottom: ${DEFAULT_PADDING};
`;

const MoreInfoButton = styled(Button)`
  margin-top: ${DEFAULT_PADDING};
  margin-bottom: ${DEFAULT_PADDING};
`;

const Desc = styled.div`
  font-size: ${pixelToRem(10)};
  line-height: 1.5;
`;

const EventCard = ({
  name,
  dueDate,
  dueTime,
  desc,
  labels,
  onClickLabel,
  moreInfoUrl,
  shortURL,
}) => {
  return (
    <Card>
      <EventCardHeader dueDate={dueDate} dueTime={dueTime} />
      <CardBody>
        <Title size={1} as="h2">
          {name}
        </Title>
        <Desc dangerouslySetInnerHTML={{ __html: desc }} />
        <MoreInfoButton
          forwardedAs="a"
          size="tiny"
          palette="tertiary"
          variant="outlined"
          href={moreInfoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir para o site do evento
        </MoreInfoButton>
        <EventCardLabels labels={labels} onClickLabel={onClickLabel} />
      </CardBody>
      <EventCardFooter shortURL={shortURL} />
    </Card>
  );
};

export default React.memo(EventCard);
