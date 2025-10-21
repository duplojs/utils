function assign(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (input) => assign(input, value);
    }
    const [input, value] = args;
    return {
        ...input,
        ...value,
    };
}

export { assign };
