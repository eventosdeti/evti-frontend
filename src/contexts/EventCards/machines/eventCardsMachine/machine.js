import { Machine, send } from "xstate";
import { useMachine } from "@xstate/react";

import { fetchCards } from "./utils";
import actions from "./actions";

const eventCardsMachine = Machine(
  {
    id: "eventCardsMachine",
    type: "parallel",
    context: {
      labels: [],
      allCards: [],
      cards: [],
      filterPeriod: "day",
      filterLabels: [],
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
            after: {
              100: "idle",
            },
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
      filterPeriod: {
        initial: "unknown",
        states: {
          unknown: {
            on: {
              "": [
                {
                  target: "all",
                  cond: (ctx) => ctx.filterPeriod === "all",
                },
                {
                  target: "day",
                  cond: (ctx) => ctx.filterPeriod === "day",
                },
                {
                  target: "month",
                  cond: (ctx) => ctx.filterPeriod === "month",
                },
              ],
            },
          },
          all: {
            onEntry: ["applyFilterAndSetCards"],
            on: {
              SET_FILTER_PERIOD: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterPeriod",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
          day: {
            onEntry: ["applyFilterAndSetCards"],
            on: {
              SET_FILTER_PERIOD: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterPeriod",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
          month: {
            onEntry: ["applyFilterAndSetCards"],
            on: {
              SET_FILTER_PERIOD: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterPeriod",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
        },
      },
      filterLabels: {
        initial: "unknown",
        states: {
          unknown: {
            on: {
              "": [
                {
                  target: "notFiltered",
                  cond: (context) => !context.filterLabels.length,
                },
                {
                  target: "filtered",
                  cond: (context) => context.filterLabels.length,
                },
              ],
            },
          },
          filtered: {
            on: {
              SET_FILTER_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
              CLEAR_FILTER_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "clearFilterLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
            },
          },
          notFiltered: {
            on: {
              SET_FILTER_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "setFilterLabels",
                  "applyFilterAndSetCards",
                  send("HIDE_LOADING_CARDS", { delay: 1200 }),
                ],
              },
              CLEAR_FILTER_LABELS: {
                target: "unknown",
                actions: [
                  send("SHOW_LOADING_CARDS"),
                  "clearFilterLabels",
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
    actions,
  }
);

export const useEventCardsMachine = (options = { devTools: true }) =>
  useMachine(eventCardsMachine, options);

export default eventCardsMachine;
