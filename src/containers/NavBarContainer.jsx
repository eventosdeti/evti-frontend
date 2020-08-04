import React from "react";
import NavBar from "../components/NavBar";

import EventCardPeriodFilterButtons from "../components/EventCardPeriodFilterButtons";
import { useEventCardsContext } from "../contexts/EventCards";
import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";

const NavBarContainer = () => {
  const {
    state: eventCardsSstate,
    dispatch: eventCardsDispatch,
  } = useEventCardsContext();
  const { dispatch: filtersModalDispatch } = useEventCardFiltersModalContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const disabled = eventCardsSstate.matches("loadCards.loading");

  const onViewAll = React.useCallback(() => {
    scrollToTop();
    eventCardsDispatch("FILTER_CARDS_BY_PERIOD", { data: "all" });
  }, [eventCardsDispatch]);

  const onViewCurrentDay = React.useCallback(() => {
    scrollToTop();
    eventCardsDispatch("FILTER_CARDS_BY_PERIOD", { data: "day" });
  }, [eventCardsDispatch]);

  const onViewCurrentMonth = React.useCallback(() => {
    scrollToTop();
    eventCardsDispatch("FILTER_CARDS_BY_PERIOD", { data: "month" });
  }, [eventCardsDispatch]);

  const onEditFilters = React.useCallback(() => {
    filtersModalDispatch("OPEN_MODAL");
  }, [filtersModalDispatch]);

  const filtered = eventCardsSstate.matches("filterCardsLabels.filtered");
  const period = eventCardsSstate.value.filterCardsPeriod;
  const showLoading = eventCardsSstate.matches("loadCards.loading");

  return (
    <NavBar showLoading={showLoading}>
      <EventCardPeriodFilterButtons
        period={period}
        onViewAll={onViewAll}
        onViewCurrentDay={onViewCurrentDay}
        onViewCurrentMonth={onViewCurrentMonth}
        onEditFilters={onEditFilters}
        filtered={filtered}
        disabled={disabled}
      />
    </NavBar>
  );
};

export default NavBarContainer;
