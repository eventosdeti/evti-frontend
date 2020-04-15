import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import Card from "../Card";
import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";

import Title from "../Title";
import Button from "../Button";

const Header = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primaryColor};
  font-size: 0.7rem;
  ${(props) => props.theme.mediaQueries.medium`
    font-size: 1rem;
  `}
`;

const EventCard = ({ name, due, desc, moreInfoUrl }) => {
  return (
    <Card>
      <Header>
        <Date>{due}</Date>
      </Header>
      <Title title={name} size={1} />

      <div dangerouslySetInnerHTML={{ __html: desc }} />
      <CardFooter>
        <Button size="small" as="a" href={moreInfoUrl}>
          Mais informações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
