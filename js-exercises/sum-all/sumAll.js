function sumAll(arr) {
  let Maximum = Math.max(arr[0], arr[1]);
  let Minimum = Math.min(arr[0], arr[1]);
  return ((Maximum * (Maximum + 1)) / 2) - (((Minimum - 1) * Minimum) / 2);
}

export {
  sumAll,
};
