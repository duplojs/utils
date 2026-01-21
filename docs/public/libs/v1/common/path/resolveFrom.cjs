'use strict';

var isAbsolute = require('./isAbsolute.cjs');
var normalizeString = require('./utils/normalizeString.cjs');
var normalizeWindowsPath = require('./utils/normalizeWindowsPath.cjs');
var map = require('../../array/map.cjs');
var push = require('../../array/push.cjs');
var reduce = require('../../array/reduce.cjs');
var length = require('../../string/length.cjs');
var concat = require('../../string/concat.cjs');

function resolveFrom(...args) {
    if (args.length === 1) {
        const [origin] = args;
        return (paths) => resolveFrom(paths, origin);
    }
    const [paths, origin] = args;
    const localPaths = map.map(paths, normalizeWindowsPath.normalizeWindowsPath);
    const localOrigin = normalizeWindowsPath.normalizeWindowsPath(origin);
    const allPaths = push.push(localPaths, localOrigin);
    const resolved = reduce.reduce(allPaths, reduce.reduceFrom({
        resolvedPath: "",
        resolvedAbsolute: false,
    }), ({ element, lastValue, next, exit }) => {
        if (lastValue.resolvedAbsolute) {
            return exit(lastValue);
        }
        if (length.length(element) === 0) {
            return next(lastValue);
        }
        return next({
            resolvedPath: concat.concat(element, "/", lastValue.resolvedPath),
            resolvedAbsolute: isAbsolute.isAbsolute(element),
        });
    });
    const normalizedPath = normalizeString.normalizeString(resolved.resolvedPath, { allowAboveRoot: !resolved.resolvedAbsolute });
    if (resolved.resolvedAbsolute && !isAbsolute.isAbsolute(normalizedPath)) {
        return concat.concat("/", normalizedPath);
    }
    return length.length(normalizedPath) > 0 ? normalizedPath : ".";
}

exports.resolveFrom = resolveFrom;
