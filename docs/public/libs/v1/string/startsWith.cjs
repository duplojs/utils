'use strict';

function startsWith(...args) {
    if (args.length === 1) {
        const [searchString] = args;
        return (input) => startsWith(input, searchString);
    }
    const [input, searchString] = args;
    return input.startsWith(searchString);
}

exports.startsWith = startsWith;
