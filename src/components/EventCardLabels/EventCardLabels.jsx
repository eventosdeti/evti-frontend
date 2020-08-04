import React from "react";
import styled from "styled-components";
import Label from "../Label";

const Wrapper = styled.div``;

const EventCardLabels = ({ labels = [], onClickLabel }) => {
  return (
    <Wrapper>
      {labels.map((label) => (
        <Label key={label.id} onClick={onClickLabel}>
          {label.name}
        </Label>
      ))}
    </Wrapper>
  );
};

export default EventCardLabels;
