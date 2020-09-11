import React from "react";
import styled, { css } from "styled-components";

const orientation = css`
  ${(props) => {
    if (props.orientation === "vertical") {
      return `
      flex-direction: column;
     `;
    }
    return `
    flex-direction: row;
   `;
  }}
`;

const SVGorientation = css`
  ${(props) => {
    if (props.orientation === "horizontal") {
      return `
      margin-right: 5px;
     `;
    }
  }}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 40px;
  padding: 0 15px;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.initialColor};
  box-shadow: 0 0 15px ${(props) => props.theme.palette.initialColor};
  ${orientation};
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: 0.7em;
`;

const SVG = styled.svg`
  fill: ${(props) => props.color || props.theme.palette.primaryColor};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
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
