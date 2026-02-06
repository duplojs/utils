'use strict';

var unwrap = require('../../../common/unwrap.cjs');

function equal(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (input) => equal(input, value);
    }
    const [input, value] = args;
    return unwrap.unwrap(input).toString() === unwrap.unwrap(value).toString();
}

exports.equal = equal;
