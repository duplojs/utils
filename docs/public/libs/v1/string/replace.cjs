'use strict';

function replace(...args) {
    if (args.length === 2) {
        const [pattern, replacement] = args;
        return (input) => replace(input, pattern, replacement);
    }
    const [input, pattern, replacement] = args;
    return input.replace(pattern, replacement);
}

exports.replace = replace;
