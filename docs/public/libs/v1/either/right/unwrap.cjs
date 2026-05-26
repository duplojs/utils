'use strict';

var unwrap = require('../../common/unwrap.cjs');
var is = require('./is.cjs');

/**
 * {@include either/unwrapRight/index.md}
 */
function unwrapRight(input) {
    if (is.isRight(input)) {
        return unwrap.unwrap(input);
    }
    return input;
}

exports.unwrapRight = unwrapRight;
