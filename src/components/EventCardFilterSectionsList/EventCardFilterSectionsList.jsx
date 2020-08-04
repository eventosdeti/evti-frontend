import React from "react";
import styled from "styled-components";

import List from "../List";
import ListItem from "../ListItem";
import ListItemDivider from "../ListItemDivider";

import EventCardPeriodFilterButtons from "../EventCardPeriodFilterButtons";
import EventCardFilterLabelsSection from "../EventCardFilterLabelsSection";

const Title = styled.span``;

const Counter = styled.span`
  font-style: italic;
  font-weight: normal;
`;

const EventCardFilterSectionsList = ({
  labels = [],
  selectedLabels = [],
  period,
  onSelectAllPeriods,
  onSelectMonthPeriod,
  onSelectDayPeriod,
  onSelectLabel,
  onDeselectLabel,
}) => {
  const counter = selectedLabels.length;

  return (
    <List>
      <ListItemDivider title="Periodos" />
      <ListItem>
        <EventCardPeriodFilterButtons
          period={period}
          onViewAll={onSelectAllPeriods}
          onViewCurrentMonth={onSelectMonthPeriod}
          onViewCurrentDay={onSelectDayPeriod}
          buttonsSize="tiny"
        />
      </ListItem>
      <ListItemDivider
        title={
          <>
            <Title>Tags - </Title>
            <Counter>{counter} selecionada(s) </Counter>
          </>
        }
      />
      <ListItem>
        <EventCardFilterLabelsSection
          labels={labels}
          selectedLabels={selectedLabels}
          onDeselectLabel={onDeselectLabel}
          onSelectLabel={onSelectLabel}
        />
      </ListItem>
    </List>
  );
};

export default EventCardFilterSectionsList;
