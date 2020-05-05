import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChangeViewButton = ({
  view,
  viewTypes,
  onViewAll,
  onViewCurrentMonth,
  onViewCurrentDay,
}) => {
  const showAll = React.useMemo(() => view === viewTypes.ALL.key, [
    view,
    viewTypes,
  ]);
  const showCurrentMonth = React.useMemo(
    () => view === viewTypes.CURRENT_MONTH.key,
    [view, viewTypes]
  );
  const showCurrentDay = React.useMemo(
    () => view === viewTypes.CURRENT_DAY.key,
    [view, viewTypes]
  );

  return (
    <Wrapper>
      <Button
        palette={`${(showAll && "primary") || "initial"}`}
        onClick={onViewAll}
      >
        Tudo
      </Button>
      <Button
        palette={`${(showCurrentDay && "primary") || "initial"}`}
        onClick={onViewCurrentDay}
      >
        Hoje
      </Button>
      <Button
        palette={`${(showCurrentMonth && "primary") || "initial"}`}
        onClick={onViewCurrentMonth}
      >
        Este mês
      </Button>
    </Wrapper>
  );
};

export default ChangeViewButton;
