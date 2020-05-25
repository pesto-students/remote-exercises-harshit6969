function chunkArrayInGroups(array, chunkSize) {
  let chunks = [], iterator = 0;
  while(iterator < array.length){
    chunks.push(array.slice(iterator, iterator += chunkSize))
  }
  return chunks;
}

export {
  chunkArrayInGroups,
};
