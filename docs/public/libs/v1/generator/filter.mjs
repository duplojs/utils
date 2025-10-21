function filter(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (iterator) => filter(iterator, predicate);
    }
    const [iterator, predicate] = args;
    let index = 0;
    return (function* () {
        for (const element of iterator) {
            if (predicate(element, { index })) {
                yield element;
            }
            index++;
        }
    })();
}

export { filter };
