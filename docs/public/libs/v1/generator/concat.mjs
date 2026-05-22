function concat(...args) {
    if (args.length === 1) {
        const [elements] = args;
        return (iterator) => concat(iterator, elements);
    }
    const [iterator, elements, ...elementsRest] = args;
    return (function* () {
        yield* iterator;
        yield* elements;
        for (const value of elementsRest) {
            yield* value;
        }
    })();
}

export { concat };
