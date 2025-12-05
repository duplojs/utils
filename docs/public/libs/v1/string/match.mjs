function match(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => match(input, pattern);
    }
    const [input, pattern] = args;
    const result = input.match(pattern);
    return result ? result : undefined;
}

export { match };
