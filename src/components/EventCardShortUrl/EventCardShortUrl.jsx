import React from "react";
import styled from "styled-components";

import StyledInput from "../Input";

import { DEFAULT_PADDING, pixelToRem } from "../../settings";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled(StyledInput)`
  height: 30px;
  width: 150px;
  font-size: ${pixelToRem(8)};
`;

const Description = styled.p`
  text-transform: uppercase;
  font-size: ${pixelToRem(7)};
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-right: ${DEFAULT_PADDING};
`;

const EventCardShortUrl = ({ shortURL = "" }) => {
  const inputRef = React.useRef();

  const selectText = () => {
    if (inputRef?.current) {
      inputRef.current.select();
    }
  };
  return (
    <Wrapper>
      <Description>Url curta</Description>
      <Input
        ref={inputRef}
        type="text"
        value={shortURL}
        readOnly
        onFocus={selectText}
      />
    </Wrapper>
  );
};

export default EventCardShortUrl;
