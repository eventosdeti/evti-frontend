const useResume = text => {
  const matched = (text || "").match(/\[!resumo\]([^\]]+)\[resumo!\]/i);
  return matched && matched[1];
};

export default useResume;
