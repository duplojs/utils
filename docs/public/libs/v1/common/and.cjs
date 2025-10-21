'use strict';

function and(...args) {
    if (args.length === 1) {
        const [predicatedList] = args;
        return (input) => and(input, predicatedList);
    }
    const [input, predicatedList] = args;
    for (const predicate of predicatedList) {
        if (!predicate(input)) {
            return false;
        }
    }
    return true;
}

exports.and = and;
