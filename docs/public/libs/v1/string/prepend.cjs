'use strict';

function prepend(...args) {
    if (args.length === 1) {
        const [text] = args;
        return (input) => prepend(input, text);
    }
    const [input, ...textsRest] = args;
    return "".concat(...textsRest, input);
}

exports.prepend = prepend;
