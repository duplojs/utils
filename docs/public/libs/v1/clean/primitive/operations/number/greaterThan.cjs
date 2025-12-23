'use strict';

var unwrap = require('../../../../common/unwrap.cjs');

function greaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => greaterThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return unwrap.unwrap(primitive) > unwrap.unwrap(threshold);
}

exports.greaterThan = greaterThan;
