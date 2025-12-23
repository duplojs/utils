'use strict';

function flatMap(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => flatMap(input, theFunction);
    }
    const [input, theFunction] = args;
    return input.flatMap((element, index) => theFunction(element, {
        index,
        self: input,
    }));
}

exports.flatMap = flatMap;
