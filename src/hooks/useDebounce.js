import { useEffect, useState } from "react";
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [setDebouncedValue, value, delay]);

  return debouncedValue;
};

export default useDebounce;
