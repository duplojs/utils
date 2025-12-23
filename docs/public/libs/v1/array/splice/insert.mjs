function spliceInsert(...args) {
    if (args.length === 2) {
        const [indexFrom, elements] = args;
        return (array) => spliceInsert(array, indexFrom, elements);
    }
    const [array, indexFrom, elements] = args;
    const copy = [...array];
    copy.splice(indexFrom, 0, ...elements);
    return copy;
}

export { spliceInsert };
