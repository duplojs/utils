'use strict';

var unwrap = require('../../../../common/unwrap.cjs');

function lengthLessThan(...args) {
    if (args.length === 1) {
        const [length] = args;
        return (primitive) => lengthLessThan(primitive, length);
    }
    const [primitive, length] = args;
    return unwrap.unwrap(primitive).length < unwrap.unwrap(length);
}

exports.lengthLessThan = lengthLessThan;
