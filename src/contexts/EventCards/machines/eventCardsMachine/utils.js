import { isSameMonth, isSameDay } from "date-fns";

const { REACT_APP_TRELLO_BOARD_JSON_URI } = process.env;

export const fetchCards = async () => {
  const response = await fetch(REACT_APP_TRELLO_BOARD_JSON_URI);
  const data = await response.json();
  return data;
};

export const filterValidCards = (cards = []) =>
  cards
    .filter((card) => card.due && !card.closed)
    .sort((a, b) => new Date(a.due) - new Date(b.due));

export const filterCardsByPeriod = (cards = [], period) => {
  if (period === "day") {
    return cards.filter((card) => isSameDay(new Date(card.due), new Date()));
  }
  if (period === "month") {
    return cards.filter((card) => isSameMonth(new Date(card.due), new Date()));
  }
  return cards;
};

export const filterCardsByLabels = (cards = [], labels = []) => {
  if (labels.length) {
    return cards.filter((card) =>
      card.labels.some((cardLabel) =>
        labels.find((label) => label.id === cardLabel.id)
      )
    );
  }
  return cards;
};
