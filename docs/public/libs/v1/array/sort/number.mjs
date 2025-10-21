function sortNumber(...args) {
    if (args.length === 1) {
        const [sort] = args;
        return (array) => sortNumber(array, sort);
    }
    const [array, sort] = args;
    return [...array].sort(sort === "dsc"
        ? (first, second) => second - first
        : (first, second) => first - second);
}

export { sortNumber };
