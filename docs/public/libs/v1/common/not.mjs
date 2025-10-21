function not(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (input) => not(input, predicate);
    }
    const [input, predicate] = args;
    return !predicate(input);
}

export { not };
