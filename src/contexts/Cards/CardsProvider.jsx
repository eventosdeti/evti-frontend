import React from "react";

import Context from "./CardsContext";
import useCardsView from "./hooks/useCardsView";
import useValidCards from "./hooks/useValidCards";
import useDateFilteredCards from "./hooks/useDateFilteredCards";
import useFetch from "../../hooks/useFetch";

const { REACT_APP_TRELLO_BOARD_JSON_URI } = process.env;

const CardsProvider = ({ children }) => {
  const [allCards, setAllCards] = React.useState([]);
  const { view, viewTypes, setView } = useCardsView();
  const [isLoadingCards, setIsLoadingCards] = React.useState(false);

  const { data, isFetching, fetchData } = useFetch(
    REACT_APP_TRELLO_BOARD_JSON_URI
  );

  const validCards = useValidCards(allCards);
  const dateFilteredCards = useDateFilteredCards(validCards, view, viewTypes);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  React.useEffect(() => {
    if (data.result) {
      setAllCards(data.result.cards);
    }
  }, [data.result, setAllCards]);

  React.useEffect(() => {
    setIsLoadingCards(isFetching);
  }, [isFetching, setIsLoadingCards]);

  const value = {
    view,
    setView,
    viewTypes,
    validCards,
    dateFilteredCards,
    setAllCards,
    isLoadingCards,
    setIsLoadingCards,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CardsProvider;
