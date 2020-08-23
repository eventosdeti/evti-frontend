import React from "react";
import styled from "styled-components";
import Label from "../Label";

const Wrapper = styled.div``;

const EventCardLabels = ({ labels = [], onClickLabel }) => {
  const isWomanInTechLabel = (labelName = "") =>
    /^mulheres\s*na\s*t.*i$/gi.test(labelName);
  return (
    <Wrapper>
      {labels.map((label) => (
        <Label
          key={label.id}
          onClick={onClickLabel}
          palette={
            (isWomanInTechLabel(label.name) && "womenInTech") || "initial"
          }
        >
          {label.name}
        </Label>
      ))}
    </Wrapper>
  );
};

export default EventCardLabels;
