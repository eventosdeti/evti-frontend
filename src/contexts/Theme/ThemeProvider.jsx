import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { mediaQueries, palette } from "../../settings";

const ThemeProvider = ({ children }) => {
  const theme = { mediaQueries, palette };
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
