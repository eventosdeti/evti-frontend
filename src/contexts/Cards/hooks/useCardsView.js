import { useMemo, useState } from "react";

const VIEW_TYPES = {
  ALL: {
    key: "ALL"
  },
  CURRENT_MONTH: {
    key: "CURRENT_MONTH"
  },
  NEXT_MONTH: {
    key: "NEXT_MONTH"
  }
};

const useCardsView = () => {
  const viewTypes = useMemo(() => VIEW_TYPES, []);
  const [view, setView] = useState(VIEW_TYPES.ALL.key);
  return { view, viewTypes, setView };
};

export default useCardsView;
