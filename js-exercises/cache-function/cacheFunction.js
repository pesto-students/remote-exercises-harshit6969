function cacheFunction(func) {
  let cache = {}
  return function (...args) {
    let CacheKey = JSON.stringify(...args);
    if (cache.hasOwnProperty(CacheKey)) return cache[CacheKey];
    let result = func(...args);
    cache[CacheKey] = result;
    return result;
  }
}

export {
  cacheFunction,
};
