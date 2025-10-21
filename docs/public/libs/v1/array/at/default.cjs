'use strict';

function at(...args) {
    if (args.length === 1) {
        const [index] = args;
        return (array) => at(array, index);
    }
    const [input, index] = args;
    return input.at(index);
}

exports.at = at;
