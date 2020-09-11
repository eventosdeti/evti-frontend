import { Machine, send, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { isSameMonth, isSameDay } from "date-fns";

const { REACT_APP_TRELLO_BOARD_JSON_URI } = process.env;

const fetchCards = async () => {
  const response = await fetch(REACT_APP_TRELLO_BOARD_JSON_URI);
  const data = await response.json();
  return data;
};

const filterValidCards = (cards = []) =>
  cards
    .filter((card) => card.due && !card.closed)
    .sort((a, b) => new Date(a.due) - new Date(b.due));

const filterCardsByPeriod = (cards = [], period) => {
  if (period === "day") {
    return cards.filter((card) => isSameDay(new Date(card.due), new Date()));
  }
  if (period === "month") {
    return cards.filter((card) => isSameMonth(new Date(card.due), new Date()));
  }
  return cards;
};

const filterCardsByLabels = (cards = [], labels = []) => {
  if (labels.length) {
    return cards.filter((card) =>
      card.labels.some((cardLabel) =>
        labels.find((label) => label.id === cardLabel.id)
      )
    );
  }
  return cards;
};

const clearFetchCardsError = assign({
  fetchCardsError: null,
});

const setFetchCardsError = assign({
  fetchCardsError: (_, event) => event.data,
});

const setFetchCardsData = assign({
  fetchCardsData: (_, event) => event.data,
});

const setFilterCardsLabels = assign({
  filterCardsLabels: (ctx, event) => event.data || ctx.filterCardsLabels,
});

const clearFilterCardsLabels = assign({
  filterCardsLabels: [],
});

const setFilterCardsPeriod = assign({
  filterCardsPeriod: (ctx, event) => event.data || ctx.filterCardsPeriod,
});

const applyFilterAndSetCards = assign({
  allCards: (ctx) => ctx.fetchCardsData?.cards || ctx.allCards,
  cards: (ctx) => {
    if (ctx.fetchCardsData?.cards) {
      let cards = filterValidCards(ctx.fetchCardsData.cards);
      cards = filterCardsByPeriod(cards, ctx.filterCardsPeriod);
      cards = filterCardsByLabels(cards, ctx.filterCardsLabels);
      return cards;
    }
    return ctx.cards;
  },
});

const setLabels = assign({
  labels: (ctx) => {
    if (ctx.fetchCardsData?.labels) {
      return ctx.fetchCardsData.labels;
    }
    return ctx.labels;
  },
});

const eventCardsMachine = Machine(
  {
    id: "eventCardsMachine",
    type: "parallel",
    context: {
      labels: [],
      allCards: [],
      cards: [],
      filterCardsPeriod: "day",
      filterCardsLabels: [],
      fetchCardsData: [],
      fetchCardsError: null,
    },
    states: {
      fetchCards: {
        initial: "idle",
        states: {
          idle: {
            on: {
              START_FETCH_CARDS: "fetching",
            },
          },
          fetching: {
            onEntry: ["clearFetchCardsError", send("SHOW_LOADING_CARDS")],
            invoke: {
              src: fetchCards,
              onDone: "success",
              onError: "failure",
            },
          },
          success: {
            type: "final",
            onEntry: [
              "setFetchCardsData",
              "applyFilterAndSetCards",
              "setLabels",
              send("HIDE_LOADING_CARDS"),
            ],
          },
          failure: {
            onEntry: ["setFetchCardsError", send("HIDE_LOADING_CARDS")],
            on: {
              START_FETCH_CARDS: "fetching",
            },
          },
        },
      },
      loadCards: {
        initial: "idle",
        states: {
          idle: {
            on: {
              SHOW_LOADING_CARDS: "loading",
            },
          },
          loading: {
            on: {
              HIDE_LOADING_CARDS: "idle",
            },
          },
        },
      },
      filterCardsPeriod: {
        initial: "unknown",
        states: {
          unknown: {
            on: {
              "": [
                {
                  target: "all",
                  cond: (ctx) => ctx.filterCardsPeriod === "all",
                },
                {
                  target: "day",
                  cond: (ctx) => ctx.filterCardsPeriod === "day",
                },
                {
                  target: "month",
                  cond: (ctx) => ctx.filterCardsPeriod === "month",
                },
              ],
            },
          },
          all: {
            onEntry: ["applyFilterAndSetCards"],
            on: {
              FILTER_CARDS_BY_PERIOD: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterCardsPeriod",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
          day: {
            onEntry: ["applyFilterAndSetCards"],
            on: {
              FILTER_CARDS_BY_PERIOD: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterCardsPeriod",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
          month: {
            onEntry: ["applyFilterAndSetCards"],
            on: {
              FILTER_CARDS_BY_PERIOD: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterCardsPeriod",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
        },
      },
      filterCardsLabels: {
        initial: "unknown",
        states: {
          unknown: {
            on: {
              "": [
                {
                  target: "notfiltered",
                  cond: (context) => !context.filterCardsLabels.length,
                },
                {
                  target: "filtered",
                  cond: (context) => context.filterCardsLabels.length,
                },
              ],
            },
          },
          filtered: {
            on: {
              FILTER_CARDS_BY_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterCardsLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
              CLEAR_FILTER_CARD_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "clearFilterCardsLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
          notfiltered: {
            on: {
              FILTER_CARDS_BY_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterCardsLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
              CLEAR_FILTER_CARD_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "clearFilterCardsLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    actions: {
      clearFetchCardsError,
      setFetchCardsError,
      setFetchCardsData,
      setFilterCardsPeriod,
      applyFilterAndSetCards,
      setLabels,
      setFilterCardsLabels,
      clearFilterCardsLabels,
    },
  }
);

export const useEventCardsMachine = (options = { devTools: true }) =>
  useMachine(eventCardsMachine, options);

export default eventCardsMachine;
