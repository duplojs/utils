function whenNot(...args) {
    if (args.length === 2) {
        const [ifFunction, theFunction] = args;
        return (input) => whenNot(input, ifFunction, theFunction);
    }
    const [input, ifFunction, theFunction] = args;
    if (!ifFunction(input)) {
        return theFunction(input);
    }
    return input;
}

export { whenNot };
