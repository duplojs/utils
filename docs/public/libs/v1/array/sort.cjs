'use strict';

function sort(...args) {
    if (args.length === 1) {
        const [compareFn] = args;
        return (array) => sort(array, compareFn);
    }
    const [array, compareFn] = args;
    return [...array].sort(compareFn);
}

exports.sort = sort;
