function find(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (array) => find(array, predicate);
    }
    const [array, predicate] = args;
    return array.find((element, index) => predicate(element, { index }));
}

export { find };
