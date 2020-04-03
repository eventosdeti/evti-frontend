import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "../components/GlobalStyles";
import HomeContainer from "./views/HomeContainer";

import ToasterContainer from "./ToasterContainer";

import { ToasterProvider } from "../contexts/Toaster";
import { CardsProvider } from "../contexts/Cards";
import { ThemeProvider } from "../contexts/Theme";

const AppContainer = () => (
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

export default AppContainer;
