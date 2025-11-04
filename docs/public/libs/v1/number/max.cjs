'use strict';

function max(...args) {
    if (args.length === 1) {
        const [comparison] = args;
        return (value) => max(value, comparison);
    }
    const [value, comparison] = args;
    return Math.max(value, comparison);
}

exports.max = max;
