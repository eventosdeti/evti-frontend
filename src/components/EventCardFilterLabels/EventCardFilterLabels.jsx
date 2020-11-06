import React from "react";
import styled from "styled-components";

import Label from "../Label";

const Wrapper = styled.div``;

const EventCardFilterLabels = ({
  labels = [],
  selectedLabelsKeyed = {},
  onSelectLabel,
  onDeselectLabel,
}) => {
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

  const isWomanInTechLabel = (labelName = "") =>
    /^mulheres\s*na\s*t.*i$/gi.test(labelName);

  return (
    <Wrapper>
      {labels.map((label) => {
        const isSelected = !!selectedLabelsKeyed[label.id]?.id;
        const selectedPalette =
          (isWomanInTechLabel(label.name) && "womenInTechSelected") ||
          "primary";
        const unselectedPalette =
          (isWomanInTechLabel(label.name) && "womenInTech") || "initial";
        return (
          <Label
            key={label.id}
            palette={(isSelected && selectedPalette) || unselectedPalette}
            onClose={(isSelected && onDeselectLabelHandler(label)) || null}
            onClick={(!isSelected && onSelectLabelHandler(label)) || null}
          >
            {label.name}
          </Label>
        );
      })}
    </Wrapper>
  );
};

export default EventCardFilterLabels;
