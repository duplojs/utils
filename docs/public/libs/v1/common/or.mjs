function or(...args) {
    if (args.length === 1) {
        const [predicatedList] = args;
        return (input) => or(input, predicatedList);
    }
    const [input, predicatedList] = args;
    for (const predicate of predicatedList) {
        if (predicate(input)) {
            return true;
        }
    }
    return false;
}

export { or };
