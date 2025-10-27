function lessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (value) => lessThan(value, threshold);
    }
    const [value, threshold] = args;
    return value < threshold;
}

export { lessThan };
