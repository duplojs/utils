'use strict';

var unwrap = require('../../../../common/unwrap.cjs');

function lengthEqual(...args) {
    if (args.length === 1) {
        const [length] = args;
        return (primitive) => lengthEqual(primitive, length);
    }
    const [primitive, length] = args;
    return unwrap.unwrap(primitive).length === unwrap.unwrap(length);
}

exports.lengthEqual = lengthEqual;
