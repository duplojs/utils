'use strict';

function flatMap(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (array) => flatMap(array, theFunction);
    }
    const [array, theFunction] = args;
    return array.flatMap((element, index) => theFunction(element, { index }));
}

exports.flatMap = flatMap;
