function findLast(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (input) => findLast(input, predicate);
    }
    const [input, predicate] = args;
    for (let index = input.length - 1; index >= 0; index--) {
        const item = input[index];
        if (predicate(item, { index })) {
            return item;
        }
    }
    return undefined;
}

export { findLast };
