'use strict';

function filter(...args) {
    if (args.length === 1) {
        const [predicate] = args;
        return (array) => filter(array, predicate);
    }
    const [array, predicate] = args;
    return array.filter((item, index) => predicate(item, { index }));
}

exports.filter = filter;
