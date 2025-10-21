function subtract(...args) {
    if (args.length === 1) {
        const [subtrahend] = args;
        return (value) => subtract(value, subtrahend);
    }
    const [value, subtrahend] = args;
    return value - subtrahend;
}

export { subtract };
