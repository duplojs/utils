function findIndex(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (array) => findIndex(array, predicate);
    }
    const [array, predicate] = args;
    for (let index = 0; index < array.length; index++) {
        if (predicate(array[index], { index })) {
            return index;
        }
    }
    return undefined;
}

export { findIndex };
