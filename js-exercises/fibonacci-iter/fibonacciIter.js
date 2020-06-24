const fibonacciIter = {
  *[Symbol.iterator]() {
    let fn1 = 1;
    let fn2 = 2;
    while (true) {
      let current = fn1;
      fn1 = fn2;
      fn2 = current + fn1;
      yield current;
    }
  },
};
export { fibonacciIter };
