import React from "react";
import styled, { css } from "styled-components";

import StyledCardHeader from "../CardHeader";
import StyledLabel from "../Label";

import { DEFAULT_PADDING } from "../../settings";

const datetime = css`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primaryColor};
  font-size: 0.9rem;
  ${(props) => props.theme.mediaQueries.medium`
  font-size: 1rem;
`}
`;

const CardHeader = styled(StyledCardHeader)`
  justify-content: space-between;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
`;

const DueDate = styled.div`
  ${datetime}
`;

const DueTime = styled.div`
  ${datetime}
`;

const Label = styled(StyledLabel)`
  margin-left: ${DEFAULT_PADDING};
`;

const EventCardHeader = ({ expired = false, dueDate, dueTime }) => {
  return (
    <CardHeader>
      <LeftArea>
        <DueDate>{dueDate}</DueDate>
        <DueTime>{dueTime}</DueTime>
      </LeftArea>
      <RightArea>
        {expired && <Label palette="danger">O evento já ocorreu</Label>}
      </RightArea>
    </CardHeader>
  );
};

export default EventCardHeader;
