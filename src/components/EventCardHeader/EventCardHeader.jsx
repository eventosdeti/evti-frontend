import React from "react";
import styled, { css } from "styled-components";

import StyledCardHeader from "../CardHeader";

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

const EventCardHeader = ({ dueDate, dueTime }) => {
  return (
    <CardHeader>
      <LeftArea>
        <DueDate>{dueDate}</DueDate>
      </LeftArea>
      <RightArea>
        <DueTime>{dueTime}</DueTime>
      </RightArea>
    </CardHeader>
  );
};

export default EventCardHeader;
