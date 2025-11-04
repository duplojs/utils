function spliceReplace(...args) {
    if (args.length === 2) {
        const [indexFrom, elements] = args;
        return (array) => spliceReplace(array, indexFrom, elements);
    }
    const [array, indexFrom, elements] = args;
    const copy = [...array];
    copy.splice(indexFrom, elements.length, ...elements);
    return copy;
}

export { spliceReplace };
