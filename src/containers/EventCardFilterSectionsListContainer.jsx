import React from "react";
import EventCardFilterSectionsList from "../components/EventCardFilterSectionsList";

import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";

const EventCardFilterSectionsListContainer = () => {
  const {
    state: modalSstate,
    dispatch: moodalDispatch,
  } = useEventCardFiltersModalContext();

  const onSelectAllPeriods = React.useCallback(() => {
    moodalDispatch("SET_FILTER_PERIOD", { data: "all" });
  }, [moodalDispatch]);

  const onSelectDayPeriod = React.useCallback(() => {
    moodalDispatch("SET_FILTER_PERIOD", { data: "day" });
  }, [moodalDispatch]);

  const onSelectMonthPeriod = React.useCallback(() => {
    moodalDispatch("SET_FILTER_PERIOD", { data: "month" });
  }, [moodalDispatch]);

  const onSelectLabel = (label) => {
    moodalDispatch("FILTER_BY_LABELS", {
      data: [...modalSstate.context.filterLabels, label],
    });
  };
  const onDeselectLabel = (label) => {
    moodalDispatch("FILTER_BY_LABELS", {
      data: modalSstate.context.filterLabels.filter(
        (selected) => selected.id !== label.id
      ),
    });
  };

  return (
    <EventCardFilterSectionsList
      labels={modalSstate.context.labels}
      selectedLabels={modalSstate.context.filterLabels}
      period={modalSstate.value.filterPeriod}
      onSelectAllPeriods={onSelectAllPeriods}
      onSelectMonthPeriod={onSelectMonthPeriod}
      onSelectDayPeriod={onSelectDayPeriod}
      onSelectLabel={onSelectLabel}
      onDeselectLabel={onDeselectLabel}
    />
  );
};

export default EventCardFilterSectionsListContainer;
