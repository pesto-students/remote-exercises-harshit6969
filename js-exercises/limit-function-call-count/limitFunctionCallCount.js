const limitFunctionCallCount = (func, TotalInvocations) => {
  let CurrentInvocations = 0;
  return function (...args) {
    if(CurrentInvocations < TotalInvocations){
      CurrentInvocations++;
      return func(...args);
    }return null;
  }
};

export {
  limitFunctionCallCount,
};
