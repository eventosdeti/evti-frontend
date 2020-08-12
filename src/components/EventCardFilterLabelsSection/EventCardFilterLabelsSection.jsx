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

  const childrenTest = (text) => {
    let n = text.search(/mulheres/i);

    if (n !== -1) {
      return true;
    }

    return false;
  };

  return (
    <Wrapper>
      {selectableLabels.map((label) => {
        const test = childrenTest(label.name);
        if (label.isSelected) {
          console.log(label, "label");
          return (
            <Label
              key={label.id}
              palette={test ? "tertiarySelected" : "primary"}
              onClose={onDeselectLabelHandler(label)}
            >
              {label.name}
            </Label>
          );
        }
        return (
          <Label
            key={label.id}
            palette={test ? "tertiary" : "initial"}
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
