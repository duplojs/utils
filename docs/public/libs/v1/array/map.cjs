'use strict';

function map(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (array) => map(array, theFunction);
    }
    const [array, theFunction] = args;
    return array.map((item, index) => theFunction(item, { index }));
}

exports.map = map;
