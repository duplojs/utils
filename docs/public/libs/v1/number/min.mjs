function min(...args) {
    if (args.length === 1) {
        const [comparison] = args;
        return (value) => min(value, comparison);
    }
    const [value, comparison] = args;
    return Math.min(value, comparison);
}

export { min };
