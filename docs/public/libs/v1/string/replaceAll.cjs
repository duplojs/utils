'use strict';

function replaceAll(...args) {
    if (args.length === 2) {
        const [pattern, replacement] = args;
        return (input) => replaceAll(input, pattern, replacement);
    }
    const [input, pattern, replacement] = args;
    return input.replaceAll(pattern, replacement);
}

exports.replaceAll = replaceAll;
