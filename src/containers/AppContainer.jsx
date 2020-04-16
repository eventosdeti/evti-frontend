import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "../components/GlobalStyles";
import HomeContainer from "./views/HomeContainer";

import ToasterContainer from "./ToasterContainer";

import { ToasterProvider } from "../contexts/Toaster";
import { CardsProvider } from "../contexts/Cards";
import { ThemeProvider } from "../contexts/Theme";

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
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/">
              <CardsProvider>
                <HomeContainer />
              </CardsProvider>
            </Route>
          </Switch>
        </Router>
        <ToasterContainer />
      </ThemeProvider>
    </ToasterProvider>
  );
};

export default AppContainer;
