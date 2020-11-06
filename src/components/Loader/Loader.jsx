import React from "react";
import styled from "styled-components";

import {
  wrapperBase,
  orientation,
  titleBase,
  svgBase,
  SVGorientation,
} from "./styles";

const Wrapper = styled.div`
  ${wrapperBase};
  ${orientation};
`;

const Title = styled.p`
  ${titleBase};
`;

const SVG = styled.svg`
  ${svgBase};
  ${SVGorientation};
`;

const Loader = ({
  title = "Carregando...",
  orientation = "horizontal",
  size = 24,
  color,
  className,
}) => (
  <Wrapper orientation={orientation} className={className}>
    <SVG
      size={size}
      viewBox="0 0 34 34"
      color={color}
      orientation={orientation}
    >
      <path
        opacity=".25"
        d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
      />
      <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </SVG>
    <Title>{title}</Title>
  </Wrapper>
);

export default Loader;
