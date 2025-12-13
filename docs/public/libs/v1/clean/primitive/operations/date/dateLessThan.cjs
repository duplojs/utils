'use strict';

var lessThan = require('../../../../date/operators/lessThan.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function dateLessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => dateLessThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return lessThan.lessThan(unwrap.unwrap(primitive), unwrap.unwrap(threshold));
}

exports.dateLessThan = dateLessThan;
