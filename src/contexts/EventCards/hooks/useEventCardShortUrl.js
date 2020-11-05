import { useState, useEffect } from "react";
import { generatePath } from "react-router-dom";

import { EVENT_DETAILS } from "../../../routes";

const { REACT_APP_PUBLIC_URL } = process.env;

const useEventCardShortUrl = (shortLink = "") => {
  const [shortUrl, setShortUrl] = useState("");
  useEffect(() => {
    try {
      const path = generatePath(EVENT_DETAILS, {
        shortLink,
      });
      setShortUrl(`${REACT_APP_PUBLIC_URL}${path}`);
    } catch (e) {
      console.log(e);
    }
  }, [shortLink]);

  return shortUrl;
};

export default useEventCardShortUrl;
