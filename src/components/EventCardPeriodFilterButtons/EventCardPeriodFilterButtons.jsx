import React from "react";
import styled from "styled-components";
import { Filter } from "@styled-icons/boxicons-regular";

import Button from "../Button";
import IconButton from "../IconButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const EventCardPeriodFilterButtons = ({
  period,
  onViewAll,
  onViewCurrentMonth,
  onViewCurrentDay,
  onEditFilters,
  buttonsSize = "small",
  filtered = false,
  disabled = false,
}) => {
  const showAll = period === "all";
  const showCurrentMonth = period === "month";
  const showCurrentDay = period === "day";

  return (
    <Wrapper>
      <Button
        size={buttonsSize}
        palette={`${(showCurrentDay && "primary") || "initial"}`}
        onClick={onViewCurrentDay}
        disabled={disabled}
      >
        Hoje
      </Button>
      <Button
        size={buttonsSize}
        palette={`${(showCurrentMonth && "primary") || "initial"}`}
        onClick={onViewCurrentMonth}
        disabled={disabled}
      >
        Este mês
      </Button>
      <Button
        size={buttonsSize}
        palette={`${(showAll && "primary") || "initial"}`}
        onClick={onViewAll}
        disabled={disabled}
      >
        Tudo
      </Button>

      {onEditFilters && (
        <IconButton
          palette={(filtered && "primary") || "initial"}
          size={buttonsSize}
          icon={<Filter />}
          onClick={onEditFilters}
          disabled={disabled}
        />
      )}
    </Wrapper>
  );
};

export default React.memo(EventCardPeriodFilterButtons);
