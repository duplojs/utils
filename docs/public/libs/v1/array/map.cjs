'use strict';

function map(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (array) => map(array, theFunction);
    }
    const [array, theFunction] = args;
    return array.map((element, index) => theFunction(element, { index }));
}

exports.map = map;
