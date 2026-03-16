async function* asyncFlat(iterator, depth = 1) {
    for await (const value of iterator) {
        if (depth >= 1
            && value
            && typeof value === "object"
            && (Symbol.iterator in value
                || Symbol.asyncIterator in value)) {
            yield* asyncFlat(value, depth - 1);
        }
        else {
            yield value;
        }
    }
}

export { asyncFlat };
