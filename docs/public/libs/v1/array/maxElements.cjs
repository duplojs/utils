'use strict';

function maxElements(...args) {
    if (args.length === 1) {
        const [maxLength] = args;
        return (array) => maxElements(array, maxLength);
    }
    const [array, maxLength] = args;
    return array.length <= maxLength;
}

exports.maxElements = maxElements;
