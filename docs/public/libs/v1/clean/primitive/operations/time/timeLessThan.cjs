'use strict';

var lessThanTime = require('../../../../date/operators/lessThanTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function timeLessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => timeLessThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return lessThanTime.lessThanTime(unwrap.unwrap(primitive), unwrap.unwrap(threshold));
}

exports.timeLessThan = timeLessThan;
