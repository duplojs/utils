function flat(...args) {
    if (args.length === 0) {
        return (array) => flat(array);
    }
    if (args.length === 1) {
        const [depthOrArray] = args;
        if (Array.isArray(depthOrArray)) {
            return depthOrArray.flat(1);
        }
        const depth = depthOrArray;
        return (array) => flat(array, depth);
    }
    const [array, depth] = args;
    return array.flat(depth);
}

export { flat };
