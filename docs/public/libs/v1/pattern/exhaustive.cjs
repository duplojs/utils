'use strict';

var unwrap = require('../common/unwrap.cjs');

/**
 * {@include pattern/exhaustive/index.md}
 */
function exhaustive(result) {
    return unwrap.unwrap(result);
}

exports.exhaustive = exhaustive;
