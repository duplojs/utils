'use strict';

var getDeepProperty = require('./getDeepProperty.cjs');
var equal = require('../common/equal.cjs');

function deepDiscriminate(...args) {
    if (args.length === 2) {
        const [path, value] = args;
        return (input) => deepDiscriminate(input, path, value);
    }
    const [input, path, value] = args;
    return equal.equal(getDeepProperty.getDeepProperty(input, path), value);
}

exports.deepDiscriminate = deepDiscriminate;
