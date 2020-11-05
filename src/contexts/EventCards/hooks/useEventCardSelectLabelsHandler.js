import { useState, useEffect } from "react";

const useEventCardSelectLabelsHandler = ({
  labels = [],
  selectedLabels = [],
}) => {
  const [selectableLabels, setSelectableLabels] = useState([]);

  useEffect(() => {
    setSelectableLabels(
      labels.map((label) => {
        const isSelected = !!selectedLabels.find(
          (selected) => label.id === selected.id
        );
        return {
          isSelected,
          ...label,
        };
      })
    );
  }, [labels, selectedLabels, setSelectableLabels]);

  return {
    selectableLabels,
  };
};

export default useEventCardSelectLabelsHandler;
