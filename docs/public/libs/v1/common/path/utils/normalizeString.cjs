'use strict';

var split = require('../../../string/split.cjs');
var reduce = require('../../../array/reduce.cjs');
var length = require('../../../string/length.cjs');
var length$1 = require('../../../array/length.cjs');
var pop = require('../../../array/pop.cjs');
var join = require('../../../array/join.cjs');

function normalizeString(path, params) {
    const segments = split.split(path, "/");
    const normalizedSegments = reduce.reduce(segments, reduce.reduceFrom([]), ({ element, lastValue, next, nextPush }) => {
        if (length.length(element) === 0 || element === ".") {
            return next(lastValue);
        }
        if (element === "..") {
            const lastIndex = length$1.length(lastValue) - 1;
            const lastSegment = lastIndex >= 0 ? lastValue[lastIndex] : "";
            if (lastIndex >= 0 && lastSegment !== "..") {
                return next(pop.pop(lastValue));
            }
            if (params?.allowAboveRoot) {
                return nextPush(lastValue, "..");
            }
            return next(lastValue);
        }
        return nextPush(lastValue, element);
    });
    return join.join(normalizedSegments, "/");
}

exports.normalizeString = normalizeString;
