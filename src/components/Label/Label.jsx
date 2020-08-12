import React from "react";
import styled, { css } from "styled-components";
import { Close } from "@styled-icons/evaicons-solid";

const initial = css`
  color: ${(props) => props.theme.palette.primaryTextColor};
  background-color: ${(props) => props.theme.palette.initialColor};
`;

const primary = css`
  color: ${(props) => props.theme.palette.initialColor};
  background-color: ${(props) => props.theme.palette.primaryColor};
`;

const tertiary = css`
  color: ${(props) => props.theme.palette.tertiaryTextColor};
  background-color: ${(props) => props.theme.palette.initialColor};
  border: 1px solid ${(props) => props.theme.palette.tertiaryTextColor};
`;

const tertiarySelected = css`
  color: #ffffff;
  background-color: ${(props) => props.theme.palette.tertiaryTextColor};
`;

const Wrapper = styled.span`
  display: inline-flex;
  align-items: stretch;
  text-transform: uppercase;
  font-size: 0.8em;
  border-radius: 5px;
  margin: 2px;
  overflow: hidden;
  ${(props) => props.palette === "initial" && initial};
  ${(props) => props.palette === "primary" && primary};
  ${(props) => props.palette === "tertiary" && tertiary};
  ${(props) => props.palette === "tertiarySelected" && tertiarySelected};
`;

const DeleteIconWrapper = styled.span`
  cursor: pointer;
  width: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 90%;
    padding: 2px;
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  padding: 0.2em 0.6em;
  line-height: 1.5em;
  ${(props) =>
    !!props.onClick &&
    `
    cursor: pointer;
  `}
`;

const Label = ({ children, onClick, onClose, palette = "initial" }) => {
  return (
    <Wrapper palette={palette}>
      <Text onClick={onClick}>{children}</Text>
      {onClose && (
        <DeleteIconWrapper onClick={onClose}>
          <Close />
        </DeleteIconWrapper>
      )}
    </Wrapper>
  );
};

export default Label;
