'use strict';

function every(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (array) => every(array, predicate);
    }
    const [array, predicate] = args;
    return array.every((element, index) => predicate(element, { index }));
}

exports.every = every;
