function at(...args) {
    if (args.length === 1) {
        const [index] = args;
        return (input) => at(input, index);
    }
    const [input, index] = args;
    return input.at(index);
}

export { at };
