function map(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (iterator) => map(iterator, theFunction);
    }
    const [iterator, theFunction] = args;
    let index = 0;
    return (function* () {
        for (const element of iterator) {
            yield theFunction(element, { index });
            index++;
        }
    })();
}

export { map };
