import React from "react";

import View from "../../components/View";
import EventCardsContainer from "../EventCardsContainer";

const HomeContainer = () => {
  return (
    <View title="Eventos">
      <EventCardsContainer />
    </View>
  );
};

export default HomeContainer;
