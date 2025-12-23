'use strict';

function findAndSpliceDelete(...args) {
    if (args.length === 2) {
        const [predicate, deleteCount] = args;
        return (array) => findAndSpliceDelete(array, predicate, deleteCount);
    }
    const [array, predicate, deleteCount] = args;
    for (let index = 0; index < array.length; index++) {
        if (predicate(array[index], { index })) {
            const newArray = [...array];
            newArray.splice(index, deleteCount);
            return newArray;
        }
    }
    return undefined;
}

exports.findAndSpliceDelete = findAndSpliceDelete;
