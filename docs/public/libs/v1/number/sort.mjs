function sort(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sort(array, type);
    }
    const [array, type] = args;
    return [...array].sort(type === "DSC"
        ? (first, second) => second - first
        : (first, second) => first - second);
}

export { sort };
