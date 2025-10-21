function slice(...args) {
    if (args.length === 2) {
        const [start, end] = args;
        return (input) => slice(input, start, end);
    }
    const [input, start, end] = args;
    return input.slice(start, end);
}

export { slice };
