function addBigIntegers(intString) {
    let Sum = BigInt(0);
    intString.split("\n").forEach(Integer => Sum += Number.isSafeInteger(Integer) ? parseInt(Integer) : BigInt(Integer));
    return Sum.toString();
}

export { addBigIntegers };
