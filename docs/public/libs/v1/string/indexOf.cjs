'use strict';

function indexOf(...args) {
    if (args.length === 1) {
        const [searchString] = args;
        return (input) => indexOf(input, searchString);
    }
    const [input, searchString, position] = args;
    const result = input.indexOf(searchString, position);
    return result === -1 ? undefined : result;
}

exports.indexOf = indexOf;
