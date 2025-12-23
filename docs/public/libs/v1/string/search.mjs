function search(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => search(input, pattern);
    }
    const [input, pattern] = args;
    const result = input.search(pattern);
    return result === -1 ? undefined : result;
}

export { search };
