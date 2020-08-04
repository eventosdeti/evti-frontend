import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "../components/GlobalStyles";

import HomeContainer from "./views/HomeContainer";
import ToasterContainer from "./ToasterContainer";
import EventCardFiltersModalContainer from "./EventCardFiltersModalContainer";

import { ToasterProvider } from "../contexts/Toaster";
import { EventCardsProvider } from "../contexts/EventCards";
import { ThemeProvider } from "../contexts/Theme";
import { EventCardFiltersModalProvider } from "../contexts/EventCardFiltersModal";

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
                  <HomeContainer />
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
