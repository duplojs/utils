'use strict';

function greaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (value) => greaterThan(value, threshold);
    }
    const [value, threshold] = args;
    return value > threshold;
}

exports.greaterThan = greaterThan;
