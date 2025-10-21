function asyncMap(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (iterator) => asyncMap(iterator, theFunction);
    }
    const [iterator, theFunction] = args;
    let index = 0;
    return (async function* () {
        for await (const element of iterator) {
            yield theFunction(element, { index });
            index++;
        }
    })();
}

export { asyncMap };
