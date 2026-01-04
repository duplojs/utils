'use strict';

/**
 * {@include array/minOf/index.md}
 */
function minOf(values) {
    const [first, ...rest] = values;
    if (first === undefined) {
        return undefined;
    }
    let result = first;
    for (const value of rest) {
        if (value < result) {
            result = value;
        }
    }
    return result;
}

exports.minOf = minOf;
