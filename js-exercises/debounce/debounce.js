function debounce(func, timeInMs) {
  let timeout;
  return async function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), timeInMs);
  };
}

export { debounce };
