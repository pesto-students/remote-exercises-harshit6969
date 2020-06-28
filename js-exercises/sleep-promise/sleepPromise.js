const sleep = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    })
};


export { sleep };
