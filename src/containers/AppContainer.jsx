import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "../components/GlobalStyles";

import CardViewContainer from "./views/CardViewContainer";
import HomeViewContainer from "./views/HomeViewContainer";

import ToasterContainer from "./ToasterContainer";
import EventCardFiltersModalContainer from "./EventCardFiltersModalContainer";

import { ToasterProvider } from "../contexts/Toaster";
import { EventCardsProvider } from "../contexts/EventCards";
import { ThemeProvider } from "../contexts/Theme";
import { EventCardFiltersModalProvider } from "../contexts/EventCardFiltersModal";

import { EVENT_DETAILS } from "../routes";

const { REACT_APP_GA, NODE_ENV } = process.env;

const AppContainer = () => {
  React.useEffect(() => {
    if (REACT_APP_GA && NODE_ENV !== "development") {
      ReactGA.initialize(REACT_APP_GA);
      ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
    }
  }, []);
  return (
    <ToasterProvider>
      <ThemeProvider>
        <EventCardsProvider>
          <EventCardFiltersModalProvider>
            <GlobalStyles />
            <Router>
              <Switch>
                <Route exact path="/">
                  <HomeViewContainer />
                </Route>
                <Route path={EVENT_DETAILS}>
                  <CardViewContainer />
                </Route>
              </Switch>
            </Router>
            <ToasterContainer />
            <EventCardFiltersModalContainer />
          </EventCardFiltersModalProvider>
        </EventCardsProvider>
      </ThemeProvider>
    </ToasterProvider>
  );
};

export default AppContainer;
