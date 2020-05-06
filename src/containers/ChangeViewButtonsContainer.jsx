import React from "react";
import ReactGA from "react-ga";

import ChangeViewButtons from "../components/ChangeViewButtons";
import { useCardsContext } from "../contexts/Cards";

const ChangeViewButtonsContainer = () => {
  const { view, viewTypes, setView, setIsLoadingCards } = useCardsContext();

  const timeoutRef = React.useRef(null);

  const showLoadingCards = React.useCallback(() => {
    clearTimeout(timeoutRef.current);
    setIsLoadingCards(true);
    timeoutRef.current = setTimeout(() => setIsLoadingCards(false), 500);
  }, [setIsLoadingCards]);

  const onViewAll = React.useCallback(() => {
    showLoadingCards();
    setView(viewTypes.ALL.key);
    ReactGA.event({
      category: "change_view",
      action: "view_all",
      label: viewTypes.ALL.key,
    });
  }, [viewTypes, setView, showLoadingCards]);

  const onViewCurrentMonth = React.useCallback(() => {
    showLoadingCards();
    setView(viewTypes.CURRENT_MONTH.key);
    ReactGA.event({
      category: "change_view",
      action: "view_current_month",
      label: viewTypes.CURRENT_MONTH.key,
    });
  }, [viewTypes, setView, showLoadingCards]);

  const onViewCurrentDay = React.useCallback(() => {
    showLoadingCards();
    setView(viewTypes.CURRENT_DAY.key);
    ReactGA.event({
      category: "change_view",
      action: "view_current_day",
      label: viewTypes.CURRENT_DAY.key,
    });
  }, [viewTypes, setView, showLoadingCards]);

  return (
    <ChangeViewButtons
      view={view}
      viewTypes={viewTypes}
      onViewAll={onViewAll}
      onViewCurrentMonth={onViewCurrentMonth}
      onViewCurrentDay={onViewCurrentDay}
    />
  );
};

export default ChangeViewButtonsContainer;
