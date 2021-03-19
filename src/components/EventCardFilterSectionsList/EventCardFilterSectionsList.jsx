import React from "react";

import List from "../List";
import ListItem from "../ListItem";
import ListItemDivider from "../ListItemDivider";

import EventCardPeriodFilterButtons from "../EventCardPeriodFilterButtons";
import EventCardFilterLabels from "../EventCardFilterLabels";

const EventCardFilterSectionsList = ({
  labels = [],
  selectedLabels = [],
  selectedLabelsKeyed = {},
  selectedPeriod,
  onSelectAllPeriods,
  onSelectMonthPeriod,
  onSelectDayPeriod,
  onSelectLabel,
  onDeselectLabel,
}) => {
  return (
    <List>
      <ListItemDivider title="Periodos" />
      <ListItem>
        <EventCardPeriodFilterButtons
          selectedPeriod={selectedPeriod}
          onSelectAllPeriods={onSelectAllPeriods}
          onSelectMonthPeriod={onSelectMonthPeriod}
          onSelectDayPeriod={onSelectDayPeriod}
          buttonsSize="tiny"
        />
      </ListItem>
      <ListItemDivider
        title={`Tags - (${selectedLabels.length}) selecionada(s)`}
      />
      <ListItem>
        <EventCardFilterLabels
          labels={labels}
          selectedLabels={selectedLabels}
          selectedLabelsKeyed={selectedLabelsKeyed}
          onDeselectLabel={onDeselectLabel}
          onSelectLabel={onSelectLabel}
        />
      </ListItem>
    </List>
  );
};

export default EventCardFilterSectionsList;
