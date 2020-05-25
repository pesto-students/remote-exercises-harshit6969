function diffArray(array1, array2) {
  let ResultSet = new Set(array1);
  for(let element of array2){
    ResultSet.has(element) ? ResultSet.delete(element) : ResultSet.add(element);
  }
  return [...ResultSet];
}

export {
  diffArray,
};
