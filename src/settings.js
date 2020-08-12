import { css } from "styled-components";

export const FONT_BASE = "'10";
export const pixelToRem = (px, base = FONT_BASE) => `${(1 / base) * px}rem`;

export const DEFAULT_PADDING = "15px";

export const GREY_LIGHTER_COLOR = "#e1e1e1";
export const GREY_DARKER_COLOR = "#333";
export const BLACK_COLOR = "#1c2124";

export const mediaSizes = {
  small: "screen and (max-width: 39.9375rem)",
  medium: "screen and (min-width: 40rem)",
  mediumOnly: "screen and (min-width: 40rem) and (max-width: 63.9375rem)",
  large: "screen and (min-width: 64rem)",
  largeOnly: "screen and (min-width: 64rem) and (max-width: 74.9375rem)",
};

export const mediaQueries = Object.keys(mediaSizes).reduce((acc, size) => {
  acc[size] = (strings, ...interpolations) => css`
    @media ${mediaSizes[size]} {
      ${css(strings, ...interpolations)};
    }
  `;
  return acc;
}, {});

export const palette = {
  initialColor: GREY_LIGHTER_COLOR,
  primaryColor: "#0079bf",
  secondaryColor: "#00ca64",
  tertiaryColor: BLACK_COLOR,
  primaryTextColor: GREY_DARKER_COLOR,
  secondaryTextColor: GREY_LIGHTER_COLOR,
  tertiaryTextColor: "#993399",
};
