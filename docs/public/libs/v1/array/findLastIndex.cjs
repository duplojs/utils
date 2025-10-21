'use strict';

function findLastIndex(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (array) => findLastIndex(array, predicate);
    }
    const [array, predicate] = args;
    for (let index = array.length - 1; index >= 0; index--) {
        const item = array[index];
        if (predicate(item, { index })) {
            return index;
        }
    }
    return undefined;
}

exports.findLastIndex = findLastIndex;
