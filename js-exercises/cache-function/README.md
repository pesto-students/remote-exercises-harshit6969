# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

1. Repeated calls for authentication in a short period of time
2. Configurations can be cached(Can be refreshed explicitly)
3. Browser cache

### **What *extra* test cases can you add to the test file?**

1. Test cases for validating arrays
2. Test cases for validating objects
