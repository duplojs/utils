'use strict';

var unwrap = require('../../../../common/unwrap.cjs');

function lessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => lessThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return unwrap.unwrap(primitive) < unwrap.unwrap(threshold);
}

exports.lessThan = lessThan;
