function transformProperties(...args) {
    if (args.length === 1) {
        const [transformers] = args;
        return (obj) => transformProperties(obj, transformers);
    }
    const [obj, transformObject] = args;
    return Object.entries(transformObject)
        .reduce((acc, [key, theFunction]) => {
        if (theFunction) {
            acc[key] = theFunction(acc[key]);
        }
        return acc;
    }, { ...obj });
}

export { transformProperties };
