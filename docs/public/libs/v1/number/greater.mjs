function greater(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (value) => greater(value, threshold);
    }
    const [value, threshold] = args;
    return value >= threshold;
}

export { greater };
