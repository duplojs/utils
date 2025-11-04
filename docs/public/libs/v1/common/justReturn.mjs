function justReturn(...args) {
    if (args.length === 1) {
        const [value] = args;
        return () => justReturn(undefined, value);
    }
    const [, value] = args;
    return value;
}

export { justReturn };
