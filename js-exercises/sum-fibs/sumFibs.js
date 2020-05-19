function sumFibs(Limit) {
  let Start = 1;
  let Next = 1;
  let Sum = 2;
  while(Next <= Limit){
    let Temp = Start;
    Start = Next;
    Next += Temp;
    if(Next <= Limit && Next % 2 != 0) Sum += Next;
  }
  return Sum;
}

export {
  sumFibs,
};
