'use strict';

var isAbsolute = require('./isAbsolute.cjs');
var resolveRelative = require('./resolveRelative.cjs');
var success = require('../../either/right/success.cjs');
var fail = require('../../either/left/fail.cjs');

/**
 * {@include common/path/resolveFrom/index.md}
 */
function resolveFrom(origin, segments) {
    const result = resolveRelative.resolveRelative([origin, ...segments]);
    return isAbsolute.isAbsolute(result)
        ? success.success(result)
        : fail.fail();
}

exports.resolveFrom = resolveFrom;
