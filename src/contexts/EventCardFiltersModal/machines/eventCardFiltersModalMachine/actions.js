import { assign } from "xstate";

export default {
  setLabels: assign({
    labels: (ctx, event) => event.data || ctx.labels,
  }),

  setFilterLabels: assign({
    filterLabels: (ctx, event) => event.data || ctx.filterLabels,
    filterLabelsKeyed: (ctx, event) => {
      if (event.data) {
        return event.data.reduce((acc, curr) => {
          acc[curr.id] = {
            ...curr,
          };
          return acc;
        }, {});
      }
      return ctx.filterLabelsKeyed;
    },
  }),

  setFilterPeriod: assign({
    filterPeriod: (ctx, event) => event.data || ctx.filterPeriod,
  }),
};
