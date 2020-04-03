import React from "react";

import Context from "./CardsContext";
import useCards from "./hooks/useCards";
import useCardsView from "./hooks/useCardsView";

const CardsProvider = ({ children }) => {
  const {
    cards,
    setAllCards,
    viewAllCards,
    viewCurrentMonthCards,
    viewNextMonthCards
  } = useCards();

  const { view, viewTypes, setView } = useCardsView();
  const [isLoadingCards, setIsLoadingCards] = React.useState(true);

  React.useEffect(() => {
    if (view === viewTypes.ALL.key) {
      viewAllCards();
    }
    if (view === viewTypes.CURRENT_MONTH.key) {
      viewCurrentMonthCards();
    }
    if (view === viewTypes.NEXT_MONTH.key) {
      viewNextMonthCards();
    }
  }, [
    view,
    viewTypes,
    viewAllCards,
    viewCurrentMonthCards,
    viewNextMonthCards
  ]);

  const value = {
    view,
    setView,
    viewTypes,
    cards,
    setAllCards,
    isLoadingCards,
    setIsLoadingCards
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CardsProvider;
