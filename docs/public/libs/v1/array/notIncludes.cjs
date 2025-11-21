'use strict';

function notIncludes(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (array) => notIncludes(array, value);
    }
    const [array, value] = args;
    return !array.includes(value);
}

exports.notIncludes = notIncludes;
