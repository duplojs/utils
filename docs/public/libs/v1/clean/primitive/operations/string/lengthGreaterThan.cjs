'use strict';

var unwrap = require('../../../../common/unwrap.cjs');

function lengthGreaterThan(...args) {
    if (args.length === 1) {
        const [length] = args;
        return (primitive) => lengthGreaterThan(primitive, length);
    }
    const [primitive, length] = args;
    return unwrap.unwrap(primitive).length > unwrap.unwrap(length);
}

exports.lengthGreaterThan = lengthGreaterThan;
