function endsWith(...args) {
    if (args.length === 1) {
        const [searchString] = args;
        return (input) => endsWith(input, searchString);
    }
    const [input, searchString] = args;
    return input.endsWith(searchString);
}

export { endsWith };
