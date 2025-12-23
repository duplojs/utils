function map(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => map(input, theFunction);
    }
    const [input, theFunction] = args;
    return input.map((element, index) => theFunction(element, {
        index,
        self: input,
    }));
}

export { map };
