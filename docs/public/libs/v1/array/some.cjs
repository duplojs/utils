'use strict';

function some(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (array) => some(array, predicate);
    }
    const [array, predicate] = args;
    return array.some((element, index) => predicate(element, { index }));
}

exports.some = some;
