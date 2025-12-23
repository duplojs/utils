'use strict';

function concat(...args) {
    if (args.length === 1) {
        const [text] = args;
        return (input) => concat(input, text);
    }
    const [input, ...textsRest] = args;
    return input.concat(...textsRest);
}

exports.concat = concat;
