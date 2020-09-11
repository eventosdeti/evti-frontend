import React from "react";
import styled, { css } from "styled-components";

import EventCardLabels from "../EventCardLabels";

import StyledCard from "../Card";
import StyledCardHeader from "../CardHeader";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";

import Title from "../Title";
import Button from "../Button";
import StyledLabel from "../Label";

import { DEFAULT_PADDING } from "../../settings";

const datetime = css`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primaryColor};
  font-size: 0.9rem;
  ${(props) => props.theme.mediaQueries.medium`
  font-size: 1rem;
`}
`;

const Card = styled(StyledCard).attrs((props) => ({
  isCollapsed: true,
}))`
  margin-bottom: ${DEFAULT_PADDING};
`;

const CardHeader = styled(StyledCardHeader)`
  justify-content: space-between;
`;

const CardHeaderLeftArea = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderRightArea = styled.div`
  display: flex;
  align-items: center;
`;

const DueDate = styled.div`
  ${datetime}
`;

const DueTime = styled.div`
  ${datetime}
`;

const Label = styled(StyledLabel)`
  margin-left: ${DEFAULT_PADDING};
`;

const EventCard = ({
  name,
  dueDate,
  dueTime,
  desc,
  labels,
  onClickLabel,
  moreInfoUrl,
  expired = false,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderLeftArea>
          <DueDate>{dueDate}</DueDate>
          {expired && <Label palette="danger">O evento já ocorreu</Label>}
        </CardHeaderLeftArea>
        <CardHeaderRightArea>
          <DueTime>{dueTime}</DueTime>
        </CardHeaderRightArea>
      </CardHeader>
      <CardBody>
        <Title size={1}>{name}</Title>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
        <EventCardLabels labels={labels} onClickLabel={onClickLabel} />
      </CardBody>
      <CardFooter>
        <Button
          size="tiny"
          as="a"
          href={moreInfoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais informações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(EventCard);
