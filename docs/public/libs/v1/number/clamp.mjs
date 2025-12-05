function clamp(...args) {
    if (args.length === 2) {
        const [lowerBound, upperBound] = args;
        return (value) => clamp(value, lowerBound, upperBound);
    }
    const [value, lowerBound, upperBound] = args;
    const lower = Math.min(lowerBound, upperBound);
    const upper = Math.max(lowerBound, upperBound);
    return Math.min(Math.max(value, lower), upper);
}

export { clamp };
