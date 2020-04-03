const useFormatText = text => {
  return (text && text.replace(/(.*)(?:\r\n|\r|\n)*/g, "<p>$1</p>")) || text;
};

export default useFormatText;
