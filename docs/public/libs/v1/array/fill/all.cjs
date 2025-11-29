'use strict';

function fillAll(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (array) => fillAll(array, value);
    }
    const [array, value] = args;
    return [...array].fill(value);
}

exports.fillAll = fillAll;
