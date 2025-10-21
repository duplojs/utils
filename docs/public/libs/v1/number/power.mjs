function power(...args) {
    if (args.length === 1) {
        const [exponent] = args;
        return (value) => power(value, exponent);
    }
    const [value, exponent] = args;
    return value ** exponent;
}

export { power };
