const useEventCardMoreInfoURL = (desc) => {
  const matched = (desc || "").match(/\[!maisInfo=([^\]]+)\]/i);
  return matched && matched[1];
};

export default useEventCardMoreInfoURL;
