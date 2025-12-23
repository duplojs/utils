'use strict';

function filter(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (input) => filter(input, predicate);
    }
    const [input, predicate] = args;
    return input.filter((item, index) => predicate(item, {
        index,
        self: input,
    }));
}

exports.filter = filter;
