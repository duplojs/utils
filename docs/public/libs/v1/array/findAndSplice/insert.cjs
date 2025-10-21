'use strict';

function findAndSpliceInsert(...args) {
    if (args.length === 2) {
        const [predicate, elements] = args;
        return (array) => findAndSpliceInsert(array, predicate, elements);
    }
    const [array, predicate, elements] = args;
    for (let index = 0; index < array.length; index++) {
        if (predicate(array[index], { index })) {
            const newArray = [...array];
            newArray.splice(index, 0, ...elements);
            return newArray;
        }
    }
    return undefined;
}

exports.findAndSpliceInsert = findAndSpliceInsert;
