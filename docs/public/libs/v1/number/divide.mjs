function divide(...args) {
    if (args.length === 1) {
        const [divisor] = args;
        return (value) => divide(value, divisor);
    }
    const [value, divisor] = args;
    return value / divisor;
}

export { divide };
