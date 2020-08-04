const useEventCardDescriptionResume = (desc) => {
  const matched = (desc || "").match(/\[!resumo\]([^\]]+)\[resumo!\]/i);
  return matched && matched[1];
};

export default useEventCardDescriptionResume;
