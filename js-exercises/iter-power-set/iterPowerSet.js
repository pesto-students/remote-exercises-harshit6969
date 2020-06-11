function* subsets(set, offset = 0) {
  while (offset < set.size) {
    let first = [...set][offset++];
    let subset = new Set();
    for (subset of subsets(set, offset)) {
      subset.add(first);
      yield subset;
    }
  }
  yield new Set([]);
}

function iterPowerSet(set) {
  let PowerSet = new Set();
  for (let subset of subsets(set)) {
    PowerSet.add(subset);
  }
  return PowerSet;
}
export {
  iterPowerSet,
};