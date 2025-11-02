'use strict';

function toTuple(...args) {
    if (args.length === 1) {
        const [shape] = args;
        return (input) => toTuple(input, shape);
    }
    const [input, shapeObject] = args;
    return shapeObject.map((theFunction) => theFunction(input));
}

exports.toTuple = toTuple;
