'use strict';

function includes(...args) {
    if (args.length === 1) {
        const [searchString] = args;
        return (input) => includes(input, searchString);
    }
    const [input, searchString] = args;
    return input.includes(searchString);
}

exports.includes = includes;
