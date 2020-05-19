
function duplicateLetters(...args) {
  let Frequencies = {};
  for(let character of args[0]){
    Frequencies[character] = Frequencies.hasOwnProperty(character) ? Frequencies[character] + 1: 1;
  }
  let MaxFrequency = 0;
  for(let key in Frequencies){
    if(Frequencies[key] > MaxFrequency) MaxFrequency = Frequencies[key];
  }
  if(MaxFrequency > 1){
    return MaxFrequency;
  }
  return false;
}

export {
  duplicateLetters,
};