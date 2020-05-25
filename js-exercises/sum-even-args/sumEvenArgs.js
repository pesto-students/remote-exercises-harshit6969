function sumEvenArgs(){
  let SumOfEvenArg = 0;
  for(let arg of arguments){
    if(arg % 2 == 0) SumOfEvenArg += arg;
  }
  return SumOfEvenArg;
};

export { sumEvenArgs };
