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
  selectedPeriod,
  filteredByLabels = false,
  disabled = false,
  buttonsSize = "small",
  onSelectAllPeriods,
  onSelectMonthPeriod,
  onSelectDayPeriod,
  onEditFilters,
}) => {
  const palette = (bool) => (bool && "primary") || "initial";

  return (
    <Wrapper>
      <Button
        size={buttonsSize}
        palette={palette(selectedPeriod === "day")}
        onClick={onSelectDayPeriod}
        disabled={disabled}
      >
        Hoje
      </Button>
      <Button
        size={buttonsSize}
        palette={palette(selectedPeriod === "month")}
        onClick={onSelectMonthPeriod}
        disabled={disabled}
      >
        Este mês
      </Button>
      <Button
        size={buttonsSize}
        palette={palette(selectedPeriod === "all")}
        onClick={onSelectAllPeriods}
        disabled={disabled}
      >
        Tudo
      </Button>

      {onEditFilters && (
        <IconButton
          palette={palette(filteredByLabels)}
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
