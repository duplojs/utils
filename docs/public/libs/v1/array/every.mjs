function every(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (input) => every(input, predicate);
    }
    const [input, predicate] = args;
    return input.every((element, index) => predicate(element, {
        index,
        self: input,
    }));
}

export { every };
