import React from "react";
import { useRouteMatch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Button from "../components/Button";
import EventCardPeriodFilterButtons from "../components/EventCardPeriodFilterButtons";

import { useEventCardsContext } from "../contexts/EventCards";
import { useEventCardFiltersModalContext } from "../contexts/EventCardFiltersModal";

import { EVENT_DETAILS } from "../routes";

const NavBarContainer = () => {
  const { state: cardsState, dispatch: cardsDispatch } = useEventCardsContext();
  const { dispatch: modalDispatch } = useEventCardFiltersModalContext();

  const isOnEventDetailsRoute = useRouteMatch(EVENT_DETAILS);

  const showLoading = cardsState.matches("loadCards.loading");
  const disabled = cardsState.matches("loadCards.loading");
  const filteredByLabels = cardsState.matches("filterLabels.filtered");
  const selectedPeriod = cardsState.context.filterPeriod;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onSelectAllPeriods = React.useCallback(() => {
    scrollToTop();
    cardsDispatch("SET_FILTER_PERIOD", { data: "all" });
  }, [cardsDispatch]);

  const onSelectDayPeriod = React.useCallback(() => {
    scrollToTop();
    cardsDispatch("SET_FILTER_PERIOD", { data: "day" });
  }, [cardsDispatch]);

  const onSelectMonthPeriod = React.useCallback(() => {
    scrollToTop();
    cardsDispatch("SET_FILTER_PERIOD", { data: "month" });
  }, [cardsDispatch]);

  const onEditFilters = React.useCallback(() => {
    modalDispatch("OPEN_MODAL");
  }, [modalDispatch]);

  return (
    <NavBar showLoading={showLoading}>
      {(isOnEventDetailsRoute && (
        <Button as="a" href="/">
          Página inicial
        </Button>
      )) || (
        <EventCardPeriodFilterButtons
          selectedPeriod={selectedPeriod}
          filteredByLabels={filteredByLabels}
          disabled={disabled}
          onSelectAllPeriods={onSelectAllPeriods}
          onSelectDayPeriod={onSelectDayPeriod}
          onSelectMonthPeriod={onSelectMonthPeriod}
          onEditFilters={onEditFilters}
        />
      )}
    </NavBar>
  );
};

export default NavBarContainer;
