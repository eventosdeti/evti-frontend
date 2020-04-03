import { useMemo, useCallback, useState } from "react";
import { isSameMonth, addMonths } from "date-fns";

const useCards = () => {
  const [allCards, setAllCards] = useState([]);
  const [cards, setCards] = useState([]);

  const activeCards = useMemo(() => allCards.filter(card => !card.closed), [
    allCards
  ]);

  const cardsWidthDueDate = useMemo(
    () => activeCards.filter(card => card.due),
    [activeCards]
  );
  const sortedCards = useMemo(
    () => cardsWidthDueDate.sort((a, b) => new Date(b.due) - new Date(a.due)),
    [cardsWidthDueDate]
  );

  const viewAllCards = useCallback(() => {
    setCards(sortedCards);
  }, [sortedCards, setCards]);

  const viewCurrentMonthCards = useCallback(() => {
    setCards(
      sortedCards.filter(card => isSameMonth(new Date(card.due), new Date()))
    );
  }, [sortedCards, setCards]);

  const viewNextMonthCards = useCallback(() => {
    const nextMonthDate = addMonths(new Date(), 1);
    setCards(
      sortedCards.filter(card => isSameMonth(new Date(card.due), nextMonthDate))
    );
  }, [sortedCards, setCards]);

  return {
    cards,
    setAllCards,
    viewAllCards,
    viewCurrentMonthCards,
    viewNextMonthCards
  };
};

export default useCards;
