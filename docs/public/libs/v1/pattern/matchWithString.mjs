function matchWithString(...args) {
    if (args.length === 1) {
        const [matcher] = args;
        return (input) => matcher[input](input);
    }
    const [input, matcher] = args;
    return matcher[input](input);
}

export { matchWithString };
