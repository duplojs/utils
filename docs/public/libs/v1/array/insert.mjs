function insert(...args) {
    if (args.length === 1) {
        const [array] = args;
        return (input) => insert(input, array);
    }
    const [input, array] = args;
    return [...array, input];
}

export { insert };
