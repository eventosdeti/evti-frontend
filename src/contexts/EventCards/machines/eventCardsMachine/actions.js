import { assign } from "xstate";

import {
  filterValidCards,
  filterCardsByPeriod,
  filterCardsByLabels,
} from "./utils";

export default {
  setFetchCardsError: assign({
    fetchCardsError: (_, event) => event.data,
  }),

  clearFetchCardsError: assign({
    fetchCardsError: null,
  }),

  setFetchCardsData: assign({
    fetchCardsData: (_, event) => event.data,
  }),

  setFilterLabels: assign({
    filterLabels: (ctx, event) => event.data || ctx.filterLabels,
  }),

  clearFilterLabels: assign({
    filterLabels: [],
  }),

  setFilterPeriod: assign({
    filterPeriod: (ctx, event) => event.data || ctx.filterPeriod,
  }),

  applyFilterAndSetCards: assign({
    allCards: (ctx) => ctx.fetchCardsData?.cards || ctx.allCards,
    cards: (ctx) => {
      if (ctx.fetchCardsData?.cards) {
        let cards = filterValidCards(ctx.fetchCardsData.cards);
        cards = filterCardsByPeriod(cards, ctx.filterPeriod);
        cards = filterCardsByLabels(cards, ctx.filterLabels);
        return cards;
      }
      return ctx.cards;
    },
  }),

  setLabels: assign({
    labels: (ctx) => {
      if (ctx.fetchCardsData?.labels) {
        return ctx.fetchCardsData.labels;
      }
      return ctx.labels;
    },
  }),
};
