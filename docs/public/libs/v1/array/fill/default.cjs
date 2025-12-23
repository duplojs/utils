'use strict';

function fill(...args) {
    if (args.length === 3) {
        const [value, start, end] = args;
        return (array) => fill(array, value, start, end);
    }
    const [array, value, start, end] = args;
    return [...array].fill(value, start, end);
}

exports.fill = fill;
