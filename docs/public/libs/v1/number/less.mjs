function less(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (value) => less(value, threshold);
    }
    const [value, threshold] = args;
    return value <= threshold;
}

export { less };
