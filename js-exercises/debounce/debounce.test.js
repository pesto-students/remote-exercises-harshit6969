import { debounce } from "./debounce";
describe("debounce", () => {
  it("should be called only once", () => {
    const spy = jest.fn();
    let debouncedFn = debounce(() => spy, 5000);
    debouncedFn()
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn()
    .then(() => expect(spy).toHaveBeenCalledTimes(1))
  });
});
