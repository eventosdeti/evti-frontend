import { css } from "styled-components";
import { pixelToRem } from "../../settings";

export const wrapperBase = css`
  text-transform: uppercase;
  font-weight: bold;
`;

export const size = css`
  ${(props) =>
    props.size === 1 &&
    `
    font-size: ${pixelToRem(14)};
  `}
  ${(props) =>
    props.size === 2 &&
    `
    font-size: ${pixelToRem(10)};
  `}
  ${(props) =>
    props.size === 3 &&
    `
    font-size: ${pixelToRem(8)};
  `}

  ${(props) => props.theme.mediaQueries.medium`
    ${
      props.size === 1 &&
      `
      font-size: ${pixelToRem(18)};`
    }
    ${
      props.size === 2 &&
      `
      font-size: ${pixelToRem(14)};
    `
    }
    ${
      props.size === 3 &&
      `
      font-size: ${pixelToRem(10)};
    `
    }

  `}
  ${(props) => props.theme.mediaQueries.large`
    ${
      props.size === 1 &&
      `
      font-size: ${pixelToRem(24)};
    `
    }
    ${
      props.size === 2 &&
      `
      font-size: ${pixelToRem(18)};
    `
    }

  `}
`;
