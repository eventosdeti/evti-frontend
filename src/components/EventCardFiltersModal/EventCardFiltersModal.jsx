import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Modal from "../Modal";
import ModalFooter from "../ModalFooter";
import EventCardFilterSectionsList from "../EventCardFilterSectionsList";

const Footer = styled(ModalFooter)`
  display: flex;
  justify-content: flex-end;
`;

const EventCardFiltersModal = ({
  labels = [],
  selectedLabels = [],
  selectedLabelsKeyed = {},
  selectedPeriod,
  onSelectAllPeriods,
  onSelectMonthPeriod,
  onSelectDayPeriod,
  onSelectLabel,
  onDeselectLabel,
  onApplyFilters,
  ...rest
}) => {
  return (
    <Modal
      title="Filtrar eventos"
      footer={
        <Footer>
          <Button onClick={onApplyFilters}>Aplicar filtros</Button>
        </Footer>
      }
      {...rest}
    >
      <EventCardFilterSectionsList
        labels={labels}
        selectedLabels={selectedLabels}
        selectedLabelsKeyed={selectedLabelsKeyed}
        selectedPeriod={selectedPeriod}
        onSelectAllPeriods={onSelectAllPeriods}
        onSelectMonthPeriod={onSelectMonthPeriod}
        onSelectDayPeriod={onSelectDayPeriod}
        onSelectLabel={onSelectLabel}
        onDeselectLabel={onDeselectLabel}
      />
    </Modal>
  );
};

export default EventCardFiltersModal;
