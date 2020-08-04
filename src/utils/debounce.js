const debounce = (func, wait = 600, immediate) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

export default debounce;
