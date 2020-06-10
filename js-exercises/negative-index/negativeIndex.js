const getPositiveIndex = (prop, length) => {
    let Index = Number(prop);
    let PositiveIndex = Index < 0 ? length + Index : Index;
    return PositiveIndex;
}

const Handler = {
    get: (target, prop, receiver) => {
        if (isNaN(Number(prop))) {
            return Reflect.get(target, prop, receiver);
        }
        let PositiveIndex = getPositiveIndex(prop, target.length);
        return target[PositiveIndex];
    },
    set: (target, prop, val, receiver) => {
        let PositiveIndex = getPositiveIndex(prop, target.length);
        return Reflect.set(target, PositiveIndex, val, receiver);
    }
}


function negativeIndex(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Only arrays are supported");
    return new Proxy(arr, Handler);
}

export { negativeIndex };