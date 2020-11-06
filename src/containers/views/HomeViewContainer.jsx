import React from "react";

import View from "../../components/View";
import EventCardsContainer from "../EventCardsContainer";
import NavBarContainer from "../NavBarContainer";

const HomeViewContainer = () => {
  return (
    <View navBar={<NavBarContainer />}>
      <EventCardsContainer />
    </View>
  );
};

export default HomeViewContainer;
