import { useEffect, useState } from "react";
import { isSameMonth, addMonths } from "date-fns";

const useDateFilteredCards = (cards, view, viewTypes) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    if (view === viewTypes.ALL.key) {
      setFilteredCards(cards);
    }
    if (view === viewTypes.CURRENT_MONTH.key) {
      setFilteredCards(
        cards.filter((card) => isSameMonth(new Date(card.due), new Date()))
      );
    }
    if (view === viewTypes.NEXT_MONTH.key) {
      setFilteredCards(
        cards.filter((card) =>
          isSameMonth(new Date(card.due), addMonths(new Date(), 1))
        )
      );
    }
  }, [view, viewTypes, cards, setFilteredCards]);

  return filteredCards;
};

export default useDateFilteredCards;
