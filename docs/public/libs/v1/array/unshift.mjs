function unshift(...args) {
    if (args.length === 1) {
        const [element] = args;
        return (array) => unshift(array, element);
    }
    const [array, ...elements] = args;
    return [...elements, ...array];
}

export { unshift };
