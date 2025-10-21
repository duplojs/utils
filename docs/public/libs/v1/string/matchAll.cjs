'use strict';

function matchAll(...args) {
    if (args.length === 1) {
        const [pattern] = args;
        return (input) => matchAll(input, pattern);
    }
    const [input, pattern] = args;
    return input.matchAll(pattern);
}

exports.matchAll = matchAll;
