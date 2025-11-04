'use strict';

function slice(...args) {
    if (!Array.isArray(args[0])) {
        const [start, end] = args;
        return (array) => slice(array, start, end);
    }
    const [array, start, end] = args;
    return array.slice(start, end);
}

exports.slice = slice;
