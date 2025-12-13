'use strict';

function some(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (input) => some(input, predicate);
    }
    const [input, predicate] = args;
    return input.some((element, index) => predicate(element, {
        index,
        self: input,
    }));
}

exports.some = some;
