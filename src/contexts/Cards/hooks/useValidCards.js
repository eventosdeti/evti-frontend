import { useMemo } from "react";

const useValidCards = (allCards) => {
  const validCards = useMemo(
    () =>
      allCards
        .filter((card) => card.due && !card.closed)
        .sort((a, b) => new Date(a.due) - new Date(b.due)),
    [allCards]
  );

  return validCards;
};

export default useValidCards;
