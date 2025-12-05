function findAndSpliceReplace(...args) {
    if (args.length === 2) {
        const [predicate, elements] = args;
        return (array) => findAndSpliceReplace(array, predicate, elements);
    }
    const [array, predicate, elements] = args;
    for (let index = 0; index < array.length; index++) {
        if (predicate(array[index], { index })) {
            const newArray = [...array];
            newArray.splice(index, elements.length, ...elements);
            return newArray;
        }
    }
    return undefined;
}

export { findAndSpliceReplace };
