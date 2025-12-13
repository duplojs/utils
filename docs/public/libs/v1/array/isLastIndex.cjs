'use strict';

function isLastIndex(...args) {
    if (args.length === 1) {
        const [index] = args;
        return (input) => isLastIndex(input, index);
    }
    const [input, index] = args;
    return (input.length - 1) === index;
}

exports.isLastIndex = isLastIndex;
