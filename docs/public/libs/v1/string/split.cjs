'use strict';

function split(...args) {
    if (args.length === 1) {
        const [separator] = args;
        return (input) => split(input, separator);
    }
    const [input, separator, params] = args;
    return input.split(separator, params?.limit);
}

exports.split = split;
