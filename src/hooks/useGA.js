import ReactGA from "react-ga";
import { useEffect } from "react";

const { REACT_APP_GA, NODE_ENV } = process.env;

const useGA = () => {
  useEffect(() => {
    if (REACT_APP_GA) {
      ReactGA.initialize("163717305");
      ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
    }
  }, []);
  return {
    ReactGA,
  };
};

export default useGA;
