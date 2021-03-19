import React from "react";
import styled from "styled-components";

import Card from "../Card";
import Title from "../Title";

const Wrapper = styled(Card)`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled(Title)`
  text-transform: unset;
  font-weight: normal;
`;

const NoEventsCard = ({
  title = "Evento não encontrado",
  description = "O evento foi removido ou não existe",
}) => (
  <Wrapper>
    {title && (
      <Title size={2} as="h2">
        {title}
      </Title>
    )}
    {description && (
      <Description size={3} forwardedAs="h3">
        {description}
      </Description>
    )}
  </Wrapper>
);

export default NoEventsCard;
