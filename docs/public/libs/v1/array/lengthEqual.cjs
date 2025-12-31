'use strict';

function lengthEqual(...args) {
    if (args.length === 1) {
        const [minLength] = args;
        return (array) => lengthEqual(array, minLength);
    }
    const [array, minLength] = args;
    return array.length === minLength;
}

exports.lengthEqual = lengthEqual;
