'use strict';

function concat(...args) {
    if (args.length === 1) {
        const [elements] = args;
        return (array) => concat(array, elements);
    }
    const [array, elements, ...elementsRest] = args;
    return array.concat(elements, ...elementsRest);
}

exports.concat = concat;
