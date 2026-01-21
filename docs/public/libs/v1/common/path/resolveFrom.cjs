'use strict';

var isAbsolute = require('./isAbsolute.cjs');
var resolveRelative = require('./resolveRelative.cjs');
var success = require('../../either/right/success.cjs');
var fail = require('../../either/left/fail.cjs');

function resolveFrom(...args) {
    if (args.length === 1) {
        const [origin] = args;
        return (paths) => resolveFrom(paths, origin);
    }
    const [paths, origin] = args;
    const result = resolveRelative.resolveRelative(origin, ...paths);
    return isAbsolute.isAbsolute(result)
        ? success.success(result)
        : fail.fail();
}

exports.resolveFrom = resolveFrom;
