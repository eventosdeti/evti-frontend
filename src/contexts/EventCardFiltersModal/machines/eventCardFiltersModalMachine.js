import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const setLabels = assign({
  labels: (ctx, event) => {
    return event?.data || ctx.labels;
  },
});

const setFilterLabels = assign({
  filterLabels: (ctx, event) => event.data || ctx.filterLabels,
});

const setFilterPeriod = assign({
  filterPeriod: (ctx, event) => event.data || ctx.filterPeriod,
});

const eventCardFiltersModalMachine = Machine(
  {
    id: "eventCardFiltersModalMachine",
    type: "parallel",
    context: {
      labels: [],
      filterPeriod: "all",
      filterLabels: [],
    },
    states: {
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
            on: {
              SET_FILTER_PERIOD: {
                target: "unknown",
                actions: ["setFilterPeriod"],
              },
            },
          },
          day: {
            on: {
              SET_FILTER_PERIOD: {
                target: "unknown",
                actions: ["setFilterPeriod"],
              },
            },
          },
          month: {
            on: {
              SET_FILTER_PERIOD: {
                target: "unknown",
                actions: ["setFilterPeriod"],
              },
            },
          },
        },
      },
      modalStatus: {
        initial: "closed",
        states: {
          closed: {
            on: {
              OPEN_MODAL: "open",
            },
          },
          open: {
            on: {
              CLOSE_MODAL: "closed",
            },
          },
        },
      },
    },
    on: {
      SET_LABELS: {
        actions: ["setLabels"],
      },
      FILTER_BY_LABELS: {
        actions: ["setFilterLabels"],
      },
    },
  },
  {
    actions: {
      setLabels,
      setFilterLabels,
      setFilterPeriod,
    },
  }
);

export const useEventCardFiltersModalMachine = (options = { devTools: true }) =>
  useMachine(eventCardFiltersModalMachine, options);

export default eventCardFiltersModalMachine;
