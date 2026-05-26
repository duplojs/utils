'use strict';

var unwrap = require('../../common/unwrap.cjs');
var is = require('./is.cjs');

/**
 * {@include either/unwrapLeft/index.md}
 */
function unwrapLeft(input) {
    if (is.isLeft(input)) {
        return unwrap.unwrap(input);
    }
    return input;
}

exports.unwrapLeft = unwrapLeft;
