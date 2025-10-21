function equal(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (input) => equal(input, value);
    }
    const [input, value] = args;
    return value instanceof Array
        ? value.includes(input)
        : input === value;
}

export { equal };
