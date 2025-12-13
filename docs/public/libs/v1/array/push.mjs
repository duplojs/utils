function push(...args) {
    if (args.length === 1) {
        const [item] = args;
        return (input) => push(input, item);
    }
    const [input, ...items] = args;
    return [...input, ...items];
}

export { push };
