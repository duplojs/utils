function toFixed(...args) {
    if (args.length === 1) {
        const [digits] = args;
        return (value) => toFixed(value, digits);
    }
    const [value, digits] = args;
    return value.toFixed(digits);
}

export { toFixed };
