'use strict';

function indexOf(...args) {
    if (args.length === 1) {
        const [element] = args;
        return (array) => indexOf(array, element);
    }
    const [array, element, fromIndex] = args;
    // eslint-disable-next-line no-nested-ternary
    const start = fromIndex !== undefined
        ? (fromIndex < 0
            ? Math.max(0, array.length + fromIndex)
            : Math.min(fromIndex, array.length - 1))
        : 0;
    for (let index = start; index < array.length; index++) {
        if (array[index] === element) {
            return index;
        }
    }
    return undefined;
}

exports.indexOf = indexOf;
