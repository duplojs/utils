function whenElse(...args) {
    if (args.length === 3) {
        const [ifFunction, theFunction, elseFunction] = args;
        return (input) => whenElse(input, ifFunction, theFunction, elseFunction);
    }
    const [input, ifFunction, theFunction, elseFunction] = args;
    if (ifFunction(input)) {
        return theFunction(input);
    }
    else {
        return elseFunction(input);
    }
}

export { whenElse };
