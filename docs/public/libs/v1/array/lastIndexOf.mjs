function lastIndexOf(...args) {
    if (args.length === 1) {
        const [element] = args;
        return (array) => lastIndexOf(array, element);
    }
    const [array, element, fromIndex] = args;
    // eslint-disable-next-line no-nested-ternary
    const start = fromIndex !== undefined
        ? (fromIndex < 0
            ? Math.max(0, array.length + fromIndex)
            : Math.min(fromIndex, array.length - 1))
        : array.length - 1;
    for (let index = start; index >= 0; index--) {
        if (array[index] === element) {
            return index;
        }
    }
    return undefined;
}

export { lastIndexOf };
