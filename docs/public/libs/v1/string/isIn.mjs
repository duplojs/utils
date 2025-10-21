function isIn(...args) {
    if (args.length === 1) {
        const [array] = args;
        return (input) => isIn(input, array);
    }
    const [input, array] = args;
    return array.includes(input);
}

export { isIn };
