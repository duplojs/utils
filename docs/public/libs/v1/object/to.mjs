function to(...args) {
    if (args.length === 1) {
        const [shape] = args;
        return (input) => to(input, shape);
    }
    const [input, shapeObject] = args;
    return Object.entries(shapeObject)
        .reduce((acc, [key, theFunction]) => {
        acc[key] = theFunction?.(input);
        return acc;
    }, {});
}

export { to };
