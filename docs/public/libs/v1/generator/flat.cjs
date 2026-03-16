'use strict';

function* flat(iterator, depth = 1) {
    for (const value of iterator) {
        if (depth >= 1
            && value
            && typeof value === "object"
            && Symbol.iterator in value) {
            yield* flat(value, depth - 1);
        }
        else {
            yield value;
        }
    }
}

exports.flat = flat;
