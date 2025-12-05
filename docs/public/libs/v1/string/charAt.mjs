function charAt(...args) {
    if (args.length === 1) {
        const [index] = args;
        return (input) => charAt(input, index);
    }
    const [input, index] = args;
    return input.charAt(index);
}

export { charAt };
