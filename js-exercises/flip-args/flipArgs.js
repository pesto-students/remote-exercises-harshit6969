function flipArgs(func) {
    return function (...args) {
        return func(...(args.reverse()));
    }
}
export {
    flipArgs
};