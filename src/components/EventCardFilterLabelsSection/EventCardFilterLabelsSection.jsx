import React from "react";
import styled from "styled-components";

import Label from "../Label";

const Wrapper = styled.div``;

const EventCardFilterLabelsSection = ({
  labels = [],
  selectedLabels = [],
  onSelectLabel,
  onDeselectLabel,
}) => {
  const [selectableLabels, setSelectableLabels] = React.useState([]);

  const onSelectLabelHandler = (label) => () => {
    if (onSelectLabel) {
      onSelectLabel(label);
    }
  };

  const onDeselectLabelHandler = (label) => () => {
    if (onDeselectLabel) {
      onDeselectLabel(label);
    }
  };

  React.useEffect(() => {
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

  const isWomanInTechLabel = (labelName = "") =>
    /^mulheres\s*na\s*t.*i$/gi.test(labelName);

  return (
    <Wrapper>
      {selectableLabels.map((label) => {
        if (label.isSelected) {
          return (
            <Label
              key={label.id}
              palette={
                (isWomanInTechLabel(label.name) && "womenInTechSelected") ||
                "primary"
              }
              onClose={onDeselectLabelHandler(label)}
            >
              {label.name}
            </Label>
          );
        }
        return (
          <Label
            key={label.id}
            palette={
              (isWomanInTechLabel(label.name) && "womenInTech") || "initial"
            }
            onClick={onSelectLabelHandler(label)}
          >
            {label.name}
          </Label>
        );
      })}
    </Wrapper>
  );
};

export default EventCardFilterLabelsSection;
