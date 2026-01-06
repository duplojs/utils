'use strict';

var greaterThanTime = require('../../../../date/operators/greaterThanTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function timeGreaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => timeGreaterThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return greaterThanTime.greaterThanTime(unwrap.unwrap(primitive), unwrap.unwrap(threshold));
}

exports.timeGreaterThan = timeGreaterThan;
