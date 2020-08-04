import React from "react";
import styled from "styled-components";

import Modal from "../Modal";
import ModalFooter from "../ModalFooter";

const Footer = styled(ModalFooter)`
  display: flex;
  justify-content: flex-end;
`;

const EventCardFiltersModal = ({
  filterSectionsList,
  applyFiltersButton,
  ...rest
}) => {
  return (
    <Modal
      title="Filtrar eventos"
      {...rest}
      footer={<Footer>{applyFiltersButton}</Footer>}
    >
      {filterSectionsList}
    </Modal>
  );
};

export default EventCardFiltersModal;
