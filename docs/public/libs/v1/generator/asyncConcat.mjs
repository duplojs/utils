function asyncConcat(...args) {
    if (args.length === 1) {
        const [elements] = args;
        return (iterator) => asyncConcat(iterator, elements);
    }
    const [iterator, elements, ...elementsRest] = args;
    return (async function* () {
        yield* iterator;
        yield* elements;
        for (const value of elementsRest) {
            yield* value;
        }
    })();
}

export { asyncConcat };
