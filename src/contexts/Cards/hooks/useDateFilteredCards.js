import { useEffect, useState } from "react";
import { isSameMonth, isSameDay } from "date-fns";

const useDateFilteredCards = (cards, view, viewTypes) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    if (view === viewTypes.ALL.key) {
      setFilteredCards(cards);
    }
    if (view === viewTypes.CURRENT_DAY.key) {
      setFilteredCards(
        cards.filter((card) => isSameDay(new Date(card.due), new Date()))
      );
    }
    if (view === viewTypes.CURRENT_MONTH.key) {
      setFilteredCards(
        cards.filter((card) => isSameMonth(new Date(card.due), new Date()))
      );
    }
  }, [view, viewTypes, cards, setFilteredCards]);

  return filteredCards;
};

export default useDateFilteredCards;
