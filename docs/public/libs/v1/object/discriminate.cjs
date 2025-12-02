'use strict';

var equal = require('../common/equal.cjs');

function discriminate(...args) {
    if (args.length === 2) {
        const [key, value] = args;
        return (input) => discriminate(input, key, value);
    }
    const [input, key, value] = args;
    return equal.equal(input[key], value);
}

exports.discriminate = discriminate;
