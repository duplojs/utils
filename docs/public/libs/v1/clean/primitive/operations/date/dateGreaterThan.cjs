'use strict';

var greaterThan = require('../../../../date/operators/greaterThan.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function dateGreaterThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (primitive) => dateGreaterThan(primitive, threshold);
    }
    const [primitive, threshold] = args;
    return greaterThan.greaterThan(unwrap.unwrap(primitive), unwrap.unwrap(threshold));
}

exports.dateGreaterThan = dateGreaterThan;
