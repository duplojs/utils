function test(...args) {
    if (args.length === 1) {
        const [regExp] = args;
        return (input) => test(input, regExp);
    }
    const [input, regExp] = args;
    return regExp.test(input);
}

export { test };
