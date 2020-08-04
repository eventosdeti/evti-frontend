import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  ${(props) => props.theme.mediaQueries.small`
    ${
      props.size === 1 &&
      `
      font-size: 1.4rem;
  
    `
    }
    ${
      props.size === 2 &&
      `
      font-size: 1rem;
  
    `
    }
  `}
  ${(props) => props.theme.mediaQueries.medium`
    ${
      props.size === 1 &&
      `
      font-size: 1.8rem;
  
    `
    }
    ${
      props.size === 2 &&
      `
      font-size: 1.4rem;
  
    `
    }
    
  `}
  ${(props) => props.theme.mediaQueries.large`
    ${
      props.size === 1 &&
      `
      font-size: 2.4rem;
  
    `
    }
    ${
      props.size === 2 &&
      `
      font-size: 1.8rem;
  
    `
    }
    
  `}
`;

const Title = ({ size = 1, tag = "h1", children, className }) => (
  <Wrapper size={size} as={tag} className={className}>
    {children}
  </Wrapper>
);

export default Title;
