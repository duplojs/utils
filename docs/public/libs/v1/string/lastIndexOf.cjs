'use strict';

function lastIndexOf(...args) {
    if (args.length === 1) {
        const [searchString] = args;
        return (input) => lastIndexOf(input, searchString);
    }
    const [input, searchString, position] = args;
    const result = input.lastIndexOf(searchString, position);
    return result === -1 ? undefined : result;
}

exports.lastIndexOf = lastIndexOf;
