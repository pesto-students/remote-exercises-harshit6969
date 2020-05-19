function isPrime(Number){
  for(let Start=2; Start <= Math.sqrt(Number); Start++){
    if(Number % Start == 0) return false;
  }
  return true;
}

function sumPrimes(Limit) {
  let Sum = 0;
  for(let Start=2; Start<=Limit; Start++){
    if(isPrime(Start)) Sum += Start;
  }
  return Sum;
}

export {
  sumPrimes,
};
