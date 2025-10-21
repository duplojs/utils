function add(...args) {
    if (args.length === 1) {
        const [operand] = args;
        return (value) => add(value, operand);
    }
    const [value, operand] = args;
    return value + operand;
}

export { add };
