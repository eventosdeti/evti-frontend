const useMoreInfo = text => {
  const matched = (text || "").match(/\[!maisInfo=([^\]]+)\]/i);
  return matched && matched[1];
};

export default useMoreInfo;
