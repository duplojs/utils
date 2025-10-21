'use strict';

function push(...args) {
    if (args.length === 1) {
        const [item] = args;
        return (array) => push(array, item);
    }
    const [array, ...items] = args;
    return [...array, ...items];
}

exports.push = push;
